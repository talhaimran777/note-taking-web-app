'use client'

import { experts } from './data/experts'
import { ExpertCard } from './expert-card'
import { useExpertCards } from './hooks/useExpertCards'

export default function ExpertCards() {
  const {
    cards,
    currentBannerIndex,
    setCurrentBannerIndex,
    skipCard,
    isAnimating
  } = useExpertCards(experts)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="relative h-[600px] w-[320px]">
        {cards.slice(0, 3).map((expert, index) => (
          <ExpertCard
            key={expert.id}
            expert={expert}
            index={index}
            isActive={index === 0}
            currentBannerIndex={currentBannerIndex}
            onSkip={skipCard}
            onBannerChange={setCurrentBannerIndex}
            isAnimating={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}

