import os
from flask import Flask
from .models import db
from flask_migrate import Migrate

from .config import Config
from .seeds import seed_commands



app = Flask(__name__)
app.config.from_object(Config)
app.cli.add_command(seed_commands)
db.init_app(app)
Migrate(app, db)