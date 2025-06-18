"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Brain, Star, Users, Video, Shield, Fish } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Nền tảng học bơi #1
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Floaty
              </span>
              <br />
              <span className="text-gray-800">Học bơi</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                An toàn & Vui vẻ
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Khám phá thế giới bơi lội qua video hướng dẫn sinh động và quiz tương tác thú vị. Cùng Floaty xây dựng kỹ năng an toàn dưới nước!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-xl text-lg px-8 py-4"
              >
                <PlayCircle className="h-6 w-6 mr-3" />
                Bắt đầu học ngay
              </Button>
              <Link href="#quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-4"
                >
                  <Brain className="h-6 w-6 mr-3" />
                  Thử quiz miễn phí
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">10K+</div>
                <div className="text-gray-600 text-sm">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 text-sm">Video bài học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">95%</div>
                <div className="text-gray-600 text-sm">Hài lòng</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Trẻ em học bơi vui vẻ"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-2xl shadow-lg">
                <Fish className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-cyan-400 text-white p-4 rounded-2xl shadow-lg">
                <Shield className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
