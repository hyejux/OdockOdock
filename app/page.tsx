import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ThumbsUp, User } from "lucide-react"

export default function Home() {
  // Sample data for community posts and recommendations
  const communityPosts = [
    {
      id: 1,
      title: "Why 'The Midnight Library' changed my perspective on life",
      author: "Emma Wilson",
      likes: 42,
      excerpt: "Matt Haig's novel explores the concept of regret and the infinite possibilities of life...",
      bookTitle: "The Midnight Library",
      bookAuthor: "Matt Haig",
    },
    {
      id: 2,
      title: "My journey through Murakami's surreal worlds",
      author: "Alex Chen",
      likes: 38,
      excerpt: "Haruki Murakami has a unique way of blending reality with fantasy that captivates...",
      bookTitle: "Kafka on the Shore",
      bookAuthor: "Haruki Murakami",
    },
    {
      id: 3,
      title: "5 takeaways from 'Atomic Habits'",
      author: "Jordan Lee",
      likes: 56,
      excerpt: "James Clear's practical guide to building good habits and breaking bad ones has transformed...",
      bookTitle: "Atomic Habits",
      bookAuthor: "James Clear",
    },
  ]

  const recommendations = [
    {
      id: 1,
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.8,
      genre: "Science Fiction",
      coverUrl: "/placeholder.svg?height=200&width=130",
    },
    {
      id: 2,
      title: "The Song of Achilles",
      author: "Madeline Miller",
      rating: 4.7,
      genre: "Historical Fiction",
      coverUrl: "/placeholder.svg?height=200&width=130",
    },
    {
      id: 3,
      title: "Educated",
      author: "Tara Westover",
      rating: 4.6,
      genre: "Memoir",
      coverUrl: "/placeholder.svg?height=200&width=130",
    },
  ]

  return (
    <div className="container px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">BookNook</h1>
        <p className="text-muted-foreground">Discover, track, and share your reading journey</p>
      </header>

      <Tabs defaultValue="community" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="community">Community Posts</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="community" className="mt-4 space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <User className="h-3 w-3" /> {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                  <p className="font-medium">{post.bookTitle}</p>
                  <p className="text-muted-foreground">by {post.bookAuthor}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ThumbsUp className="h-4 w-4" /> {post.likes}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="recommendations" className="mt-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {recommendations.map((book) => (
              <Card key={book.id} className="overflow-hidden">
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
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs">{book.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
