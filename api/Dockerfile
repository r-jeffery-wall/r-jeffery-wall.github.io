FROM python:3.12.4-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR .

COPY . .
COPY ./prod.env ./.env

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "personal_portfolio_django/manage.py", "runserver", "0.0.0.0:8000"]
