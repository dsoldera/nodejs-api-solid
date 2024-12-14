import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

// SOLID
// D -> DEPENDENCIES INVERSIBLE PRINCIPLE
// O ->
// L ->
// I ->
// D -> 

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}
  
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }
  
    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
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