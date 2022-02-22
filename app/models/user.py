from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    firstName = db.Column(db.String(255), nullable=False)
    lastName = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(150), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    avatar = db.Column(db.String(255), nullable=True)

    # Relationship
    usersAffirmations = db.relationship("Affirmation", back_populates="affirmationUser",  cascade="all, delete-orphan")

    @property
    def password(self):
        self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return {
            'id':self.id,
            'username':self.username,
            'firstName':self.firstName,
            'lastName':self.lastName,
            'email':self.email,
            'password':self.hashed_password,
            'avatar':self.avatar,
            # 'affirmations': [usersAffirmation.to_dict() for usersAffirmation in self.usersAffirmations]
            #  1 affirmation in list of affs
        }
