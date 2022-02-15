from datetime import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.models import Affirmation, db
from app.forms import NewAffForm
import datetime
import random


affirmation_routes = Blueprint('affirmations', __name__)

# GET All Affirmations using userID
@affirmation_routes.route('/')
def get_affirmations():
    affirmations = Affirmation.query.get(current_user.id)
    return affirmations.to_dict()

# GET One Random Affirmation
@affirmation_routes.route('/random')
def get_affirmations():
    viewable_affirmations = Affirmation.query.filter(Affirmation.viewed == False)

    if len(viewable_affirmations) == 0:
        affirmations = Affirmation.query.get()
        for affirmation in affirmations:
            affirmation.viewed = False

    rand_aff_id = random.randInt(0, len(viewable_affirmations) - 1)
    randAff = viewable_affirmations.filter(lambda aff: aff.id == rand_aff_id)
    randAff.viewed = True
    return randAff.to_dict()
# POST One New Affirmation
@affirmation_routes.route('/', methods=['POST'])

def create_new_aff():
    form = NewAffForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_aff = {
            'body': form['body'],
            'image_url': form['image_url'],
            'viewed': form['viewed'],
            'created_at': datetime.now(),
            'updated_at': datetime.now()
        }
        db.session.add(new_aff)
        db.session.commit()
        return new_aff.to_dict()
    else:
        print(form.errors)
        return "Bad data"

# PUT Edit Current Day's Affirmation
@affirmation_routes.route('/<int:id>', methods=['PUT'])
def edit_daily_affirmation(id):
    aff_to_edit = Affirmation.query.get_or_404(id)
    form = NewAffForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        aff_to_edit.body = form.data['body']
        aff_to_edit.body = form.data['image_url']
        aff_to_edit.body = form.data['viewed']
        aff_to_edit.updated_at = datetime.now()
        db.session.commit()
        return aff_to_edit.to_dict()
    else:
        print(form.errors)
        return "Bad data"
