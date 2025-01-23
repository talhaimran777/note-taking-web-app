'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { passwordSchema, type PasswordFormValues } from '~/schemas/password'
import Typography from '~/components/ui/custom/typography'

export default function ChangePasswordForm() {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const form = useForm<PasswordFormValues>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(data: PasswordFormValues) {
        // Handle form submission here
        console.log(data)
    }

    return (
        <div className='lg:max-w-[528px] space-y-6'>
            <Typography
                text='Change Password'
                presetType={3}
                className='text-neutral-950'
            />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name='oldPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Typography
                                        text='Old Password'
                                        presetType={4}
                                        className='text-neutral-950'
                                    />
                                </FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <Input
                                            type={
                                                showOldPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            {...field}
                                        />
                                        <div
                                            className='absolute right-[18px] top-[10px] h-full cursor-pointer'
                                            onClick={() =>
                                                setShowOldPassword(
                                                    !showOldPassword
                                                )
                                            }
                                        >
                                            {showOldPassword ? (
                                                <EyeOff className='h-5 w-5 text-muted-foreground' />
                                            ) : (
                                                <Eye className='h-5 w-5 text-muted-foreground' />
                                            )}
                                            <span className='sr-only'>
                                                Toggle password visibility
                                            </span>
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='newPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Typography
                                        text='New Password'
                                        presetType={4}
                                        className='text-neutral-950'
                                    />
                                </FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <Input
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            {...field}
                                        />
                                        <div
                                            className='absolute right-[18px] top-[10px] h-full cursor-pointer'
                                            onClick={() =>
                                                setShowNewPassword(
                                                    !showNewPassword
                                                )
                                            }
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className='h-5 w-5 text-muted-foreground' />
                                            ) : (
                                                <Eye className='h-5 w-5 text-muted-foreground' />
                                            )}
                                            <span className='sr-only'>
                                                Toggle password visibility
                                            </span>
                                        </div>
                                    </div>
                                </FormControl>
                                <Typography
                                    text='At least 8 characters'
                                    presetType={6}
                                    className='text-neutral-600'
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Typography
                                        text='Confirm New Password'
                                        presetType={4}
                                        className='text-neutral-950'
                                    />
                                </FormLabel>

                                <FormControl>
                                    <div className='relative'>
                                        <Input
                                            type={
                                                showConfirmPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            {...field}
                                        />
                                        <div
                                            className='absolute right-[18px] top-[10px] h-full cursor-pointer'
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className='h-5 w-5 text-muted-foreground' />
                                            ) : (
                                                <Eye className='h-5 w-5 text-muted-foreground' />
                                            )}
                                            <span className='sr-only'>
                                                Toggle password visibility
                                            </span>
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-end'>
                        <Button type='submit'>Save Password</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
