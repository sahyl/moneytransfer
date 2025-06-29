import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";



export async function GET(req:NextRequest){
  const {searchParams}  = new URL(req.url)
  const session = await getServerSession(authOptions)
  const query = searchParams.get("query") || ""

  try {
    if(!session){
      return new Response("unauthorized request" ,{status:401})
    }
    const users = await prisma.user.findMany({
      where:{
        OR:[
          {name:{contains :query  , mode:"insensitive"}},
        ]
      },
      select:{
        id:true,name:true, email:true
      }
    })

  return NextResponse.json({users})
    
  } catch (error) {
    console.log("user error" , error)
    return NextResponse.json({error:"error finding users"} , {status:500})
    
  }
}

























































// // app/api/Users/route.ts

// import { NextResponse } from "next/server";
// import prisma from "@/lib/db";


// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const query = searchParams.get("query") || "";

//   try {
//     const users = await prisma.user.findMany({
//       where: {
//         OR: [
//           { name: { contains: query, mode: "insensitive" } },
//         ]
//       },
//       select: {
//         id: true,
//         name: true,
//         email: true
//       },
//       take: 10, // optional: limit results
//     });

//     return NextResponse.json({ users });
//   } catch (error) {
//     console.error("User search error:", error);
//     return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
//   }
// }
