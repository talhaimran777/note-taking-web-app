import clsx from 'clsx'

export type PresetType = 1 | 2 | 3 | 4 | 5 | 6

export interface PresetStyles {
    [key: number]: string
}

const Typography = ({
    text,
    className,
    presetType,
}: {
    text: string
    presetType: PresetType
    className?: string
}) => {
    const styles: PresetStyles = {
        1: 'text-2xl -tracking-[0.5px] leading-[120%] font-bold',
        2: 'text-xl -tracking-[0.5px] leading-[120%] font-bold',
        3: 'text-[16px] -tracking-[0.3px] leading-[120%] font-semibold',
        4: 'text-[14px] -tracking-[0.2px] leading-[120%] font-medium',
        5: 'text-[14px] -tracking-[0.2px] leading-[120%] font-normal',
        6: 'text-sm -tracking-[0.2px] leading-[120%] font-normal',
    }

    return <p className={clsx(styles[presetType], className)}>{text}</p>
}

export default Typography
