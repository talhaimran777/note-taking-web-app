import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Typography from '~/components/ui/custom/typography'
import ChevronRight from '~/images/icon-chevron-right.svg'

const SidebarItem = ({
    icon,
    text,
    isActive,
    link,
}: {
    icon: any
    text: string
    isActive: boolean
    link: string
}) => {
    return (
        <div
            className={clsx({
                'flex justify-between items-center px-3 py-[10px]': true,
                'bg-neutral-100': isActive,
                'rounded-lg': isActive,
            })}
        >
            <div
                className={clsx({
                    'flex flex-1 items-center gap-2': true,
                })}
            >
                {link && (
                    <Link href={link}>
                        <Image src={icon} alt={text} className='h-5 w-5' />
                    </Link>
                )}
                <Typography
                    presetType={4}
                    text={text}
                    className={clsx({
                        'text-neutral-950': isActive,
                        'text-neutral-700': !isActive,
                    })}
                />
            </div>
            {isActive && <Image src={ChevronRight} alt='Chevron right' />}
        </div>
    )
}

export default SidebarItem
