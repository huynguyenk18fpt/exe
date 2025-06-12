"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ShieldCheck,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Eye,
  ArrowRight,
  ArrowLeft,
  Home,
  Sun,
  Heart,
} from "lucide-react"
import Link from "next/link"

import { getQuizData } from "@/data/quiz-questions"

const quizData = getQuizData("safety")
const safetyQuestions = quizData?.questions || []
const quizTitle = quizData?.title || "Bơi ở nơi không giám sát"

export default function SafetyQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(quizData?.timePerQuestion || 12)
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

      if (selectedAnswer === safetyQuestions[currentQuestion].correct) {
        setScore(score + 1)
      }
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < safetyQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(quizData?.timePerQuestion || 12)
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
    setTimeLeft(quizData?.timePerQuestion || 12)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / safetyQuestions.length) * 100
    if (percentage >= 80)
      return {
        message: "Xuất sắc! Bạn có ý thức an toàn rất cao",
        badge: "Chuyên gia An toàn",
        color: "text-green-600",
      }
    if (percentage >= 60)
      return { message: "Tốt! Cần nâng cao thêm ý thức an toàn", badge: "Người bơi cẩn thận", color: "text-yellow-600" }
    return {
      message: "Cần cải thiện! Hãy tìm hiểu thêm về an toàn",
      badge: "Người học an toàn",
      color: "text-orange-600",
    }
  }

  if (quizCompleted) {
    const scoreInfo = getScoreMessage()
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-4">
              <Home className="h-5 w-5 mr-2" />
              Về trang chủ
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz hoàn thành!</h1>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-lg px-6 py-2">
                  {scoreInfo.badge}
                </Badge>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-yellow-500 mb-2">
                  {score}/{safetyQuestions.length}
                </div>
                <div className="text-xl text-gray-600 mb-4">Điểm số của bạn</div>
                <div className={`text-lg font-medium ${scoreInfo.color}`}>{scoreInfo.message}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Làm lại quiz
                </Button>
                <Link href="/quiz/emergency">
                  <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                    Quay lại quiz đầu tiên <ArrowRight className="h-5 w-5 ml-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-yellow-600 hover:text-yellow-700">
            <Home className="h-5 w-5 mr-2" />
            Trang chủ
          </Link>
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
              <ShieldCheck className="h-4 w-4 mr-2" />
              An toàn
            </Badge>
            {!timedMode && (
              <Button
                onClick={() => setTimedMode(true)}
                variant="outline"
                size="sm"
                className="border-yellow-300 text-yellow-600 hover:bg-yellow-50"
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
              Câu {currentQuestion + 1}/{safetyQuestions.length}
            </div>
          </div>
          <Progress value={((currentQuestion + 1) / safetyQuestions.length) * 100} className="h-3 bg-yellow-100" />
          {timedMode && (
            <div className="flex items-center justify-center mt-4">
              <div className="bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {timeLeft}s
              </div>
            </div>
          )}
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-xl bg-white mb-8">
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
            <CardTitle className="text-xl flex items-center">
              <Eye className="h-6 w-6 mr-3" />
              {safetyQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              {safetyQuestions[currentQuestion].options.map((option, index) => {
                const letter = option.charAt(0)
                const isSelected = selectedAnswer === letter
                const isCorrect = letter === safetyQuestions[currentQuestion].correct
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
                            ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                            : "border-gray-200 hover:border-yellow-300 hover:bg-yellow-50"
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
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                    <Sun className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Giải thích:</h4>
                    <p className="text-amber-700">{safetyQuestions[currentQuestion].explanation}</p>
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
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
              >
                {currentQuestion === safetyQuestions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Score Display */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Heart className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="font-semibold text-gray-700">
              Điểm hiện tại: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
