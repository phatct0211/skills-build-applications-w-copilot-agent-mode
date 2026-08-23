import { Router } from 'express'
import Leaderboard from '../models/Leaderboard.js'

const leaderboardRouter = Router()

leaderboardRouter.get('/', async (_request, response) => {
  const leaderboard = await Leaderboard.find()
    .populate('user', 'name avatar')
    .populate('team', 'name color')
    .sort({ rank: 1 })
  response.json(leaderboard)
})

leaderboardRouter.post('/', async (request, response) => {
  const entry = await Leaderboard.create(request.body)
  response.status(201).json(entry)
})

export default leaderboardRouter