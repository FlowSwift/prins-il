from flask import redirect, render_template, session
from functools import wraps
import random

def apology(message, code=400):
    """Render message as an apology to user."""
    return render_template("apology.html", message=message, code=code)


def rng_hero_banner(animal_type):
    cats = [
      '20150528-155351-RX226187.jpg',
      '20150825-131553-RX257948_0_0.jpg',
      'artikel-bg-2_1.jpg',
      'Prins-VitalCare-Dieet---Skin-Intestinal.jpg',
      'VitalCare%20Protection-Adult%20fit_0_0.jpg'
    ]
    dogs = [
      'ProCare%20-%20resist%20calm%20mini_0_0.jpg',
      'ProCare%20Dieet%20-%20Spieren%20&%20Gewrichten_3.jpg',
      'ProCare%20Protection-Lamb%20Hypoallergic_0.jpg',
      'ProCare%20Protection-Sterilised_0.jpg',
      'ProCare---Senior-support.jpg',
      'video-categorie-hond_0.jpg'
    ]
    if (animal_type == 'cat'):
      return random.choice(cats)
    elif (animal_type == 'dog'):
      return random.choice(dogs)
    else:
        return None

def get_include_path(animal, productline, product):
    path = '-'.join([animal, productline, product])
    return path + '.html'

def get_food_image_path(animal, productline, product):
    path = animal + '/food/' + 'prins-' + productline + '-' + product
    return path + '.jpeg'
