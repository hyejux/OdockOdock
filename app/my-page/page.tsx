import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, HelpCircle, LogOut, Settings, User } from "lucide-react"

export default function MyPage() {
  return (
    <div className="container px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">My Page</h1>
        <p className="text-muted-foreground">Manage your account and settings</p>
      </header>

      <div className="mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
                <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Jane Smith</h2>
                <p className="text-sm text-muted-foreground">jane.smith@example.com</p>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4" />
                  <span>42 books in library</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="settings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="help">Help</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" /> App Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">Toggle dark mode on or off</p>
                </div>
                <div className="h-6 w-11 rounded-full bg-muted p-1">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive reading reminders</p>
                </div>
                <div className="h-6 w-11 rounded-full bg-primary p-1">
                  <div className="ml-auto h-4 w-4 rounded-full bg-white"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Reading Goals</h3>
                  <p className="text-sm text-muted-foreground">Set daily reading targets</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm">jane.smith@example.com</p>
                <Button variant="link" className="h-auto p-0 text-xs">
                  Change email
                </Button>
              </div>

              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-sm">••••••••</p>
                <Button variant="link" className="h-auto p-0 text-xs">
                  Change password
                </Button>
              </div>

              <div>
                <h3 className="font-medium">Connected Accounts</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <span>Google</span>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <span>Facebook</span>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="destructive" className="mt-4 w-full gap-2">
                <LogOut className="h-4 w-4" /> Log Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" /> Frequently Asked Questions
              </CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">How do I add a book to my reading log?</h3>
                <p className="text-sm text-muted-foreground">
                  To add a book, go to your Reading Log and click the "Add New Book" button. You can search for books by
                  title, author, or ISBN.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">How do I update my reading progress?</h3>
                <p className="text-sm text-muted-foreground">
                  Open the book in your Reading Log and use the progress slider to update how far you've read.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Can I export my reading history?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Go to Settings > Data > Export Reading History to download your data in CSV format.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">How do I delete my account?</h3>
                <p className="text-sm text-muted-foreground">
                  Account deletion can be done from the Account tab. Please note this action cannot be undone.
                </p>
              </div>

              <Button className="mt-2 w-full">Contact Support</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
