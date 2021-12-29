from cs50 import SQL
import redis
from flask import redirect, render_template, session
from functools import wraps

db = SQL("sqlite:///prins.db")

r = redis.StrictRedis(host="127.0.0.1", port=6379, db=0)


def apology(message, code=400):
    """Render message as an apology to user."""
    return render_template("apology.html", message=message, code=code)

def usd(value):
    """Format value as USD."""
    return f"${value:,.2f}"


def session_get_int(key):
    """
    Returns the value of a stored session variable converted to integer

      :returns: 
          - integer
    """
    if session.get(key) is not None:
        return int(session.get(key))
    else:
        return None
