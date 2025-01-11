import Navbar from '~/components/others/navbar'
import SidebarItems from '~/components/others/sidebar-items'
import TwoColumnLayout from '~/components/others/two-col-layout'
import SunIcon from '~/images/icon-sun.svg'
import FontIcon from '~/images/icon-font.svg'
import LockIcon from '~/images/icon-lock.svg'

const SettingsPage = () => {
    return (
        <div>
            <Navbar pageTitle='Settings' />
            <TwoColumnLayout
                left={
                    <SidebarItems
                        items={[
                            {
                                text: 'Color Theme',
                                isActive: true,
                                icon: SunIcon,
                            },
                            {
                                text: 'Font Theme',
                                isActive: false,
                                icon: FontIcon,
                            },
                            {
                                text: 'Change Password',
                                isActive: false,
                                icon: LockIcon,
                            },
                        ]}
                    />
                }
                right={<div>Right</div>}
            />
        </div>
    )
}

export default SettingsPage
