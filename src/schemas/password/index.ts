import * as z from 'zod'

export const passwordSchema = z
    .object({
        oldPassword: z.string().min(1, 'Old password is required'),
        newPassword: z
            .string()
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    })

export type PasswordFormValues = z.infer<typeof passwordSchema>
