import GoogleCredentials from 'next-auth/providers/google'
import  GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'

import NextAuth  from 'next-auth/next'


export const authOptions  ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ||"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" ,
            authorization:{
                params:{
                    prompt:'consent' ,
                    access_type :'offline',
                    response_type:'code'
                }
            }
        })
        
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}