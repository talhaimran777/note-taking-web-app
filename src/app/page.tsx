import { HydrateClient } from '~/trpc/server'
import Navbar from '~/components/others/navbar'
import Sidebar from '~/components/others/sidebar'

export default async function Home() {
    return (
        <HydrateClient>
            <div className='flex h-screen w-full'>
                <Sidebar />
                <div className='flex-1'>
                    <Navbar />
                </div>
            </div>
        </HydrateClient>
    )
}
