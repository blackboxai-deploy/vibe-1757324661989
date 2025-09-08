'use client'

import { useState } from 'react'

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? He was outstanding in his field!",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a fake noodle? An impasta!",
  "Why did the math book look so sad? Because it was full of problems!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why can't your nose be 12 inches long? Because then it would be a foot!",
  "What do you call a fish wearing a bowtie? Sofishticated!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What did the ocean say to the beach? Nothing, it just waved!",
  "Why did the coffee file a police report? It got mugged!",
  "What do you call a sleeping bull? A bulldozer!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
  "Why don't some couples go to the gym? Because some relationships don't work out!"
]

export default function HelloWorldPage() {
  const [currentJoke, setCurrentJoke] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const tellJoke = () => {
    setIsLoading(true)
    
    // Simulate a brief loading for fun effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length)
      setCurrentJoke(jokes[randomIndex])
      setIsLoading(false)
    }, 500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Good Morning Message */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
            Good Morning
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Welcome to your first Next.js application
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Joke Section */}
        <div className="space-y-6">
          <button
            onClick={tellJoke}
            disabled={isLoading}
            className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </span>
            ) : (
              "Tell me a joke! 😄"
            )}
          </button>

          {currentJoke && (
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 shadow-lg border border-red-100 animate-fade-in">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {currentJoke}
              </p>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <p className="text-gray-700 leading-relaxed">
            This is a simple Good Morning page built with{' '}
            <span className="font-semibold text-red-600">Next.js</span>,{' '}
            <span className="font-semibold text-red-600">React</span>, and{' '}
            <span className="font-semibold text-red-600">Tailwind CSS</span>.
            <br />
            <span className="text-sm text-gray-500 mt-2 block">
              Click the button above for some morning humor! 🎭
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  )
}