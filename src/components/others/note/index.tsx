import Typography from '~/components/ui/custom/typography'
import NoteHeader from '~/components/others/note-header'
import { Button } from '~/components/ui/button'

const Note = ({
    title,
    tags,
    description,
    lastEditedAtDate,
}: {
    title: string
    tags: string[]
    description: string
    lastEditedAtDate: string
}) => {
    return (
        <>
            <NoteHeader
                title={title}
                tags={tags}
                lastEditedAtDate={lastEditedAtDate}
            />
            <Typography
                text={description}
                presetType={5}
                className='text-neutral-800 whitespace-pre-wrap flex-1 border-b border-b-neutral-200 overflow-auto'
            />
            <div className='flex items-center gap-4'>
                <Button variant='primary'>Save Note</Button>
                <Button variant='border'>Cancel</Button>
            </div>
        </>
    )
}

export default Note
