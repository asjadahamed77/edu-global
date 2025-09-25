import { prisma } from './db';
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins"


import { env } from "./env";
import { resend } from './resend';






export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    socialProviders: {
        github:{
            clientId: env.AUTH_GITHUB_CLIENT_ID ,
            clientSecret: env.AUTH_GITHUB_SECRET,
        } 
    },

    plugins: [
        emailOTP({ 
            async sendVerificationOTP({ email, otp }) { 
                const {data,error} = await resend.emails.send({
                    from: "Edu Global <onboarding@resend.dev>",
                    to: [email],
                    subject: "Edu Global - Verify your email ",
                    html: `<p>Your otp is <strong>${otp}</strong></p>`
                }) 
            }, 
        }) 
    ]

});