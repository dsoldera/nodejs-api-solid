import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import bcrypt from 'bcryptjs';
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

const { compare } = bcrypt;

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}
  
  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }
    // clean code rules
    // when we are using a variable to store a boolean value
    // we should use a question in the variable name
    const doestPasswordMatches = await compare(password, user.password_hash)

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}