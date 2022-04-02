import flask
import os
from dotenv import find_dotenv, load_dotenv
from models import db, Emails 

load_dotenv(find_dotenv())
app = flask.Flask(__name__)

# set up a separate route to serve the index.html file generated
# by create-react-app/npm run build.
# By doing this, we make it so you can paste in all your old app routes
# from Milestone 2 without interfering with the functionality here.
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

# Point SQLAlchemy to your Heroku database
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL0")
# Gets rid of a warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# route for serving React page
@bp.route("/login")
def login():

    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")

@app.route("/")
def index():
    return flask.render_template("goto.html")

@app.route("/add_email", methods=["GET", "POST"])
def add_email():
    userObj = flask.request.get_json(force=True)
    email = Emails(
        email = userObj["email"]
    )
    if len(Emails.query.filter_by(email=userObj["email"]).all()) == 0:
        db.session.add(email)
        db.session.commit()
    return ""


app.register_blueprint(bp)

app.run(host="localhost", port=3000, debug=True)