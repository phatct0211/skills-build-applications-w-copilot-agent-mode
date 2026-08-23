import express from 'express'
import cors from 'cors'
import { connectDatabase } from './config/database.js'
import activitiesRouter from './routes/activities.js'
import leaderboardRouter from './routes/leaderboard.js'
import teamsRouter from './routes/teams.js'
import usersRouter from './routes/users.js'
import workoutsRouter from './routes/workouts.js'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`

app.use(express.json())
app.use(cors())

app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

app.get('/api/health', (_request, response) => {
  response.json({ service: 'octofit-tracker-backend', status: 'ok', baseUrl })
})

async function startServer() {
  await connectDatabase()
  app.listen(port, () => {
    console.log(`OctoFit Tracker API listening on port ${port}`)
  })
}

startServer().catch((error) => {
  console.error('Unable to start OctoFit Tracker API:', error)
  process.exit(1)
})