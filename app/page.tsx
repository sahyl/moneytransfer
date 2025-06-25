import { getServerSession } from "next-auth";
import AuthWrapper from "./AuthWrapper";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOptions)
  return <AuthWrapper session={session}/>

  
}