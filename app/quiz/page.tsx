"use client"

import { useState } from "react"
import Link from "next/link"
import { QUIZZES, SITE_TITLE } from "../constants"

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const startQuiz = (quizId: number) => {
    setCurrentQuiz(quizId)
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswer = (selectedAnswer: number) => {
    setSelectedAnswer(selectedAnswer)
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    const quiz = QUIZZES.find((q) => q.id === currentQuiz)
    if (quiz) {
      if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }

      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowExplanation(false)
      } else {
        setShowResults(true)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(null)
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{SITE_TITLE} Quizzes</h1>

        {currentQuiz === null ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {QUIZZES.map((quiz) => (
              <div key={quiz.id} className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
                <h2 className="text-2xl font-semibold mb-4">{quiz.title}</h2>
                <p className="mb-4">{quiz.questions.length} questions</p>
                <button
                  onClick={() => startQuiz(quiz.id)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors w-full"
                >
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg p-6 shadow-md">
            {showResults ? (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
                <p className="text-2xl mb-6">
                  You scored {score} out of {QUIZZES.find((q) => q.id === currentQuiz)?.questions.length}
                </p>
                <button
                  onClick={resetQuiz}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors"
                >
                  Try Another Quiz
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  {QUIZZES.find((q) => q.id === currentQuiz)?.title} - Question {currentQuestion + 1}
                </h2>
                <p className="text-xl mb-6">
                  {QUIZZES.find((q) => q.id === currentQuiz)?.questions[currentQuestion].question}
                </p>
                <div className="grid gap-4">
                  {QUIZZES.find((q) => q.id === currentQuiz)?.questions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`px-6 py-3 rounded-lg transition-colors text-left ${
                          selectedAnswer === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        }`}
                        disabled={showExplanation}
                      >
                        {option}
                      </button>
                    ),
                  )}
                </div>
                {showExplanation && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Explanation:</h3>
                    <p>{QUIZZES.find((q) => q.id === currentQuiz)?.questions[currentQuestion].explanation}</p>
                  </div>
                )}
                {showExplanation && (
                  <button
                    onClick={nextQuestion}
                    className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors"
                  >
                    {currentQuestion + 1 < (QUIZZES.find((q) => q.id === currentQuiz)?.questions.length || 0)
                      ? "Next Question"
                      : "Finish Quiz"}
                  </button>
                )}
              </>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

