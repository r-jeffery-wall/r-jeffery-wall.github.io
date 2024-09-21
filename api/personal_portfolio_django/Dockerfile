FROM python:3.12.4-bullseye

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY ./prod.env ./.env

COPY . /app
WORKDIR /app
COPY ./entrypoint.sh .

ENTRYPOINT ["sh", "/app/entrypoint.sh"]
