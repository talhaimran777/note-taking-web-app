import ArchiveIcon from '~/images/icon-archive.svg'
// import HomeIcon from '~/images/icon-home.svg'
import HomeIconActive from '~/images/icon-home-blue.svg'
import SidebarItem from '~/components/others/sidebar/components/sidebar-item'

const SIDEBAR_ITEMS = [
    {
        text: 'Home',
        icon: HomeIconActive,
        isActive: true,
    },
    {
        text: 'Archive',
        icon: ArchiveIcon,
        isActive: false,
    },
]

const SidebarItems = () => {
    return (
        <div className='border-b border-b-neutral-200 flex flex-col gap-1'>
            {SIDEBAR_ITEMS.map((item, index) => (
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    isActive={item.isActive}
                />
            ))}
        </div>
    )
}

export default SidebarItems
