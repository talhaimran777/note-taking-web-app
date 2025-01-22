'use client'

import { useState, useEffect } from 'react'
import { Expert } from '../data/experts'

export function useExpertCards(experts: Expert[]) {
  const [cards, setCards] = useState(experts)
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const totalTabs = cards[0]?.listOfBanners.length > 0 ? cards[0].listOfBanners.length + 1 : 1
      if (e.key === 'ArrowLeft' && currentBannerIndex > 0) {
        setCurrentBannerIndex(prev => prev - 1)
      } else if (e.key === 'ArrowRight' && currentBannerIndex < totalTabs - 1) {
        setCurrentBannerIndex(prev => prev + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cards, currentBannerIndex])

  const skipCard = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setCards(prev => {
        const newCards = [...prev.slice(1)]
        if (prev[0]) newCards.push(prev[0])
        return newCards
      })
      setCurrentBannerIndex(0)
      setIsAnimating(false)
    }, 300)
  }

  return {
    cards,
    currentBannerIndex,
    setCurrentBannerIndex,
    skipCard,
    isAnimating
  }
}

