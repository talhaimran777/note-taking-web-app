import Image from 'next/image'
import { cn } from '~/lib/utils'
import Typography from '../typography'

interface SettingButtonProps {
    title: string
    description: string
    icon: any
    isActive: boolean
    onClick?: () => void
}

export function SettingButton({
    title,
    description,
    icon,
    isActive,
    onClick,
}: SettingButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                'w-full flex items-center gap-4 p-4 rounded-xl transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'border border-neutral-200',
                isActive ? 'bg-neutral-100' : 'bg-white'
            )}
        >
            <div
                className={cn(
                    'w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-200',
                    isActive && 'bg-white'
                )}
            >
                <Image src={icon} alt={title} className='h-5 w-5' />
            </div>
            <div className='flex-1 text-left'>
                <Typography
                    text={title}
                    presetType={4}
                    className='text-neutral-950 mb-[6px]'
                />

                <Typography
                    text={description}
                    presetType={6}
                    className='text-neutral-700'
                />
            </div>
            <div
                className={cn(
                    'w-4 h-4 rounded-full transition-colors',
                    isActive
                        ? 'border-4 border-blue-500'
                        : 'border-2 border-neutral-200'
                )}
            />
        </button>
    )
}
