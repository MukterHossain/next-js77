import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"


export const authOptions = {
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                // username: {label: "User Name", type: "text", required: true, placeholder: "Your Name", name: "name"},
                email: {label: "Email", type: "email", required: true, placeholder: "Your email"},
                password: {label:"password", type: "password", required: true, placeholder: "Enter password"}
            },

            async authorize (credentials){
                const {email, password} = credentials;
                if(!credentials){
                    return null;
                }
               
                if(email){
                    const db =await connectDB();
                    const currentUser = await db.collection('users').findOne({email})
                    // console.log(currentUser)
                    // const currentUser = users.find((user) => user.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
          })
    ],
    callbacks : {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type
            }
            return token;
          },

        async session({ session, token }) {
            session.user.type = token.type
            return session;
          },
          
    }

}
// console.log('jwt session',session)
const handler = NextAuth(authOptions);


// const users = [
//     {
//         id: 1,
//         name: "Taleb",
//         email: "t@gmail.com",
//         type: "admin",
//         password: "password",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 2,
//         name: "Zihad",
//         email: "z@gmail.com",
//         type: "moderator",
//         password: "password",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 3,
//         name: "Sakib",
//         email: "s@gmail.com",
//         type: "member",
//         password: "password",
//         image: "https://picsum.photos/200/300"
//     }
// ]

export {handler as GET, handler as POST}