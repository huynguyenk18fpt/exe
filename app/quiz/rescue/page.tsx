"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  LifeBuoy,
  ArrowRight,
  ArrowLeft,
  Home,
  Waves,
  Heart,
} from "lucide-react"
import Link from "next/link"

import { getQuizData } from "@/data/quiz-questions"

const quizData = getQuizData("rescue")
const rescueQuestions = quizData?.questions || []
const quizTitle = quizData?.title || "Phát hiện người đuối nước"

export default function RescueQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(quizData?.timePerQuestion || 15)
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

      if (selectedAnswer === rescueQuestions[currentQuestion].correct) {
        setScore(score + 1)
      }
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < rescueQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(quizData?.timePerQuestion || 15)
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
    setTimeLeft(quizData?.timePerQuestion || 15)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / rescueQuestions.length) * 100
    if (percentage >= 80)
      return {
        message: "Tuyệt vời! Bạn có kỹ năng cứu hộ xuất sắc",
        badge: "Cứu hộ viên chuyên nghiệp",
        color: "text-green-600",
      }
    if (percentage >= 60)
      return {
        message: "Khá tốt! Cần luyện tập thêm kỹ năng cứu hộ",
        badge: "Cứu hộ viên tập sự",
        color: "text-blue-600",
      }
    return { message: "Cần học thêm! Hãy tìm hiểu kỹ về cứu hộ", badge: "Người học cứu hộ", color: "text-orange-600" }
  }

  if (quizCompleted) {
    const scoreInfo = getScoreMessage()
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <Home className="h-5 w-5 mr-2" />
              Về trang chủ
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz hoàn thành!</h1>
                <Badge className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-lg px-6 py-2">
                  {scoreInfo.badge}
                </Badge>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-500 mb-2">
                  {score}/{rescueQuestions.length}
                </div>
                <div className="text-xl text-gray-600 mb-4">Điểm số của bạn</div>
                <div className={`text-lg font-medium ${scoreInfo.color}`}>{scoreInfo.message}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Làm lại quiz
                </Button>
                <Link href="/quiz/safety">
                  <Button variant="outline" className="border-yellow-300 text-yellow-600 hover:bg-yellow-50">
                    Quiz tiếp theo: An toàn <ArrowRight className="h-5 w-5 ml-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
            <Home className="h-5 w-5 mr-2" />
            Trang chủ
          </Link>
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
              <Shield className="h-4 w-4 mr-2" />
              Cứu hộ
            </Badge>
            {!timedMode && (
              <Button
                onClick={() => setTimedMode(true)}
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
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
              Câu {currentQuestion + 1}/{rescueQuestions.length}
            </div>
          </div>
          <Progress value={((currentQuestion + 1) / rescueQuestions.length) * 100} className="h-3 bg-blue-100" />
          {timedMode && (
            <div className="flex items-center justify-center mt-4">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {timeLeft}s
              </div>
            </div>
          )}
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-xl bg-white mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
            <CardTitle className="text-xl flex items-center">
              <LifeBuoy className="h-6 w-6 mr-3" />
              {rescueQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              {rescueQuestions[currentQuestion].options.map((option, index) => {
                const letter = option.charAt(0)
                const isSelected = selectedAnswer === letter
                const isCorrect = letter === rescueQuestions[currentQuestion].correct
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
                            ? "border-blue-400 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
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
              <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <Waves className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-800 mb-2">Giải thích:</h4>
                    <p className="text-cyan-700">{rescueQuestions[currentQuestion].explanation}</p>
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
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
              >
                {currentQuestion === rescueQuestions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Score Display */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Heart className="h-5 w-5 text-blue-500 mr-2" />
            <span className="font-semibold text-gray-700">
              Điểm hiện tại: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
