'use client'

import { signIn } from 'next-auth/react'

const SignIn = () => {
    return (
        <button
            onClick={() => {
                signIn('google', {
                    redirectTo: '/',
                })
            }}
        >
            Signin with Google
        </button>
    )
}

export default SignIn
