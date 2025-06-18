"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Brain, Shield, Target, Trophy } from "lucide-react"
import Link from "next/link"

export default function Quiz() {
  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Quiz{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tình huống thực tế
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luyện tập xử lý các tình huống khẩn cấp và nâng cao kỹ năng an toàn dưới nước
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quiz 1 */}
          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-red-400 to-orange-400 text-white">Khẩn cấp</Badge>
                <div className="bg-gradient-to-r from-red-400 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl text-gray-800">Xử lý chuột rút khi bơi</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                Bạn đang bơi ở giữa hồ và đột nhiên bị chuột rút ở chân. Hãy chọn cách xử lý đúng nhất.
              </CardDescription>
              <div className="space-y-3 mb-6 text-sm text-gray-500">
                <div className="flex justify-between"><span>5 câu hỏi</span><span>⭐ 4.8/5</span></div>
                <div className="flex justify-between"><span>~5 phút</span><span>2.1K lượt chơi</span></div>
              </div>
              <Link href="/quiz/emergency">
                <Button className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white">
                  <Brain className="h-4 w-4 mr-2" />
                  Bắt đầu quiz
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quiz 2 */}
          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white">Cứu hộ</Badge>
                <div className="bg-gradient-to-r from-blue-400 to-indigo-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl text-gray-800">Phát hiện người đuối nước</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                Bạn thấy một người có dấu hiệu đuối nước. Cách tiếp cận và cứu hộ an toàn nhất là gì?
              </CardDescription>
              <div className="space-y-3 mb-6 text-sm text-gray-500">
                <div className="flex justify-between"><span>5 câu hỏi</span><span>⭐ 4.9/5</span></div>
                <div className="flex justify-between"><span>~8 phút</span><span>1.8K lượt chơi</span></div>
              </div>
              <Link href="/quiz/rescue">
                <Button className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 text-white">
                  <Brain className="h-4 w-4 mr-2" />
                  Bắt đầu quiz
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quiz 3 */}
          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-cyan-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-green-400 to-cyan-400 text-white">An toàn</Badge>
                <div className="bg-gradient-to-r from-green-400 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl text-gray-800">Bơi ở nơi không giám sát</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                Các biện pháp an toàn cần thiết khi bơi ở những nơi không có nhân viên cứu hộ.
              </CardDescription>
              <div className="space-y-3 mb-6 text-sm text-gray-500">
                <div className="flex justify-between"><span>5 câu hỏi</span><span>⭐ 4.7/5</span></div>
                <div className="flex justify-between"><span>~6 phút</span><span>3.2K lượt chơi</span></div>
              </div>
              <Link href="/quiz/safety">
                <Button className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white">
                  <Brain className="h-4 w-4 mr-2" />
                  Bắt đầu quiz
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <Trophy className="h-5 w-5 mr-2" />
            Xem bảng xếp hạng
          </Button>
        </div>
      </div>
    </section>
  )
}
