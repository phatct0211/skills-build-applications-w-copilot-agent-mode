import { Router } from 'express'
import User from '../models/User.js'

const usersRouter = Router()

usersRouter.get('/', async (_request, response) => {
  const users = await User.find().populate('team', 'name color').sort({ totalPoints: -1 })
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const user = await User.create(request.body)
  response.status(201).json(user)
})

export default usersRouter