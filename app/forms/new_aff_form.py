from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired

class NewAffForm(FlaskForm):
    body = TextAreaField('body', validators=[DataRequired()])
    image_url = TextAreaField('image_url', validators=[DataRequired()])
