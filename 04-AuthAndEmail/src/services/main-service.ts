import { dbPrisma } from './../database/prisma-database'

export const addUser = async ( name: string, email: string, age: number) => {
  const existingUser = await dbPrisma.userAuth.findFirst({ where: { OR: [{ name }, { email }] } })
  if (existingUser) {
    return { sucess: false, message: 'User with the same name or email already exists.' }
  }
  try {
    const newUser = await dbPrisma.userAuth.create({
      data: { name: name, email: email, age: age }
    })

    return { success: true, newUser }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, message: 'An error occurred while creating the user.' }
  }
}

export const isValidUser = async ( name: string, email: string) => {
  const dataUser = await dbPrisma.userAuth.findFirst({
    where: {
      name: name,
      email: email
    }
  })

  if (dataUser !== null) {
    return true
  } else {
    return false
  }
}

export const listUsers = async () => {
  try {
    const users = await dbPrisma.userAuth.findMany()
    return { sucess: true, users }
  } catch (error) {
    console.error('Error fetching users:', error)
    return { sucess: false, message: 'Unable to fetch users.' }
  }
}
