from .db import db
import datetime

class Affirmation(db.Model):
    __tablename__ = "affirmations"

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
    viewed = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.datetime.now())

    # Relationship
    affirmationUser = db.Relationship("User", back_populates="usersAffirmations")

    def to_dict(self) :
        return {
            "id" : self.id,
            "body": self.body,
            "image_url" : self.image_url,
            "viewed": self.viewed,
            "created_at" : self.created_at,
            "updated_at" : self.updated_at
        }
    
    





    