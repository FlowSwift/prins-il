import redis

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

# from flask_babel import Babel
from helpers import apology, usd, session_get_int

# default it runs on port 6379
r = redis.StrictRedis(host="0.0.0.0", port=6379, db=0)

app = Flask(__name__)
# babel = Babel(app)

app.config["TEMPLATES_AUTO_RELOAD"] = True

# LANGUAGES = {
#     'en': 'English',
#     'he': 'Hebrew'
# }
# app.config['LANGUAGES'] = LANGUAGES

if __name__ == "__main__":
    app.run(host='0.0.0.0')


# @babel.localeselector
# def get_locale():
#     """Set localization for text keys"""
#     if (session.get("language") is not None):
#         return session.get('language')['charcode']
#     return request.accept_languages.best_match(app.config['LANGUAGES'].keys())


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


UPLOAD_FOLDER = 'static/files'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.jinja_env.filters["usd"] = usd
app.config["SESSION_FILE_DIR"] = mkdtemp()

# TODO
# Details on the Secret Key: https://flask.palletsprojects.com/en/1.1.x/config/#SECRET_KEY
# NOTE: The secret key is used to cryptographically-sign the cookies used for storing
#       the session identifiesession.
app.secret_key = 'PRINS_SESSION_KEY'

# Configure Redis for storing the session data on the server-side
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_REDIS'] = redis.from_url('redis://0.0.0.0:6379')

Session(app)

db = SQL("sqlite:///prins.db")


@app.route("/")
def index():
    """Landing page for visitors, dashboard for registered users"""
    if (session_get_int("user_id") is not None):
        return render_template("index.html")
    else:
        return render_template("index.html")


@app.route("/about")
def about():
    """About page"""
    return render_template("about.html")


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
