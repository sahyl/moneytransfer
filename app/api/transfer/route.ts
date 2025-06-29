import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  try {
    if (!session || !session.user?.email) {
      return new Response("Unauthorized request", { status: 401 });
    }

    const { to, amount }: { to: string; amount: number } = await req.json();
    if (!to || typeof to !== "string" || typeof amount !== "number" || amount <= 0) {
      return new Response("Missing fields", { status: 404 });
    }

    await prisma.$transaction(async (tx) => {
      const email = session.user?.email;
      if (!email) {
        throw new Error("invalid Email");
      }

      const sender = await tx.user.findUnique({
        where: {
          email: email,
        },
        include: { BankAccount: true },
      });

      if (!sender?.BankAccount.length || sender?.BankAccount[0].balance < amount) {
        throw new Error("Insufficient balance");
      }
      const reciever = await tx.user.findUnique({
        where: { email: to },
        include: { BankAccount: true },
      });

      if(!reciever?.BankAccount.length){
        throw new Error("Invalid Account")
      }
      await tx.bankAccount.update({
        where:{id:sender.BankAccount[0].id},
        data:{balance:{decrement:amount}}
      })

      await tx.bankAccount.update({
        where:{id:reciever.BankAccount[0].id},
        data:{balance:{increment:amount}}
        
      })
    });
    return NextResponse.json({message:"Transfer Successfull" })
  } catch (error) {

    return NextResponse.json({error:"Transfer Failed"} , {status:400})
  }
}
