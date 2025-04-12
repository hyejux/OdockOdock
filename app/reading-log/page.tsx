"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Calendar, Clock } from "lucide-react"

// Sample book data
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "read",
    dateFinished: "2023-12-15",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "read",
    dateFinished: "2023-11-20",
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "reading",
    progress: 65,
  },
  {
    id: 4,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "to-read",
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "read",
    dateFinished: "2023-10-05",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "to-read",
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "reading",
    progress: 30,
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "read",
    dateFinished: "2023-08-12",
  },
  {
    id: 9,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverUrl: "/placeholder.svg?height=200&width=130",
    status: "to-read",
  },
]

type SortOption = "title" | "author" | "recent" | "status"

export default function ReadingLog() {
  const [sortBy, setSortBy] = useState<SortOption>("recent")
  const [filter, setFilter] = useState("all")

  // Sort books based on selected option
  const sortedBooks = [...books].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title)
      case "author":
        return a.author.localeCompare(b.author)
      case "recent":
        // Sort by date finished (for read books) or by status priority
        if (a.status === "read" && b.status === "read" && a.dateFinished && b.dateFinished) {
          return new Date(b.dateFinished).getTime() - new Date(a.dateFinished).getTime()
        }
        // For different statuses, prioritize reading > to-read > read
        const statusPriority = { reading: 3, "to-read": 2, read: 1 }
        return (
          statusPriority[b.status as keyof typeof statusPriority] -
          statusPriority[a.status as keyof typeof statusPriority]
        )
      case "status":
        // Group by status: reading > to-read > read
        const statusOrder = { reading: 1, "to-read": 2, read: 3 }
        return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder]
      default:
        return 0
    }
  })

  // Filter books based on selected filter
  const filteredBooks = filter === "all" ? sortedBooks : sortedBooks.filter((book) => book.status === filter)

  return (
    <div className="container px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">My Reading Log</h1>
        <p className="text-muted-foreground">Track and organize your books</p>
      </header>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Books</SelectItem>
              <SelectItem value="reading">Reading</SelectItem>
              <SelectItem value="read">Completed</SelectItem>
              <SelectItem value="to-read">To Read</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="overflow-hidden">
            <div className="relative aspect-[2/3] w-full">
              <img
                src={book.coverUrl || "/placeholder.svg"}
                alt={`Cover of ${book.title}`}
                className="h-full w-full object-cover"
              />
              {book.status === "reading" && (
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 px-2 py-1 text-center text-xs text-primary-foreground">
                  {book.progress}% Complete
                </div>
              )}
              {book.status === "read" && (
                <div className="absolute bottom-0 left-0 right-0 bg-green-600/80 px-2 py-1 text-center text-xs text-white">
                  Completed
                </div>
              )}
              {book.status === "to-read" && (
                <div className="absolute bottom-0 left-0 right-0 bg-muted/80 px-2 py-1 text-center text-xs">
                  To Read
                </div>
              )}
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium leading-tight">{book.title}</h3>
              <p className="text-xs text-muted-foreground">{book.author}</p>
              {book.status === "read" && book.dateFinished && (
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(book.dateFinished).toLocaleDateString()}
                </div>
              )}
              {book.status === "reading" && (
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  In Progress
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="gap-2">
          <BookOpen className="h-4 w-4" />
          Add New Book
        </Button>
      </div>
    </div>
  )
}
