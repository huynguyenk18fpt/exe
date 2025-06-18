"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Video, Brain, Trophy, Users } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tại sao chọn{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Floaty
            </span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nền tảng học bơi hiện đại với phương pháp giảng dạy tương tác và công nghệ tiên tiến
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-blue-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Video HD chất lượng cao</h3>
              <p className="text-gray-600">Hướng dẫn chi tiết từng động tác với góc quay chuyên nghiệp</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-cyan-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-green-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Quiz tương tác thông minh</h3>
              <p className="text-gray-600">Luyện tập xử lý tình huống thực tế với AI đánh giá</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Theo dõi tiến độ</h3>
              <p className="text-gray-600">Hệ thống đánh giá và chứng chỉ hoàn thành khóa học</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-pink-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Cộng đồng học tập</h3>
              <p className="text-gray-600">Kết nối với bạn bè, chia sẻ kinh nghiệm và động lực</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
