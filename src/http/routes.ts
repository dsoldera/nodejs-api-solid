import { authenticate } from '@/http/controllers/authenticate'
import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  // using the route /session to be more human readable instad of autenticate
  app.post('/sessions', authenticate)
}