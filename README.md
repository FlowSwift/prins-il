# Prins - Israel

[prins-israel.co.il](https://www.prins-israel.co.il/)

## Development

Use Python 3.9.7 or later. Enable virtual environment:

```sh
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
export FLASK_APP=application
export FLASK_ENV=development # enable autoreload
```

## Running

```sh
flask run # bash
```
 
Visit http://127.0.0.1:5000/

## Server setting

- Server run command: `gunicorn --worker-tmp-dir /dev/shm wsgi:app`

## To do:

- contact form (google form)
- google custom search embed
- dealer page
