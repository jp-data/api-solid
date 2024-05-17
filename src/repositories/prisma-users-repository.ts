import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

// for any changes on the users table
export class PrismaUsersRepository {
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        })

        return user
    }
}