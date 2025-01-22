import { SettingButton } from '~/components/ui/custom/settings-button'
import Typography from '~/components/ui/custom/typography'

import SunIcon from '~/images/icon-sun.svg'
import MoonIcon from '~/images/icon-moon.svg'
import SystemIcon from '~/images/icon-system-theme.svg'
import { Button } from '~/components/ui/button'

const ColorThemeSettingsPage = () => {
    return (
        <div className='flex flex-col gap-6 lg:max-w-[528px]'>
            <div>
                <Typography
                    text='Color Theme'
                    presetType={3}
                    className='text-neutral-950 mb-1'
                />

                <Typography
                    text='Choose your color theme:'
                    presetType={5}
                    className='text-neutral-950'
                />
            </div>
            <div className='flex flex-col gap-4'>
                <SettingButton
                    icon={SunIcon}
                    description='Pick a clean and classic light theme'
                    title='Light Mode'
                    isActive={true}
                />

                <SettingButton
                    icon={MoonIcon}
                    description='Pick a sleek and modern dark theme'
                    title='Dark Mode'
                    isActive={false}
                />

                <SettingButton
                    icon={SystemIcon}
                    description='Automatically match your system theme'
                    title='System Mode'
                    isActive={false}
                />
            </div>

            <div className='flex justify-end'>
                <Button>
                    <Typography text='Apply Changes' presetType={4} />
                </Button>
            </div>
        </div>
    )
}

export default ColorThemeSettingsPage
