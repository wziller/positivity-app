from flask.cli import AppGroup
from .users import seed_users, undo_users
from .affirmations import seed_affirmations, undo_affirmations

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_affirmations()

@seed_commands.command('undo')
def unseed():
    undo_affirmations()
    undo_users()
