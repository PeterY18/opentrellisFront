# Launch Page for Open Trellis
Open Trellis is an upcoming project designed to help business owners. The purpose of this repository is to develop a launch website, informing people of Open Trellis and how they can a part of it.

# Local
```
$ docker build -t web:latest .
$ docker run -d --name django-heroku -e "PORT=8765" -e "DEBUG=1" -p 8007:8765 web:latest
$ docker exec -it django-heroku python manage.py collectstatic --noinput
$ docker exec -it django-heroku python manage.py collectstatic --noinput
$ docker exec -it django-heroku gunicorn mysite.wsgi:application --bind 0.0.0.0:$PORT
```

# Heroku
https://testdriven.io/blog/deploying-django-to-heroku-with-docker/

# trigger pipeline
.
