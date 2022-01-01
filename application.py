import redis

import sqlite3
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

con = sqlite3.connect("prins.db")

db = con.cursor()

food_info_query = db.execute("""SELECT * FROM food JOIN categories ON food.category_id = categories.category_id""").fetchall()
categories_info_query = db.execute("""SELECT * FROM categories""").fetchall()
categories_info = []
for category in categories_info_query:
    bullets_query = db.execute("""SELECT bullet_text FROM bullets WHERE category_id = ? """, (category[0],)).fetchall()
    bullets = [tup[0] for tup in bullets_query]
    category_info = {"category_id" : category[0], "category_name" : category[1], "category_description" : category[2], "category_info" : category[3], "category_imgsrc" : category[4], "bullets" : bullets}
    categories_info.append(category_info)
food_info = []
for food in food_info_query:
    food_tmp = {"id" : food[0], "name" : food[1], "category_id" : food[2], "description" : food[3], "kg" : food[4], "itemNum" : food[5], "ean" : food[6], "animal" : food[7], "imgsrc" : food[8], "category_name" : food[10]}
    food_info.append(food_tmp)


@app.route("/")
def index():
    """Landing page for visitors, dashboard for registered users"""
    if (session_get_int("user_id") is not None):
        return render_template("index.html")
    else:
        return render_template("index.html")


@app.route("/advice-info")
def advice_info():
    """Advice and Info page"""
    return render_template("advice-info.html")

@app.route("/dealer-info")
def dealer_info():
    """Dealer Info page"""
    return render_template("dealer-info.html")

@app.route("/our-products/cat")
def cat_products():
    """Cat products page"""
    return render_template("advice-info.html")


@app.route("/contact-us")
def contact_us():
    """Contact us page"""
    return render_template("contact-us.html")

@app.route("/discover-prins")
def discover_prins():
    """Discover prins info page"""
    return render_template("discover-prins.html")


@app.route('/dog/<productline>')
def dog_productline(productline):
  products = [
    {
      'productline': productline,
      'producttitle': 'good yum yums',
      'subtitle': 'kibbles and bits for the whole family',
      'imgsrc': 'dog/320/pc-pro-super-active_1.png'
    },

    {
      'productline': productline,
      'producttitle': 'fancier yums',
      'subtitle': 'kibbles and bits for puppies',
      'imgsrc': 'dog/320/pc-pro-super-active_1.png'
    }
  ]
  return render_template("category-products.html", products=products, animal='dog')



@app.route('/our-products/dog')
def dog_products():
  """Dog products page"""
  categories = [
    {
      'category': 'awtawt',
      'bullets': [
        'bulleeeeeeeaet 1 of fun',
        'bulleeeeeeeet 2 of fun',
        'bulleeeeeeeet 3 of fun',
        'bulleeeeeeeet 4 of fun',
        '',
        ''
      ],
      'imgsrc': 'dog/320/pc-pro-super-active_1.png'
    },
    {
      'category': 'awtawtaw',
      'bullets': [
        'bulleeeeeeeaet 1 of fun',
        'bulleeeeeeeet 2 of fun',
        'bulleeeeeeeet 3 of fun',
        'bulleeeeeeeet 4 of fun',
        '',
        ''
      ],
      'imgsrc': 'dog/320/pc-pro-super-active_1.png'
    }
  ]
  return render_template("categories.html", categories=categories, animal='dog')


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
