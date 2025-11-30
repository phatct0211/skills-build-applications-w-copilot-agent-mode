from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        db = connection.cursor().db_conn
        # Drop collections if they exist
        for col in ['users', 'teams', 'activities', 'leaderboard', 'workouts']:
            if col in db.list_collection_names():
                db[col].drop()

        # Insert teams
        teams = [
            {'name': 'Marvel', 'description': 'Team Marvel Superheroes'},
            {'name': 'DC', 'description': 'Team DC Superheroes'}
        ]
        db.teams.insert_many(teams)

        # Insert users (superheroes)
        users = [
            {'name': 'Spider-Man', 'email': 'spiderman@marvel.com', 'team': 'Marvel'},
            {'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': 'Marvel'},
            {'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': 'DC'},
            {'name': 'Batman', 'email': 'batman@dc.com', 'team': 'DC'}
        ]
        db.users.insert_many(users)

        # Insert activities
        activities = [
            {'user': 'Spider-Man', 'activity': 'Running', 'duration': 30},
            {'user': 'Iron Man', 'activity': 'Cycling', 'duration': 45},
            {'user': 'Wonder Woman', 'activity': 'Swimming', 'duration': 60},
            {'user': 'Batman', 'activity': 'Yoga', 'duration': 40}
        ]
        db.activities.insert_many(activities)

        # Insert leaderboard
        leaderboard = [
            {'user': 'Spider-Man', 'points': 100},
            {'user': 'Iron Man', 'points': 90},
            {'user': 'Wonder Woman', 'points': 110},
            {'user': 'Batman', 'points': 95}
        ]
        db.leaderboard.insert_many(leaderboard)

        # Insert workouts
        workouts = [
            {'name': 'Morning Cardio', 'suggested_for': 'Marvel'},
            {'name': 'Strength Training', 'suggested_for': 'DC'}
        ]
        db.workouts.insert_many(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
