import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        avatar: 'MC',
        totalPoints: 1280,
      },
      {
        name: 'Jordan Brooks',
        email: 'jordan.brooks@example.com',
        avatar: 'JB',
        totalPoints: 1140,
      },
      {
        name: 'Priya Shah',
        email: 'priya.shah@example.com',
        avatar: 'PS',
        totalPoints: 970,
      },
    ]);

    const teams = await Team.create([
      {
        name: 'Summit Squad',
        captain: users[0]._id,
        color: '#198754',
        motto: 'Climb higher together',
      },
      {
        name: 'Pulse Crew',
        captain: users[1]._id,
        color: '#0d6efd',
        motto: 'Find your rhythm',
      },
    ]);

    await User.bulkWrite([
      { updateOne: { filter: { _id: users[0]._id }, update: { team: teams[0]._id } } },
      { updateOne: { filter: { _id: users[1]._id }, update: { team: teams[1]._id } } },
      { updateOne: { filter: { _id: users[2]._id }, update: { team: teams[0]._id } } },
    ]);

    await Activity.create([
      {
        user: users[0]._id,
        type: 'Strength training',
        durationMinutes: 45,
        calories: 360,
        points: 180,
        completedAt: new Date('2026-08-20T07:30:00Z'),
      },
      {
        user: users[1]._id,
        type: 'Trail run',
        durationMinutes: 38,
        calories: 420,
        points: 210,
        completedAt: new Date('2026-08-21T17:15:00Z'),
      },
      {
        user: users[2]._id,
        type: 'Yoga flow',
        durationMinutes: 30,
        calories: 180,
        points: 120,
        completedAt: new Date('2026-08-22T09:00:00Z'),
      },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 1280, rank: 1, period: 'all-time' },
      { user: users[1]._id, team: teams[1]._id, points: 1140, rank: 2, period: 'all-time' },
      { user: users[2]._id, team: teams[0]._id, points: 970, rank: 3, period: 'all-time' },
    ]);

    await Workout.create([
      {
        name: 'Full Body Foundation',
        category: 'Strength',
        difficulty: 'beginner',
        durationMinutes: 30,
        exercises: ['Bodyweight squats', 'Incline push-ups', 'Glute bridges', 'Plank'],
        description: 'A balanced introduction to full-body strength training.',
      },
      {
        name: 'Tempo Runner',
        category: 'Cardio',
        difficulty: 'intermediate',
        durationMinutes: 35,
        exercises: ['Warm-up jog', 'Tempo intervals', 'Recovery jog', 'Cool down'],
        description: 'Build speed and stamina with structured running intervals.',
      },
      {
        name: 'Reset and Restore',
        category: 'Mobility',
        difficulty: 'beginner',
        durationMinutes: 20,
        exercises: ['Cat-cow', 'Low lunge', 'Seated twist', 'Box breathing'],
        description: 'Release tension and improve mobility after a busy day.',
      },
    ]);

    console.log('Database seeding complete: 3 users, 2 teams, 3 activities, 3 leaderboard entries, 3 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
