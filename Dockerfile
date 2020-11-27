# pull official base image and install dependencies
FROM python:3.8-alpine AS build-python
COPY ./requirements.txt /
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /wheels -r requirements.txt

FROM python:3.8-alpine

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

# install psycopg2
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps

# Pull in dependencies
COPY --from=build-python /wheels /wheels
COPY --from=build-python requirements.txt .
RUN pip install --no-cache /wheels/*

# set work directory
WORKDIR /app

# copy project
COPY . .

# Collect static
RUN python manage.py collectstatic --noinput

# add and run as non-root user
RUN adduser -D trellis
USER trellis

# Run
CMD gunicorn mysite.wsgi:application --bind 0.0.0.0:$PORT