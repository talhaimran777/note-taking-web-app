import { SettingButton } from '~/components/ui/custom/settings-button'
import Typography from '~/components/ui/custom/typography'

import MonospaceIcon from '~/images/icon-font-monospace.svg'
import SansSerifIcon from '~/images/icon-font-sans-serif.svg'
import SerifIcon from '~/images/icon-font-serif.svg'

import { Button } from '~/components/ui/button'

const FontThemeSettingsPage = () => {
    return (
        <div className='flex flex-col gap-6 lg:max-w-[528px]'>
            <div>
                <Typography
                    text='Font Theme'
                    presetType={3}
                    className='text-neutral-950 mb-1'
                />

                <Typography
                    text='Choose your font theme:'
                    presetType={5}
                    className='text-neutral-950'
                />
            </div>
            <div className='flex flex-col gap-4'>
                <SettingButton
                    icon={SansSerifIcon}
                    description='Clean and modern, easy to read.'
                    title='Sans Serif'
                    isActive={true}
                />

                <SettingButton
                    icon={SerifIcon}
                    description='Classic and elegant for a timeless feel.'
                    title='Serif'
                    isActive={false}
                />

                <SettingButton
                    icon={MonospaceIcon}
                    description='Code-like, great for a technical vibe.'
                    title='Monospace'
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

export default FontThemeSettingsPage
