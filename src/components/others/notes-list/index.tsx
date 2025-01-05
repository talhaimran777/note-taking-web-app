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
        title: 'State management in React',
        tags: ['Dev', 'React', 'State'],
        lastEditedAtDate: '30 Oct 2024',
        isActive: false,
    },
    {
        title: 'Using hooks effectively',
        tags: ['Dev', 'React', 'Hooks'],
        lastEditedAtDate: '31 Oct 2024',
        isActive: false,
    },
    {
        title: 'React component lifecycle',
        tags: ['Dev', 'React', 'Lifecycle'],
        lastEditedAtDate: '01 Nov 2024',
        isActive: false,
    },
    {
        title: 'Styling in React',
        tags: ['Dev', 'React', 'CSS'],
        lastEditedAtDate: '02 Nov 2024',
        isActive: false,
    },
    {
        title: 'Testing React components',
        tags: ['Dev', 'React', 'Testing'],
        lastEditedAtDate: '03 Nov 2024',
        isActive: false,
    },
    {
        title: 'React with TypeScript',
        tags: ['Dev', 'React', 'TypeScript'],
        lastEditedAtDate: '04 Nov 2024',
        isActive: false,
    },
]

const NotesList = () => {
    return (
        <div className='flex flex-col gap-4 max-w-[290px] border-r border-r-neutral-200  overflow-auto pb-5'>
            <div className='sticky top-0 px-8 pt-5 bg-white'>
                <Button variant='primary' className='w-full'>
                    + Create New Note
                </Button>
            </div>

            <div className='flex flex-col gap-3 px-8'>
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
