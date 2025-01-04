import { Button } from '~/components/ui/button'
import NotesListItem from '../notes-list-item'

const notesList = [
    {
        title: 'React performance optimization',
        tags: ['Dev', 'React'],
        lastEditedAtDate: '29 Oct 2024',
        isActive: true,
    },
    {
        title: 'React performance optimization 2',
        tags: ['Dev', 'React'],
        lastEditedAtDate: '30 Oct 2024',
        isActive: false,
    },
    {
        title: 'React performance optimization 2',
        tags: ['Dev', 'React'],
        lastEditedAtDate: '30 Oct 2024',
        isActive: false,
    },
]

const NotesList = () => {
    return (
        <div className='flex flex-col gap-4 py-5 px-8 max-w-[290px] border-r border-r-neutral-200'>
            <Button variant='primary' className='w-full'>
                + Create New Note
            </Button>
            <div className='flex flex-col gap-3'>
                {notesList.map((note) => (
                    <NotesListItem
                        title={note.title}
                        tags={note.tags}
                        lastEditedAtDate={note.lastEditedAtDate}
                        isActive={note.isActive}
                    />
                ))}
            </div>
        </div>
    )
}

export default NotesList
