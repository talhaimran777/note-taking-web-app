import Navbar from '~/components/others/navbar'
import SettingsSidebar from '~/components/others/settings-sidebar-items'
import TwoColumnLayout from '~/components/others/two-col-layout'

export default function SettingsPageLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar pageTitle='Settings' />
            <TwoColumnLayout
                left={
                    <>
                        <SettingsSidebar />
                    </>
                }
                right={children}
            />
        </div>
    )
}
