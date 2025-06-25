import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";
export const authOptions:NextAuthOptions= {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Overrides to JWT sessions
  }, // ✅ Correct usage
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages:{
    signIn:"/"
  },
  callbacks: {
    async jwt({token , user}){
        if (user){
            token.id= user.id
        }
        return token
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

