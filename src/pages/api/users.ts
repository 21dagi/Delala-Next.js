// src/pages/api/users.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      console.log('Users found:', users); // Log the users found
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { email, name } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
      console.log('New user created:', newUser); // Log the new user created
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}