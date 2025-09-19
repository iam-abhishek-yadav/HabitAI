"use client"

import { CheckCircle, Brain, BarChart3, Target, Zap, Users } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">HabitAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Pricing</a>
            <ThemeToggle />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Life with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"> AI-Powered Habits</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Build better habits, track your progress, and achieve your goals with intelligent suggestions, 
            predictive nudges, and personalized analytics powered by artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to build lasting habits and achieve your goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Get personalized suggestions and predictions based on your behavior patterns and goals.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <Target className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Habit Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Track your habits with intelligent reminders and progress visualization.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <BarChart3 className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Deep insights into your progress with detailed analytics and trends.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <Zap className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Predictive Nudges</h3>
              <p className="text-gray-600 dark:text-gray-300">Receive timely reminders and motivation when you need it most.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <CheckCircle className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Task Management</h3>
              <p className="text-gray-600 dark:text-gray-300">Organize and prioritize your tasks with AI-powered recommendations.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
              <Users className="h-12 w-12 text-pink-600 dark:text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with like-minded individuals on similar journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to transform your life</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Set Your Goals</h3>
              <p className="text-gray-600 dark:text-gray-300">Define your habits and tasks, and let our AI understand your objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-300">Log your daily activities and let AI analyze your patterns and progress.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Get Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Receive personalized suggestions and predictions to optimize your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Join thousands of users who have already started their journey to better habits and productivity.
          </p>
          <button className="bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-blue-400 dark:text-blue-500" />
              <span className="text-2xl font-bold text-white">HabitAI</span>
            </div>
            <div className="flex space-x-6 text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>&copy; 2025 HabitAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
