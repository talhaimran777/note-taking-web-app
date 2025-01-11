import SidebarItem from '~/components/others/sidebar-item'

export type SIDEBAR_ITEM = {
    text: string
    icon: string
    isActive: boolean
    link: string
}

const SidebarItems = ({ items }: { items: SIDEBAR_ITEM[] }) => {
    return (
        <div className='border-b border-b-neutral-200 flex flex-col gap-1 pb-2'>
            {items.map((item, index) => (
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    isActive={item.isActive}
                    link={item.link}
                />
            ))}
        </div>
    )
}

export default SidebarItems
