// types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

// Module augmentation to extend the Session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
