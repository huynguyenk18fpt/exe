"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Waves } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-2xl">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Floaty
                </h3>
                <p className="text-gray-400 text-sm">Học bơi an toàn, vui vẻ</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nền tảng học bơi trực tuyến hàng đầu Việt Nam, giúp mọi người tiếp cận kiến thức bơi lội một cách dễ dàng và hiệu quả.
            </p>
          </div>

          {/* Học tập */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Học tập</h4>
            <ul className="space-y-3">
              <li><Link href="#videos" className="text-gray-300 hover:text-cyan-400">Video bơi lội</Link></li>
              <li><Link href="#quiz" className="text-gray-300 hover:text-cyan-400">Quiz tình huống</Link></li>
              <li><Link href="#resources" className="text-gray-300 hover:text-cyan-400">Tài nguyên</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-cyan-400">Chứng chỉ</Link></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-cyan-400">Câu hỏi thường gặp</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-cyan-400">Hướng dẫn sử dụng</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-cyan-400">Liên hệ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-cyan-400">Báo cáo lỗi</Link></li>
            </ul>
          </div>

          {/* Kết nối */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Kết nối</h4>
            <div className="space-y-4">
              <p className="text-gray-300">Theo dõi chúng tôi để cập nhật thông tin mới nhất</p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/Nguyen12c1" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Facebook</Button>
                </a>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">YouTube</Button>
              </div>
              <div className="pt-4">
                <p className="text-gray-400 text-sm">📧 nguyenhhce181330@fpt.edu.vn</p>
                <p className="text-gray-400 text-sm">📞 0973 124 868</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Floaty. Tất cả quyền được bảo lưu. |
            <Link href="#" className="hover:text-cyan-400 ml-1">Chính sách bảo mật</Link> |
            <Link href="#" className="hover:text-cyan-400 ml-1">Điều khoản sử dụng</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
