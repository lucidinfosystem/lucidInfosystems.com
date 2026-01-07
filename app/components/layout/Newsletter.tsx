"use client"

import type React from "react"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 500))

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="w-full bg-[#4A52F8] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white sm:text-3xl">Subscribe to get our latest updates</h2>
            <p className="mt-2 text-base font-medium text-blue-100">Subscribe to get latest updates from our side</p>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubscribe} className="w-full md:w-1/2 flex flex-col sm:flex-row gap-y-2 ">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border border-white bg-transparent px-4 py-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-offset-blue-600"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white px-8 py-3 font-semibold text-black hover:bg-gray-100 disabled:opacity-70 transition-colors"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
