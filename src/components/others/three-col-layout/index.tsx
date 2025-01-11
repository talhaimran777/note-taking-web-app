interface ThreeColLayoutProps {
    left: React.ReactNode
    center: React.ReactNode
    right: React.ReactNode
}

const ThreeColumnLayout: React.FC<ThreeColLayoutProps> = ({
    left: leftChild,
    center: centerChild,
    right: rightChild,
}) => {
    return (
        <div className='flex justify-between h-[calc(100vh-81.47px)]'>
            <div className='flex flex-col gap-4 border-r border-r-neutral-200 overflow-auto pb-5'>
                {leftChild}
            </div>
            <div className='py-5 px-6 flex flex-1 flex-col gap-5'>
                {centerChild}
            </div>

            <div className='w-[258px] py-5 px-4 border-l border-l-neutral-200 flex flex-col gap-3'>
                {rightChild}
            </div>
        </div>
    )
}

export default ThreeColumnLayout
