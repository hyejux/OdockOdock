import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star } from "lucide-react"

export default function Discover() {
  // Sample book data for different categories
  const popularBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.2,
      genre: "Fiction",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.8,
      genre: "Self-Help",
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.7,
      genre: "Science Fiction",
    },
  ]

  const newReleases = [
    {
      id: 4,
      title: "Fourth Wing",
      author: "Rebecca Yarros",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.5,
      genre: "Fantasy",
    },
    {
      id: 5,
      title: "Iron Flame",
      author: "Rebecca Yarros",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.6,
      genre: "Fantasy",
    },
    {
      id: 6,
      title: "Yellowface",
      author: "R.F. Kuang",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.1,
      genre: "Contemporary Fiction",
    },
  ]

  const recommendations = [
    {
      id: 7,
      title: "The Song of Achilles",
      author: "Madeline Miller",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.7,
      genre: "Historical Fiction",
    },
    {
      id: 8,
      title: "Educated",
      author: "Tara Westover",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.6,
      genre: "Memoir",
    },
    {
      id: 9,
      title: "The Alchemist",
      author: "Paulo Coelho",
      coverUrl: "/placeholder.svg?height=200&width=130",
      rating: 4.5,
      genre: "Fiction",
    },
  ]

  return (
    <div className="container px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Discover</h1>
        <p className="text-muted-foreground">Find your next favorite book</p>
      </header>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search by title, author, or ISBN" className="pl-10" />
      </div>

      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New Releases</TabsTrigger>
          <TabsTrigger value="for-you">For You</TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="mt-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Button variant="ghost" className="mt-4 w-full">
            Load More
          </Button>
        </TabsContent>

        <TabsContent value="new" className="mt-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {newReleases.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Button variant="ghost" className="mt-4 w-full">
            Load More
          </Button>
        </TabsContent>

        <TabsContent value="for-you" className="mt-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {recommendations.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Button variant="ghost" className="mt-4 w-full">
            Load More
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Book card component
function BookCard({ book }: { book: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[2/3] w-full">
        <img
          src={book.coverUrl || "/placeholder.svg"}
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium leading-tight">{book.title}</h3>
        <p className="text-xs text-muted-foreground">{book.author}</p>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs">{book.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">{book.genre}</span>
        </div>
      </CardContent>
    </Card>
  )
}
