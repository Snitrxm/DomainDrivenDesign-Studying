import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: [{ emit: "event", level: "query" }],
});

prismaClient.$on("query", async e => {
  console.log(`Query: ${e.query}`);
  console.log(`Params: ${e.params}`);
  console.log(`Query durantion: ${e.duration}`);
})