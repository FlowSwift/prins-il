from flask import redirect, render_template, session
from functools import wraps
import random

def apology(message, code=400):
    """Render message as an apology to user."""
    return render_template("apology.html", message=message, code=code)


def rng_hero_banner(animal_type):
    cats = [
      '20150825-131553-RX257948_0_0.jpg',
      'Prins-VitalCare-Dieet---Skin-Intestinal.jpg',
      'VitalCare%20Protection-Adult%20fit_0_0.jpg'
    ]
    dogs = [
      'ProCare%20Dieet%20-%20Spieren%20%26%20Gewrichten_3.jpg',
      'ProCare---Senior-support.jpg',
      'ProCare%20Protection-Sterilised_0.jpg'
    ]
    if (animal_type == 'cat'):
      return random.choice(cats)
    elif (animal_type == 'dog'):
      return random.choice(dogs)
    else:
        return None