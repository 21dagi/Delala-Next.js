import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const whereConditions = {
      role: "AGENT", // Always filter by category
    };

    const agents = await prisma.User.findMany({
      where: whereConditions,
    });

    res.status(200).json(agents);
    console.log(agents);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "damn It An error occurred while fetching agent data" });
  }
}
