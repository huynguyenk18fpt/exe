import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Users,
  BookOpen,
  Video,
  Download,
  Trophy,
  Phone,
  Heart,
  Waves,
  Fish,
  Star,
  Clock,
  User,
  GraduationCap,
  Target,
  Award,
  ChevronRight,
  PlayCircle,
  Brain,
  Shield,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
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

      {/* Hero Section */}
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
                Khám phá thế giới bơi lội qua video hướng dẫn sinh động và quiz tương tác thú vị. Cùng Floaty xây dựng
                kỹ năng an toàn dưới nước!
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

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tại sao chọn{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Floaty</span>?
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

      {/* Video Library Section */}
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

          {/* Level Tabs */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Học bơi ếch cơ bản"
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
                  8:30
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Bơi ếch - Kỹ thuật cơ bản</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Học cách di chuyển tay và chân phối hợp trong bơi ếch, phù hợp cho người mới bắt đầu
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      2.5K lượt xem
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      4.8
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-cyan-600 hover:text-cyan-700">
                    Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Kỹ thuật nổi trên mặt nước"
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
                  6:15
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Kỹ thuật nổi trên mặt nước</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Học cách thư giãn và duy trì tư thế nổi an toàn, kỹ năng quan trọng nhất khi bơi
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      3.2K lượt xem
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      4.9
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-cyan-600 hover:text-cyan-700">
                    Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative group">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Bơi ngửa cho người mới"
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
                  12:45
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Bơi ngửa cho người mới</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Hướng dẫn từng bước học bơi ngửa, kiểu bơi dễ thở và phù hợp cho mọi lứa tuổi
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      1.8K lượt xem
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      4.7
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-cyan-600 hover:text-cyan-700">
                    Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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

      {/* Quiz Section */}
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
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5 câu hỏi</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>~5 phút</span>
                    <span>2.1K lượt chơi</span>
                  </div>
                </div>
                <Link href="/quiz/emergency">
                  <Button className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white">
                    <Brain className="h-4 w-4 mr-2" />
                    Bắt đầu quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>

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
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5 câu hỏi</span>
                    <span>⭐ 4.9/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>~8 phút</span>
                    <span>1.8K lượt chơi</span>
                  </div>
                </div>
                <Link href="/quiz/rescue">
                  <Button className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 text-white">
                    <Brain className="h-4 w-4 mr-2" />
                    Bắt đầu quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>

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
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5 câu hỏi</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>~6 phút</span>
                    <span>3.2K lượt chơi</span>
                  </div>
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

      {/* Resources Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Sẵn sàng bắt đầu hành trình học bơi?</h2>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
                Nền tảng học bơi trực tuyến hàng đầu Việt Nam, giúp mọi người tiếp cận kiến thức bơi lội một cách dễ
                dàng và hiệu quả.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Học tập</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#videos" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Video bơi lội
                  </Link>
                </li>
                <li>
                  <Link href="#quiz" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Quiz tình huống
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Tài nguyên
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Chứng chỉ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Hỗ trợ</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Câu hỏi thường gặp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Hướng dẫn sử dụng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Báo cáo lỗi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Kết nối</h4>
              <div className="space-y-4">
                <p className="text-gray-300">Theo dõi chúng tôi để cập nhật thông tin mới nhất</p>
                <div className="flex space-x-3">
                  <a
  href="https://www.facebook.com/Nguyen12c1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
    Facebook
  </Button>
</a>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    YouTube
                  </Button>
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
              <Link href="#" className="hover:text-cyan-400 ml-1">
                Chính sách bảo mật
              </Link>{" "}
              |
              <Link href="#" className="hover:text-cyan-400 ml-1">
                Điều khoản sử dụng
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
