"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
  ArrowRight,
  ArrowLeft,
  Home,
  Zap,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { getQuizData } from "@/data/quiz-questions"

const quizData = getQuizData("emergency")
const emergencyQuestions = quizData?.questions || []
const quizTitle = quizData?.title || "Xử lý chuột rút khi bơi"

export default function EmergencyQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(quizData?.timePerQuestion || 10)
  const [timedMode, setTimedMode] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    if (timedMode && timeLeft > 0 && !showResult && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timedMode && timeLeft === 0 && !showResult) {
      handleNext()
    }
  }, [timeLeft, timedMode, showResult, quizCompleted])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)

      if (selectedAnswer === emergencyQuestions[currentQuestion].correct) {
        setScore(score + 1)
      }
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < emergencyQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(quizData?.timePerQuestion || 10)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setTimeLeft(quizData?.timePerQuestion || 10)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / emergencyQuestions.length) * 100
    if (percentage >= 80)
      return {
        message: "Xuất sắc! Bạn đã nắm vững kỹ năng xử lý khẩn cấp",
        badge: "Chuyên gia Cứu hộ",
        color: "text-green-600",
      }
    if (percentage >= 60)
      return {
        message: "Tốt! Bạn cần ôn luyện thêm một số tình huống",
        badge: "Người bơi thông minh",
        color: "text-blue-600",
      }
    return {
      message: "Cần cải thiện! Hãy xem lại kiến thức và thử lại",
      badge: "Người học tập",
      color: "text-orange-600",
    }
  }

  if (quizCompleted) {
    const scoreInfo = getScoreMessage()
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
              <Home className="h-5 w-5 mr-2" />
              Về trang chủ
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-red-400 to-orange-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz hoàn thành!</h1>
                <Badge className="bg-gradient-to-r from-red-400 to-orange-400 text-white text-lg px-6 py-2">
                  {scoreInfo.badge}
                </Badge>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-red-500 mb-2">
                  {score}/{emergencyQuestions.length}
                </div>
                <div className="text-xl text-gray-600 mb-4">Điểm số của bạn</div>
                <div className={`text-lg font-medium ${scoreInfo.color}`}>{scoreInfo.message}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Làm lại quiz
                </Button>
                <Link href="/quiz/rescue">
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    Quiz tiếp theo: Cứu hộ <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-red-600 hover:text-red-700">
            <Home className="h-5 w-5 mr-2" />
            Trang chủ
          </Link>
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-red-400 to-orange-400 text-white">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Khẩn cấp
            </Badge>
            {!timedMode && (
              <Button
                onClick={() => setTimedMode(true)}
                variant="outline"
                size="sm"
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                <Clock className="h-4 w-4 mr-2" />
                Chế độ thời gian
              </Button>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-800">{quizTitle}</h1>
            <div className="text-sm text-gray-600">
              Câu {currentQuestion + 1}/{emergencyQuestions.length}
            </div>
          </div>
          <Progress value={((currentQuestion + 1) / emergencyQuestions.length) * 100} className="h-3 bg-red-100" />
          {timedMode && (
            <div className="flex items-center justify-center mt-4">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {timeLeft}s
              </div>
            </div>
          )}
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-xl bg-white mb-8">
          <CardHeader className="bg-gradient-to-r from-red-400 to-orange-400 text-white">
            <CardTitle className="text-xl flex items-center">
              <Target className="h-6 w-6 mr-3" />
              {emergencyQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              {emergencyQuestions[currentQuestion].options.map((option, index) => {
                const letter = option.charAt(0)
                const isSelected = selectedAnswer === letter
                const isCorrect = letter === emergencyQuestions[currentQuestion].correct
                const showCorrect = showResult && isCorrect
                const showIncorrect = showResult && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswerSelect(letter)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                      showCorrect
                        ? "border-green-500 bg-green-50 text-green-700"
                        : showIncorrect
                          ? "border-red-500 bg-red-50 text-red-700"
                          : isSelected
                            ? "border-red-400 bg-red-50 text-red-700"
                            : "border-gray-200 hover:border-red-300 hover:bg-red-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                      {showIncorrect && <XCircle className="h-5 w-5 text-red-600" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Giải thích:</h4>
                    <p className="text-blue-700">{emergencyQuestions[currentQuestion].explanation}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0 || showResult}
                className="border-gray-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Câu trước
              </Button>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer || showResult}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
              >
                {currentQuestion === emergencyQuestions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Score Display */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="font-semibold text-gray-700">
              Điểm hiện tại: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
