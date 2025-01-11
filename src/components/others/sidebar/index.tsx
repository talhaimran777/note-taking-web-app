import ArchiveIcon from '~/images/icon-archive.svg'
import HomeIconActive from '~/images/icon-home-blue.svg'
// import HomeIcon from '~/images/icon-home.svg'
import Image from 'next/image'
import Logo from '~/images/logo.svg'
import SidebarItems from '~/components/others/sidebar-items'
import SidebarTags from '~/components/others/sidebar-tags'

const Sidebar = () => {
    return (
        <div className='w-[272px] border-r border-r-neutral-200 px-4 py-6'>
            <Image src={Logo} alt='Logo' className='mb-7' />
            <SidebarItems
                items={[
                    {
                        text: 'All Notes',
                        icon: HomeIconActive,
                        isActive: true,
                        link: "/all-notes"
                    },
                    {
                        text: 'Archive',
                        icon: ArchiveIcon,
                        isActive: false,
                        link: "/all-notes"
                    },
                ]}
            />
            <SidebarTags />
        </div>
    )
}

export default Sidebar
