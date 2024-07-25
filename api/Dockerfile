FROM python:3.12.4-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY . .

RUN pip install -r requirements.txt

EXPOSE 8000
