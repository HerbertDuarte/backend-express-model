import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  prisma.users.create({
    data: {
      name: "Admin",
      email: "admin@dev.com",
      password: "$2b$10$ML0EAH01Mrzofn7xRzpBMOHdxAIcUh0LFIPzvNyROpmpMjKvi04jS",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
