
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../../prisma';
import dbConnect from '@/lib/dbConnect';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    // Add other providers as needed (e.g., GitHub, LinkedIn)
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }:any) {
      return session;
    },
    async signIn({ profile }:any) {
      try {
        await dbConnect();
    
        const existingUserByEmail = await prisma.user.findUnique({
          where: { email: profile.email },
        });
    
        if (!existingUserByEmail) {
          // Generate a default username
          const defaultUsername = profile.given_name.toLowerCase() + profile.family_name.toLowerCase();
    
          // Check if the default username is already taken
          let username = defaultUsername;
          let usernameExists = true;
          let usernameSuffix = 1;
    
          while (usernameExists) {
            const existingUserByUsername = await prisma.user.findUnique({
              where: { username },
            });
    
            if (!existingUserByUsername) {
              usernameExists = false;
            } else {
              // Append a suffix to the username to make it unique
              username = `${defaultUsername}${usernameSuffix}`;
              usernameSuffix++;
            }
          }
    
          // Create the new user with the unique username
          const newUser = await prisma.user.create({
            data: {
              email: profile.email,
              username,
              oauthProvider: profile.provider,
              oauthId: profile.id,
            },
          });
    
          console.log('User created:', newUser);
    
          return true; // Return true if sign-in is successful
        }
    
        return true; // Return true if sign-in is successful
      } catch (error) {
        console.error('Error creating user:', error);
        return false; // Return false if sign-in fails
      } finally {
        await prisma.$disconnect();
      }
    }
  },
};

const handler = NextAuth(authOptions);

export  {handler as GET , handler as POST};
