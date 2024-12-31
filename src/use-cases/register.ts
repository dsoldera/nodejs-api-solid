import { UsersRepository } from '@/repositories/users-repository';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

// SOLID
// D -> DEPENDENCIES INVERSIBLE PRINCIPLE
// O -> OPEN/CLOSED PRINCIPLE
// L -> LISKOV SUBSTITUTION PRINCIPLE
// I -> INTERFACE SEGREGATION PRINCIPLE
// D -> DEPENDENCY INVERSION PRINCIPLE

const { hash } = bcrypt;

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}
  
  async execute({
    name, 
    email, 
    password }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }
  
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return {
      user,
    }
  }
}

// export async function registerUseCase({
//   name,
//   email,
//   password,
// }: RegisterUseCaseRequest) {
//   const password_hash = await hash(password, 6)

//   const userWithSameEmail = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   })

//   if (userWithSameEmail) {
//     throw new Error('E-mail already exists.')
//   }

//   const prismaUsersRepository = new PrismaUsersRepository()

//   await prismaUsersRepository.create({
//     name,
//     email,
//     password_hash,
//   })
// }