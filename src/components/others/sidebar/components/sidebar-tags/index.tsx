import TagIcon from '~/images/icon-tag.svg'
import TagIconActive from '~/images/icon-tag-active.svg'
import SidebarItem from '~/components/others/sidebar/components/sidebar-item'
import Typography from '~/components/ui/custom/typography'

// TODO: Use actual data
const SIDEBAR_TAGS = [
    {
        text: 'Cooking',
        icon: TagIcon,
        isActive: false,
    },
    {
        text: 'Dev',
        icon: TagIconActive,
        isActive: true,
    },
    {
        text: 'Fitness',
        icon: TagIcon,
        isActive: false,
    },
    {
        text: 'Health',
        icon: TagIcon,
        isActive: false,
    },
    {
        text: 'Personal',
        icon: TagIcon,
        isActive: false,
    },
]

const SidebarTags = () => {
    return (
        <div className='my-3'>
            <Typography
                text='Tags'
                presetType={4}
                className='text-neutral-500 px-3 mb-3'
            />
            <div className='flex flex-col gap-1'>
                {SIDEBAR_TAGS.map((item, index) => (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        isActive={item.isActive}
                    />
                ))}
            </div>
        </div>
    )
}

export default SidebarTags
