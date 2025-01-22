'use client'

import SidebarItem from '~/components/others/sidebar-item'
import SidebarItems from '~/components/others/sidebar-items'
import FontIcon from '~/images/icon-font.svg'
import LockIcon from '~/images/icon-lock.svg'
import LogoutIcon from '~/images/icon-logout.svg'
import SunIcon from '~/images/icon-sun.svg'

import { usePathname } from 'next/navigation'
import { PATHNAMES } from '~/constants'

const SettingsSidebar = () => {
    const currentPath = usePathname()

    return (
        <>
            <SidebarItems
                items={[
                    {
                        text: 'Color Theme',
                        isActive: currentPath === PATHNAMES.COLOR_THEME,
                        icon: SunIcon,
                        link: PATHNAMES.COLOR_THEME,
                    },
                    {
                        text: 'Font Theme',
                        isActive: currentPath === PATHNAMES.FONT_THEME,
                        icon: FontIcon,
                        link: PATHNAMES.FONT_THEME,
                    },
                    {
                        text: 'Change Password',
                        isActive: currentPath === PATHNAMES.CHANGE_PASSWORD,
                        icon: LockIcon,
                        link: PATHNAMES.CHANGE_PASSWORD,
                    },
                ]}
            />
            <SidebarItem
                icon={LogoutIcon}
                text={'Logout'}
                isActive={false}
                link={PATHNAMES.LOGOUT}
            />
        </>
    )
}

export default SettingsSidebar
