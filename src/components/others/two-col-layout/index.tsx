interface TwoColumnLayoutProps {
    left: React.ReactNode
    right: React.ReactNode
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
    left: leftChild,
    right: rightChild,
}) => {
    return (
        <div className='flex justify-between h-[calc(100vh-81.47px)]'>
            <div className='flex flex-col gap-4 border-r border-r-neutral-200 overflow-auto pl-8 pr-4 py-6 w-[258px]'>
                {leftChild}
            </div>
            <div className='py-5 px-6 flex flex-1 flex-col gap-5'>
                {rightChild}
            </div>
        </div>
    )
}

export default TwoColumnLayout
