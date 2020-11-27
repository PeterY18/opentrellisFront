# Launch Page for Open Trellis
Open Trellis is an upcoming project designed to help business owners. The purpose of this repository is to develop a launch website, informing people of Open Trellis and how they can a part of it.

# Local
For an automated start run:
```
docker-compose -p trellis-landing-page up -d
```

To manually start the app run:
```
docker build -t trellis-landing-page:latest .
docker run -d --name trellis-lp-web -e "PORT=8765" -e "DEBUG=1" -p 8007:8765 trellis-landing-page:latest
```

# Heroku
Deployments are automatic based on PRs to `master` branch.

To deploy manually run:
```
git push heroku:master
```

App in Heroku is based on this [tutorial](https://testdriven.io/blog/deploying-django-to-heroku-with-docker).

