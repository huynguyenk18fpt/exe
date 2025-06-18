// sections/Header.tsx
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Waves } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-cyan-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl shadow-lg">
              <Waves className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Floaty
              </h1>
              <p className="text-sm text-cyan-600 font-medium">Học bơi an toàn, vui vẻ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Trang chủ
            </Link>
            <Link href="#videos" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Video bơi lội
            </Link>
            <Link href="#quiz" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Quiz tình huống
            </Link>
            <Link href="#resources" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Tài nguyên
            </Link>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg">
              <User className="h-4 w-4 mr-2" />
              Đăng nhập
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
