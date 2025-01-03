import Image from 'next/image'
import Typography from '~/components/ui/custom/typography'
import SettingsIcon from '~/images/icon-settings.svg'

const Navbar = () => {
    return (
        <div className='px-8 py-[26px] w-full border-b border-b-neutral-200'>
            <div className='flex justify-between items-center'>
                <Typography
                    text='All Notes'
                    presetType={1}
                    className='text-neutral-950'
                />
                <Image
                    src={SettingsIcon}
                    alt='Settings icon'
                    className='h-5 w-5'
                />
            </div>
        </div>
    )
}

export default Navbar
