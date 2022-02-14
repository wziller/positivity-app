from .db import db
from werkzeug.security import generate_password_hash, check_password_hash;
from flask_login import UserMixin

class User(db.Model, UserMixin):
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False)
    firstname = db.Column(db.String(255), nullable=False)
    lastname = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    hashed_password = db.Column(db.String(50), nullable=False)
    avatar = db.Column(db.String(255), nullable=True)

    @property
    def password(self):
        self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id':self.id,
            'username':self.username,
            'firstname':self.firstname,
            'lastname':self.lastname,
            'email':self.email,
            'hashed_password':self.hashed_password,
            'avatar':self.avatar
        }
