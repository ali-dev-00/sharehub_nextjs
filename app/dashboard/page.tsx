"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Plus, FolderPlus, Download, Repeat, Share2, Clock, Star, LayoutGrid, List } from "lucide-react";
import { FileGrid } from "@/components/file-grid";

export default function Dashboard() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0.8,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  const suggestedFiles = [
    { id: 1, name: "Project Proposal", type: "pdf", size: "2.5 MB", modified: "2024-02-10" },
    { id: 2, name: "Design Assets", type: "folder", size: "156 MB", modified: "2024-02-09" },
  ]

  const recentFiles = [
    { id: 1, name: "Presentation.pptx", type: "pptx", size: "5.8 MB", modified: "2024-02-10" },
    { id: 2, name: "Budget.xlsx", type: "xlsx", size: "1.2 MB", modified: "2024-02-09" },
    { id: 3, name: "Report.pdf", type: "pdf", size: "3.4 MB", modified: "2024-02-08" },
  ]

  const starredFiles = [
    { id: 1, name: "Important Documents", type: "folder", size: "234 MB", modified: "2024-02-07" },
    { id: 2, name: "Contract.pdf", type: "pdf", size: "1.8 MB", modified: "2024-02-06" },
  ]



  return (
    <main className="flex-1 p-6" ref={contentRef}>
      <div className="flex gap-4 mb-8">
        <Button className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload or drop
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <FolderPlus className="w-4 h-4" />
          Create folder
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Get the app
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Repeat className="w-4 h-4" />
          Transfer a copy
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Suggested for you</h2>
        <FileGrid files={suggestedFiles} />
      </div>

      <Tabs defaultValue="recents">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="recents" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recents
            </TabsTrigger>
            <TabsTrigger value="starred" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Starred
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <TabsContent value="recents">
          <FileGrid files={recentFiles} />
        </TabsContent>
        <TabsContent value="starred">
          <FileGrid files={starredFiles} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
