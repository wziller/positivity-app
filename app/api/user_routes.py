from flask import Blueprint, request
from flask_login import current_user
from app.models import User, db
from app.forms.user_signup_form import SignUpForm

user_routes = Blueprint("users", __name__, url_prefix="/users")


# GET One User ----> sessionUser
# POST One New User ---> signup
# PUT Edit User Data
# DELETE Remove One User


@user_routes.route("/<int:id>", methods=["PUT"])
def edit_user(id):
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        edit_user = User.query.get(id)
        edit_user.username = data["username"]
        edit_user.firstname = data["firstname"]
        edit_user.lastname = data["lastname"]
        edit_user.email = data["email"]
        edit_user.hashed_password = data["hashed_password"]
        edit_user.avatar = data["avatar"]
        db.session.commit()
        return edit_user.to_dict()
    else:
        print(form.errors)
        return "------Bad Data--------"



@user_routes.route("/<int:id>", methods=["DELETE"])
def delete_user(id):
    User.query.filter(User.id == id).delete()
    db.session.commit()
    return "True", 201



@user_routes.route("/increment/<int:id>",  methods=["POST"])
def increment_user_total(id):
    user = User.query.get(id)
    user.total_affirmations += 1
    db.session.commit()
    return user.to_dict()
