# Prins Israel

## Development

```sh
brew install redis
```

Enable virtual environment:

```sh
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
export FLASK_APP=application
export FLASK_ENV=development # enable autoreload
```

## Running

```sh
redis-server # terminal #1
flask run # terminal #2 (venv)
```

## Translations

Get translation keys:

```python
pybabel extract -F babel.cfg -o messages.pot --input-dirs=.
# pybabel init -i messages.pot -d translations -l en # for init only
# pybabel init -i messages.pot -d translations -l he
pybabel update -i messages.pot -d translations -l en
pybabel update -i messages.pot -d translations -l he
```

After translating keys in translations folder compile .mo files:

```python
pybabel compile -d translations
```

Usage in templates with `_('Word')` or `gettext('Word')`:

```html
<h2>{{ _('Free Trial') }}</h2>
<input type="submit" value="{{ gettext('Sign up') }}"/>
```


Visit http://127.0.0.1:5000/
