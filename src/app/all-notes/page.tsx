import Image from 'next/image'
import Navbar from '~/components/others/navbar'
import Note from '~/components/others/note'
import NotesList from '~/components/others/notes-list'
import ThreeColumnLayout from '~/components/others/three-col-layout'
import { Button } from '~/components/ui/button'
import Typography from '~/components/ui/custom/typography'
import ArchiveIcon from '~/images/icon-archive.svg'
import DeleteIcon from '~/images/icon-delete.svg'

const AllNotesPage = () => {
    const actionButtons = (
        <>
            <Button variant='border' className='w-full flex items-center gap-3'>
                <Image
                    src={ArchiveIcon}
                    alt='Archive icon'
                    className='h-5 w-5'
                />
                <Typography
                    text='Archive Note'
                    presetType={4}
                    className='text-neutral-950'
                />
            </Button>
            <Button variant='border' className='w-full flex items-center gap-3'>
                <Image src={DeleteIcon} alt='Delete icon' className='h-5 w-5' />
                <Typography
                    text='Delete Note'
                    presetType={4}
                    className='text-neutral-950'
                />
            </Button>
        </>
    )

    return (
        <div>
            <Navbar pageTitle='All Notes' />
            <ThreeColumnLayout
                left={<NotesList />}
                center={
                    <Note
                        title='React with TypeScript'
                        tags={['Dev', 'React', 'TypeScript']}
                        lastEditedAtDate='04 Nov 2024'
                        description={`Key performance optimization techniques:

1. Code Splitting
- Use React.lazy() for route-based splitting
- Implement dynamic imports for heavy components

2. Memoization
- useMemo for expensive calculations
- useCallback for function props
- React.memo for component optimization

3. Virtual List Implementation
- Use react-window for long lists
- Implement infinite scrolling

TODO: Benchmark current application and identify bottlenecks
`}
                    />
                }
                right={actionButtons}
            />
        </div>
    )
}

export default AllNotesPage
