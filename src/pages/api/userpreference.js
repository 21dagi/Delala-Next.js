import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { category } = req.query;

  try {
    const products = await prisma.product.findMany({
      where: {
        type: category,
      },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}