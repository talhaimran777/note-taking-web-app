import { HydrateClient } from '~/trpc/server'
import Navbar from '~/components/others/navbar'
import Sidebar from '~/components/others/sidebar'
import NotesList from '~/components/others/notes-list'

export default async function Home() {
    return (
        <HydrateClient>
            <div className='flex h-screen w-full'>
                <Sidebar />
                <div className='flex-1'>
                    <Navbar />
                    <div className='flex justify-between h-[calc(100vh-81.47px)]'>
                        <NotesList />
                        <div className='py-5 px-6 flex-1'>Main Content</div>
                        <div className='w-[258px] py-5 px-4 border-l border-l-neutral-200'>Left Content</div>
                    </div>
                </div>
            </div>
        </HydrateClient>
    )
}
