import sqlite3
import os
from flask import Flask, redirect, render_template
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError

# from flask_babel import Babel
from helpers import apology, rng_hero_banner, get_include_path

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True


if __name__ == "__main__":
    app.run(host='0.0.0.0')


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response



con = sqlite3.connect("prins.db")
db = con.cursor()


food_info_query = db.execute(
    """SELECT * FROM food JOIN categories ON food.category_id = categories.category_id""").fetchall()
categories_info_query = db.execute("""SELECT * FROM categories""").fetchall()
categories_info = {}
for category in categories_info_query:
    bullets_query = db.execute(
        """SELECT bullet_text FROM bullets WHERE category_id = ? """, (category[0],)).fetchall()
    bullets = [tup[0] for tup in bullets_query]
    category_info = {"category_id": category[0], "category_name": category[1], "category_animal": category[2],
                     "category_description": category[3], "category_info": category[4], "category_imgsrc": category[5], "category_url_slug": category[6], "bullets": bullets}
    categories_info[category_info["category_url_slug"]] = category_info
food_info = []
for food in food_info_query:
    food_tmp = {"id": food[0], "name": food[1], "category_id": food[2], "subtitle": food[3], "desc_header": food[4], "description": food[5], "kg": food[6],
                "itemNum": food[7], "ean": food[8], "animal": food[9], "imgsrc": food[10], "url_slug": food[11], "category_name": food[13]}
    food_info.append(food_tmp)

@app.route("/")
def index():
    """Landing page"""
    return render_template("index.html")


@app.route("/advice-info")
def advice_info():
    """Advice and Info page"""
    return render_template("advice-info.html")


@app.route("/dealer-info")
def dealer_info():
    """Dealer Info page"""
    return render_template("dealer-info.html")


@app.route("/contact-us")
def contact_us():
    """Contact us page"""
    return render_template("contact-us.html")


@app.route("/discover-prins")
def discover_prins():
    """Discover prins info page"""
    return render_template("discover-prins.html")


@app.route("/search", methods=["GET", "POST"])
def search():
    """Search page"""
    return render_template("search.html")


@app.route('/our-products/<animal>')
def our_products(animal):
    """All product lines listed by animal"""
    categories = [category for category in categories_info.values(
    ) if category["category_animal"] == animal]
    if len(categories) > 0:
      return render_template("categories.html", categories=categories, category_animal=animal)
    else:
      return redirect("/")  


@app.route('/<animal>/<productline>')
def productline(animal, productline):
    '''Show all products by product line'''
    # /dog/fit-selection
    products = []
    if len(food_info) > 0:
        added_food = []
        for food in food_info:
            if food["name"] not in added_food and food["category_id"] == categories_info[productline]["category_id"]:
                added_food.append(food["name"])
                products.append(food)
        return render_template("category-products.html", products=products, category=categories_info[productline], category_animal=animal, os=os)
    else:
        return redirect(f"/our-products/{animal}")


@app.route('/<animal>/<productline>/<product>')
def animal_product(animal, productline, product):
    '''Single product page'''
    # /dog/fit-selection/chicken-rice
    products = []
    include_path = get_include_path(animal, productline, product)
    if len(food_info) > 0:
        for food in food_info:
            if ((product == food['url_slug']) and (animal == food['animal'])):
                products.append(food)
        return render_template("product.html", products=products, category_animal=animal, productline=productline, bgimg=rng_hero_banner(animal), include_path=include_path)
    else:
        return redirect(f"/our-products/{animal}")


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
