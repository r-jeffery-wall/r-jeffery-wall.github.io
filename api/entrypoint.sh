#!/bin/sh

python ./personal_portfolio_django/manage.py makemigrations
python ./personal_portfolio_django/manage.py migrate --no-input
python ./personal_portfolio_django/manage.py collectstatic --no-input

gunicorn backend.wsgi:application --bind 0.0.0.0:8000

