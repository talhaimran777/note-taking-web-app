'use client'

import { Star, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Expert } from './data/experts'

interface ExpertCardProps {
    expert: Expert
    index: number
    isActive: boolean
    currentBannerIndex: number
    onSkip: () => void
    onBannerChange: (index: number) => void
    isAnimating: boolean
}

export function ExpertCard({
    expert,
    index,
    isActive,
    currentBannerIndex,
    onSkip,
    onBannerChange,
    isAnimating,
}: ExpertCardProps) {
    const currentBanner = expert.listOfBanners[currentBannerIndex - 1]
    const hasMultipleBanners = expert.listOfBanners.length > 0
    const totalTabs = hasMultipleBanners ? expert.listOfBanners.length + 1 : 1

    return (
        <div
            style={{
                transform: `${
                    index === 1
                        ? 'translateY(1rem) rotate(6deg)'
                        : index === 2
                          ? 'translateY(2rem) rotate(12deg)'
                          : isAnimating && index === 0
                            ? 'translateX(-200%) rotate(-20deg)'
                            : 'none'
                }`,
                transition: 'transform 0.3s ease-in-out',
            }}
            className={cn(
                'absolute w-[320px] rounded-xl bg-white shadow-xl transition-all duration-300',
                index === 0 && 'z-30',
                index === 1 && 'z-20 translate-y-4 rotate-6',
                index === 2 && 'z-10 translate-y-8 rotate-12',
                isAnimating &&
                    index === 0 &&
                    '-translate-x-[200%] rotate-[-20deg]',
                index !== 0 && 'transition-transform'
            )}
        >
            <div className='relative h-[400px] overflow-hidden rounded-t-xl'>
                {isActive && hasMultipleBanners && (
                    <>
                        <div className='absolute left-4 right-4 top-4 z-20 flex justify-center gap-2'>
                            {Array.from({ length: totalTabs }, (_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        'h-1 w-8 rounded-full transition-colors',
                                        i === currentBannerIndex
                                            ? 'bg-white'
                                            : 'bg-white/50'
                                    )}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() =>
                                onBannerChange(
                                    Math.max(0, currentBannerIndex - 1)
                                )
                            }
                            className={cn(
                                'absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-opacity',
                                currentBannerIndex === 0 && 'opacity-0'
                            )}
                        >
                            <ChevronLeft className='h-6 w-6 text-white' />
                        </button>
                        <button
                            onClick={() =>
                                onBannerChange(
                                    Math.min(
                                        totalTabs - 1,
                                        currentBannerIndex + 1
                                    )
                                )
                            }
                            className={cn(
                                'absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-opacity',
                                currentBannerIndex === totalTabs - 1 &&
                                    'opacity-0'
                            )}
                        >
                            <ChevronRight className='h-6 w-6 text-white' />
                        </button>
                    </>
                )}

                <div className='relative h-full w-full'>
                    <img
                        src={
                            currentBannerIndex === 0
                                ? expert.expertProfilePictureURL
                                : currentBanner?.bannerImageURL
                        }
                        alt={
                            currentBannerIndex === 0
                                ? `${expert.name}'s profile`
                                : `${currentBanner?.bannerTitle} banner`
                        }
                        className='h-full w-full object-cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white'>
                        {currentBannerIndex === 0 ? (
                            <>
                                <h3 className='text-xl font-semibold'>
                                    {expert.name}
                                </h3>
                                <p className='flex items-center gap-2 text-sm'>
                                    {expert.serviceTitle} • {expert.experience}
                                </p>
                            </>
                        ) : currentBanner ? (
                            <>
                                <h3 className='text-xl font-semibold'>
                                    {currentBanner.bannerTitle}
                                </h3>
                                <p className='text-sm'>
                                    {currentBanner.bannerClosedRequests} closed
                                    requests
                                </p>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='p-4'>
                {currentBannerIndex === 0 ? (
                    <>
                        <p className='text-sm text-gray-600'>
                            {expert.serviceDescription}
                        </p>
                        <div className='mt-4 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='font-semibold'>
                                    ${expert.hourlyRate}/hr
                                </span>
                                <div className='flex items-center gap-1'>
                                    <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                                    <span className='text-sm text-gray-600'>
                                        {expert.rating} ({expert.reviews})
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : currentBanner ? (
                    <>
                        <p className='text-sm text-gray-600'>
                            {currentBanner.bannerDescription}
                        </p>
                        <div className='mt-4'>
                            <p className='text-sm font-medium'>Skills:</p>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                {currentBanner.bannerSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className='rounded-full bg-gray-100 px-3 py-1 text-xs'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </>
                ) : null}
            </div>

            {isActive && (
                <button
                    onClick={onSkip}
                    className='absolute -bottom-16 left-1/2 -translate-x-1/2 rounded-full bg-white p-4 shadow-lg transition-transform hover:scale-110'
                >
                    <X className='h-6 w-6 text-gray-600' />
                </button>
            )}
        </div>
    )
}
