from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Emails(db.Model):
    """
    makes db for user
    """

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)