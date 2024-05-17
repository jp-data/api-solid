import { prisma } from '@/lib/prisma'
import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { hash } from 'bcryptjs'

interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUserCase({
  name,
  email,
  password,
}: RegisterUserCaseRequest) {
  // generate an password hash
  const password_hash = await hash(password, 6)
  // validation of duplicate emails
  const duplicateEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (duplicateEmail) {
    throw new Error('Email already exists!')
  }

  const prismaUsersRepository = new PrismaUsersRepository()

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })
}
