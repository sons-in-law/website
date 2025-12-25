'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete?: () => void
  duration?: number // Total splash duration in ms
}

export default function SplashScreen({
  onComplete,
  duration = 6000 // Animation duration + hold time
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Check if user has seen splash before in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')

    if (hasSeenSplash) {
      setIsVisible(false)
      onComplete?.()
      return
    }

    // Start exit animation before fully hiding
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, duration - 800) // Start fade 800ms before end

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash', 'true')
      onComplete?.()
    }, duration)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
    }
  }, [duration, onComplete])

  // Skip handler
  const handleSkip = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash', 'true')
      onComplete?.()
    }, 400)
  }

  if (!isVisible) return null

  return (
    <div
      className={`
        fixed inset-0 z-[10000]
        flex items-center justify-center
        transition-opacity ease-out
        ${isExiting ? 'opacity-0 duration-800' : 'opacity-100 duration-300'}
      `}
      style={{
        backgroundColor: '#FAF8F5',
      }}
    >
      {/* Subtle grain overlay matching main site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animation container */}
      <div className="relative w-full max-w-3xl px-4">
        {/* GIF Animation */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/splash_quick.gif"
          alt="liam-is-an.ai loading animation"
          className="w-full h-auto mx-auto"
          style={{
            maxHeight: '70vh',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Skip button - subtle, bottom right */}
      <button
        onClick={handleSkip}
        className="
          absolute bottom-8 right-8
          font-sans text-xs uppercase tracking-widest
          text-ink-400 hover:text-ink-600
          transition-colors duration-300
          opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]
        "
        style={{ color: '#7A7672' }}
      >
        Skip
      </button>
    </div>
  )
}
