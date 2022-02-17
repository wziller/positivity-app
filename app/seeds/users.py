from app.models import db, User
from werkzeug.security import generate_password_hash, check_password_hash



def seed_users():
    Demo = User(
        username='Demo', firstName='Demo', lastName='Lition', email='demo@aa.io', password = generate_password_hash("password"), avatar="")
    Ann = User(
        username='anndonnelly', firstName='Ann', lastName='Donnelly', email='donnelly.ann21@gmail.com', password = generate_password_hash("password"), avatar="")
    William = User(
        username='wziller', firstName='William', lastName='Ziller', email='wziller@gmail.com', password = generate_password_hash("password"), avatar="")
    

    db.session.add(Demo)
    db.session.add(Ann)
    db.session.add(William)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()