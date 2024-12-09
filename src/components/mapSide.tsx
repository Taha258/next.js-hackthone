import Link from "next/link"
import { cn } from "@/lib/utils"
import { BarChart3, Calendar, CheckCircle, HelpCircle, LayoutDashboard, LogOut, Settings, Map } from 'lucide-react'

const navigation = [
  { name: "Dashboard", href: "#", icon: LayoutDashboard, current: true },
  { name: "Confirm", href: "#", icon: CheckCircle, current: false },
  { name: "Insight", href: "#", icon: BarChart3, current: false },
  { name: "Map", href: "#", icon: Map, current: false },
  { name: "Calendar", href: "#", icon: Calendar, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
  { name: "Help Center", href: "#", icon: HelpCircle, current: false },
]

export function MapSide() {
  return (
    <div className="flex h-screen w-[240px] flex-col bg-primary-foreground p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">CarRent</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              item.current
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary">
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </div>
  )
}

