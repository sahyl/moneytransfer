import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (! session?.user?.email) {
      return new Response("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
      include: {
        BankAccount: true,
      },
    });

    if (!user || !user.BankAccount) {
      return new Response("User or bank account not found", {
        status: 404,
      });
    }

    const balance = user.BankAccount.map((acc) => acc.balance);

    return NextResponse.json({ balance });
  } catch (error) {
    console.error("Error fetching balance", error);
    return new Response("Interval Server Error", { status: 500 });
  }
}
