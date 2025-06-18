"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, Play, Star, Users, Video, Zap } from "lucide-react"
import Image from "next/image"

export default function VideoLibrary() {
  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Thư viện{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Video Bơi Lội
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Học từng bước với video hướng dẫn chi tiết, phân loại theo cấp độ từ cơ bản đến nâng cao
          </p>
        </div>

        {/* Tabs giả định */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-2">
              <Button className="bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-xl px-6">
                <Zap className="h-4 w-4 mr-2" />
                Cơ bản
              </Button>
              <Button variant="ghost" className="text-gray-600 rounded-xl px-6">
                Trung bình
              </Button>
              <Button variant="ghost" className="text-gray-600 rounded-xl px-6">
                Nâng cao
              </Button>
            </div>
          </div>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Video học bơi"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30">
                      <Play className="h-4 w-4 mr-2" />
                      Xem ngay
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Cơ bản</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {index === 0 ? "8:30" : index === 1 ? "6:15" : "12:45"}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {index === 0
                    ? "Bơi ếch - Kỹ thuật cơ bản"
                    : index === 1
                    ? "Kỹ thuật nổi trên mặt nước"
                    : "Bơi ngửa cho người mới"}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {index === 0
                    ? "Học cách di chuyển tay và chân phối hợp trong bơi ếch, phù hợp cho người mới bắt đầu"
                    : index === 1
                    ? "Học cách thư giãn và duy trì tư thế nổi an toàn, kỹ năng quan trọng nhất khi bơi"
                    : "Hướng dẫn từng bước học bơi ngửa, kiểu bơi dễ thở và phù hợp cho mọi lứa tuổi"}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {index === 0 ? "2.5K" : index === 1 ? "3.2K" : "1.8K"} lượt xem
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {index === 0 ? "4.8" : index === 1 ? "4.9" : "4.7"}
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-cyan-600 hover:text-cyan-700">
                    Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-xl"
          >
            <Video className="h-5 w-5 mr-2" />
            Xem tất cả 500+ video
          </Button>
        </div>
      </div>
    </section>
  )
}
