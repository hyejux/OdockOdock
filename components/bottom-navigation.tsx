"use client"

import { Home, BookOpen, User, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Reading Log",
      href: "/reading-log",
      icon: BookOpen,
    },
    {
      name: "Discover",
      href: "/discover",
      icon: Search,
    },
    {
      name: "My Page",
      href: "/my-page",
      icon: User,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-4",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
