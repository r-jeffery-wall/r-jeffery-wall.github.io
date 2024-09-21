FROM python:3.12.4-bullseye

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY ./prod.env ./.env

COPY . /app
WORKDIR /app
COPY ./entrypoint.sh .

RUN python manage.py makemigrations
RUN python manage.py migrate --no-input
RUN python manage.py collectstatic --no-input
CMD ["gunicorn", "personal_portfolio_django.wsgi:application --bind 0.0.0.0:8000"]
