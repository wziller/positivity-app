import os
from flask import Flask
from .models import db
from flask_migrate import Migrate

from .config import Config
from .seeds import seed_commands
from .api.auth_routes import auth_routes
from .api.user_routes import user_routes
from .api.affirmation_routes import affirmation_routes



app = Flask(__name__)
app.config.from_object(Config)
app.cli.add_command(seed_commands)

app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(affirmation_routes, url_prefix='/api/affirmations')
db.init_app(app)
Migrate(app, db)
