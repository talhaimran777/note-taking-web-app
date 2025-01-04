import clsx from 'clsx'
import Typography from '~/components/ui/custom/typography'

type Tags = string[]

const NotesListItem = ({
    title,
    tags,
    lastEditedAtDate,
    isActive,
}: {
    title: string
    tags: Tags
    lastEditedAtDate: string
    isActive: boolean
}) => {
    return (
        <div
            className={clsx({
                'flex flex-col gap-3 p-2 rounded-lg': true,
                'bg-neutral-100 border-b-unset': isActive,
                'border-b border-b-neutral-200': !isActive,
            })}
        >
            <Typography
                text={title}
                presetType={3}
                className='text-neutral-950'
            />
            <div className='flex items-center gap-2'>
                {tags.map((tag) => (
                    <div className='bg-neutral-200 py-[2px] px-[6px] rounded-lg'>
                        <Typography
                            text={tag}
                            presetType={6}
                            className='text-neutral-950'
                        />
                    </div>
                ))}
            </div>
            <Typography
                text={lastEditedAtDate}
                presetType={6}
                className='text-neutral-700'
            />
        </div>
    )
}

export default NotesListItem
