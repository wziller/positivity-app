from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired

class NewAffForm(FlaskForm):
    body = TextAreaField('body', validators=[DataRequired()])
    image_url = TextAreaField('image_url')
    user_id= IntegerField('user_id')
