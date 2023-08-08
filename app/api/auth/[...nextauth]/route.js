import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            try {
                
            } catch (error) {
                
            }
        },
        async signIn({ profile }) {
            try {
                // serverless route => lambda function => dynamodb - it only opens up when it is called  
            } catch (error) {
                
            }
        },
    }
})

export { handler as GET, handler as POST }