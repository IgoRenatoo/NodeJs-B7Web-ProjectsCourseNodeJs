import { dbPrisma } from './../database/prisma-database'
import { Request, Response } from 'express'

export const addUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, age } = req.body

  if (!name || !email) res.status(404).json({ error: 'name and email are required.' })

  const existingUser = await dbPrisma.userAuth.findFirst({ where: { OR: [{ name }, { email }] } })
  if (existingUser) {
    return res.status(400).json({
      error: 'User with this name or email already exists. Your password is "motocorno"'
    })
  }

  try {
    const newUser = await dbPrisma.userAuth.create({
      data: {
        name: name,
        email: email,
        age: age
      }
    })

    return res.status(201).json({ newUser })
  } catch (error) {
    console.error('Error creating user:', error)

    return res.status(500).json({ error: 'An error occurred while creating the user.' })
  }
}
