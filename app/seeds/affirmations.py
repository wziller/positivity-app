from app.models import db, Affirmation
from datetime import datetime



def seed_affirmations():
    Affirmation1 = Affirmation(
        body='"I am in the right place at the right time, doing the right thing', image_url='', viewed= False, user_id=1, created_at=datetime.now(), updated_at=datetime.now())
    Affirmation2 = Affirmation(
        body="Make way for the unprecedented and watch your reality rearrange yourself", image_url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yrsa-daley-ward-1621436133.jpg?crop=1xw:1xh;center,top&resize=980:*', viewed= False, user_id=1, created_at=datetime.now(), updated_at=datetime.now())
    Affirmation3 = Affirmation(
        body="The chance to love and be loved exists no matter where you are", image_url='', viewed= True, user_id=2, created_at=datetime.now(), updated_at=datetime.now())
    

    db.session.add(Affirmation1)
    db.session.add(Affirmation2)
    db.session.add(Affirmation3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_affirmations():
    db.session.execute('TRUNCATE affirmations RESTART IDENTITY CASCADE;')
    db.session.commit()