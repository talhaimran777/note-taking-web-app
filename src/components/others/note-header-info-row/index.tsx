import React from 'react'
import Image from 'next/image'
import Typography from '~/components/ui/custom/typography'

const NoteHeaderInfoRow = ({
    icon,
    label,
    value,
}: {
    icon: string
    label: string
    value: string
}) => {
    return (
        <div className='flex items-center gap-[69px]'>
            <div className='flex items-center gap-[6px]'>
                <Image src={icon} alt={`${label} Icon`} className='h-5 w-5' />
                <Typography
                    text={label}
                    presetType={5}
                    className='text-neutral-700'
                />
            </div>
            <div className='flex gap-2'>
                <Typography
                    text={value}
                    presetType={5}
                    className='text-neutral-700'
                />
            </div>
        </div>
    )
}

export default NoteHeaderInfoRow
