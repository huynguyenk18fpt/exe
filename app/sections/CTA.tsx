"use client"

import { Button } from "@/components/ui/button"
import { Phone, User } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Sẵn sàng bắt đầu hành trình học bơi?
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 mb-12 leading-relaxed">
            Tham gia cộng đồng 10,000+ học viên đã tin tưởng Floaty để học bơi an toàn và hiệu quả
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 shadow-xl text-lg px-10 py-4">
              <User className="h-6 w-6 mr-3" />
              Đăng ký miễn phí
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 text-lg px-10 py-4"
            >
              <Phone className="h-6 w-6 mr-3" />
              Liên hệ tư vấn
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-cyan-200">Miễn phí</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-cyan-200">Hỗ trợ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-cyan-200">Không giới hạn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
