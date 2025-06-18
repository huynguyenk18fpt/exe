"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, GraduationCap, Heart, Shield } from "lucide-react"

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tài nguyên{" "}
            <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              Miễn phí
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tải về các tài liệu hướng dẫn, infographic và mẹo an toàn dưới nước
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cẩm nang học bơi */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Cẩm nang học bơi</h3>
              <p className="text-gray-600 text-sm mb-6">Hướng dẫn toàn diện từ cơ bản đến nâng cao</p>
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Download className="h-4 w-4 mr-2" />
                Tải PDF (2.5MB)
              </Button>
            </CardContent>
          </Card>

          {/* Infographic an toàn */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-green-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Infographic an toàn</h3>
              <p className="text-gray-600 text-sm mb-6">Poster minh họa các quy tắc an toàn</p>
              <Button variant="outline" size="sm" className="border-green-200 text-green-600 hover:bg-green-50">
                <Download className="h-4 w-4 mr-2" />
                Tải PNG (1.2MB)
              </Button>
            </CardContent>
          </Card>

          {/* Tài liệu giáo viên */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Tài liệu giáo viên</h3>
              <p className="text-gray-600 text-sm mb-6">Bài giảng và kế hoạch dạy học</p>
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Download className="h-4 w-4 mr-2" />
                Tải PPTX (5.1MB)
              </Button>
            </CardContent>
          </Card>

          {/* Checklist phụ huynh */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Checklist phụ huynh</h3>
              <p className="text-gray-600 text-sm mb-6">Danh sách kiểm tra an toàn cho trẻ</p>
              <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                <Download className="h-4 w-4 mr-2" />
                Tải PDF (800KB)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
