import { Router } from 'express'
import Activity from '../models/Activity.js'

const activitiesRouter = Router()

activitiesRouter.get('/', async (_request, response) => {
  const activities = await Activity.find().populate('user', 'name email').sort({ completedAt: -1 })
  response.json(activities)
})

activitiesRouter.post('/', async (request, response) => {
  const activity = await Activity.create(request.body)
  response.status(201).json(activity)
})

export default activitiesRouter