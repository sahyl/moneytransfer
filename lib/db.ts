import { PrismaClient } from "@prisma/client";

const singlePrismaClient = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof singlePrismaClient>;
}

const prisma = globalThis.prisma ?? singlePrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
