import { File, Folder } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface File {
  id: number
  name: string
  type: string
  size: string
  modified: string
}

interface FileGridProps {
  files: File[]
}

export function FileGrid({ files }: FileGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {files.map((file) => (
        <Card key={file.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {file.type === "folder" ? (
                <Folder className="w-8 h-8 text-blue-500" />
              ) : (
                <File className="w-8 h-8 text-gray-500" />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {file.size} • Modified {file.modified}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

