import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { category, bedrooms } = req.query; // Destructure bedrooms from query

  try {
    // Construct the query object
    const whereConditions = {
      type: category, // Always filter by category
    };

    // Only add the bedroom filter if it's defined and greater than 0
    if (bedrooms && Number(bedrooms) > 0) {
      whereConditions.numberOfBeds = Number(bedrooms); // Change 'bedrooms' to 'numberOfBeds'
    }

    const products = await prisma.product.findMany({
      where: whereConditions,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}