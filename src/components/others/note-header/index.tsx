import Typography from '~/components/ui/custom/typography'
import TagIcon from '~/images/icon-tag.svg'
import ClockIcon from '~/images/icon-clock.svg'
import NoteHeaderInfoRow from '~/components/others/note-header-info-row'

const NoteHeader = ({
    title,
    tags,
    lastEditedAtDate,
}: {
    title: string
    tags: string[]
    lastEditedAtDate: string
}) => {
    return (
        <div className='flex flex-col gap-4 border-b border-b-neutral-200 pb-6'>
            <Typography
                text={title}
                presetType={1}
                className='text-neutral-950'
            />
            <NoteHeaderInfoRow
                icon={TagIcon}
                label='Tags'
                value={tags.join(', ')}
            />
            <NoteHeaderInfoRow
                icon={ClockIcon}
                label='Last edited at'
                value={lastEditedAtDate}
            />
        </div>
    )
}

export default NoteHeader
