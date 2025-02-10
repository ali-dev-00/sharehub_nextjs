import Link from "next/link"
import { Home, Folder } from "lucide-react"

export function DashboardNav() {
  return (
    <div className="w-48 border-r h-screen p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
          <Home className="w-4 h-4" />
          Home
        </Link>
        <Link href="/dashboard/folders" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
          <Folder className="w-4 h-4" />
          Folders
        </Link>
      </nav>
    </div>
  )
}

