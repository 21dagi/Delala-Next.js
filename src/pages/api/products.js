
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { productId } = req.query; // Get the product ID from the query parameters

  if (req.method === 'GET') {
    try {
      // Fetch the product based on the ID
      console.log('Test point T1')
      const product = await prisma.product.findUnique({
        where: {
          id: Number(productId), // Ensure the ID is a number
        },
      });

      if (!product) {
        console.log('Test point T2')
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log('Test point T3')
      res.status(200).json(product);
      console.log('the values are fetched successfully ', product); // Send the product data as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the product' });
      console.log('The error is at the connection failure');
    }

  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}