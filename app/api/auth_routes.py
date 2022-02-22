from flask import Blueprint, request
from app.models import User, db
from app.forms.user_login_form import LoginForm
from app.forms.user_signup_form import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
# from app.__init__ import csrf
# from flask_wtf.csrf import CSRFProtect


# csrf = CSRFProtect(app)

auth_routes = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):

        errorMessages = []
        for field in validation_errors:
            for error in validation_errors:
                errorMessages.append(f'{field}:{error}')
        return errorMessages

@auth_routes.route('/')
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors':['Unauthorized']}, 401

@auth_routes.route('/login', methods=['POST'])
def login():
    form = LoginForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@auth_routes.route('/logout')
def logout():
    logout_user()
    return{'message': 'User logged out'}

@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            firstName=form.data['firstName'],
            lastName=form.data['lastName'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            avatar="",
            total_affirmations = 0
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
