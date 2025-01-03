import Image from 'next/image'
import Logo from '~/images/logo.svg'
import SidebarItems from '~/components/others/sidebar/components/sidebar-items'
import SidebarTags from '~/components/others/sidebar/components/sidebar-tags'

const Sidebar = () => {
    return (
        <div className='w-[272px] border-r border-r-neutral-200 px-4 py-6'>
            <Image src={Logo} alt='Logo' className='mb-7' />
            <SidebarItems />
            <SidebarTags />
        </div>
    )
}

export default Sidebar
