This is how you deploy Django applications that use Postgres and
environmental variables to Heroku.

This is assuming a set-up like the Django Cookiecutter.

Part I: Initial Launch
-----------------------

1. Ensure you have a (free) Heroku account, and can remember the
password. This can be done by simply signing up at the website.

2. Install the Heroku CLI
    - macOS:
        - Use Homebrew: brew install heroku/brew/heroku
    - Ubuntu Linux:
        - Go to the Software Center, search for Heroku, and install

3. Go to the directory of your Django project

4. Ensure your Django project has a Procfile (the Django cookiecutter
should have this) - this tells Heroku which file is the main "entry
point" to your server, in other words, which file to run to kick
everything off.

5. Ensure your Django project has a Pipfile (following the cookiecutter
you should have this too). If you have been using pipenv, you should be
good to go on this front.

6. IMPORTANT: Your project MUST be in a git repository. You can either
do this the normal way by going to GitHub and creating a new repo, then
cloning that, OR you can use the "git init" command to make a local-only
repo. However you do it, Heroku absolutely requires your project to be
in a single git repo, such that the Procfile, Pipfile, and manage.py are
all at the "top level" next to README.md and .git, etc.

7. Login to Heroku (should only have to do this once):
    - heroku login

8. Create a new Heroku Application on your account for your project
    - heroku create

9. If all went well... you are good to go! Deploy your app to Heroku:
    - git push heroku main
    - (or, "git push heroku master" if that's the name of your main branch)

If it's working, you should see text like "Python app detected", then
after a 30 seconds or so, something like:
remote: -----> Launching...
remote:        Released v4
remote:        https://secure-lake-12038.herokuapp.com/ deployed to

Chances are, however, it won't be working. Read on....

----------------------
Part II: Production settings

Chances are, you will see: "Application error". Whenever you are
curious about errors, run the following:
    - heroku logs

To fix it, we need to change some production settings, and add some
configuration settings to Heroku. Did you use Django Cookiecutter?
Okay, we we'll need to replace the production settings, then.

You have two options: 1) copy over the very simple provided production
settings in this directory (easiest), or 2) use the sophisticated one
that Django cookiecutter comes with (hardest), and set up all necessary
features it expects.

To go with 1) just copy over the production.py file, and replace the
existing config/settings/production.py file.


----------------------
Part III: Configuring Django on Heroku

Now, let's get Heroku configured properly.

1. Provision a Postgres database:
    - heroku addons:create heroku-postgresql:hobby-dev
    - If you already might have done this, double check with:
        - heroku pg

2. Add a Django secret. The only requirement for this is it should be
random and long, you will never have to remember it or type it. Mashing
your keyboard is good enough:
    - heroku config:add DJANGO_SECRET_KEY=dkljfaojtoerinsgp984tgiusnfd

3. Let Heroku know to use "Production" settings as opposed to test or
local settings:
    - heroku config:add DJANGO_SETTINGS_MODULE=config.settings.production

4. Migrate your data on production:
    - heroku run python manage.py migrate

5. Create a superuser account on production (this one is more "real", so
use a secure password!):
    - heroku run python manage.py createsuperuser

----------------------

Setting up individual features:



### Mailgun

Add env variables to Heroku as such:
    * MAILGUN_API_KEY
    * MAILGUN_DOMAIN

Then, add the following to your production.py:

    # Anymail (Mailgun)
    # ------------------------------------------------------------------------------
    # https://anymail.readthedocs.io/en/stable/installation/#installing-anymail
    INSTALLED_APPS += ['anymail']  # noqa F405
    EMAIL_BACKEND = 'anymail.backends.mailgun.EmailBackend'
    # https://anymail.readthedocs.io/en/stable/installation/#anymail-settings-reference
    ANYMAIL = {
        'MAILGUN_API_KEY': env('MAILGUN_API_KEY'),
        'MAILGUN_SENDER_DOMAIN': env('MAILGUN_DOMAIN')
    }



### Redis

Django Cookiecutter's default configuration uses a powerful NoSQL
database known as Redis by default for caching.
    - Provision a (free) Redis database after setting up your credit card:
        - heroku addons:create heroku-redis:hobby-dev

### AWS S3

Django Cookiecutter's default configuration uses AWS S3 (Amazon Web
Services) by default for uploaded file storage. Typically, this is
exactly what you need: AWS supports as many and as large of files that
your users might want to upload.
- Use AWS:
    - Setup AWS and get your keys (follow this guide:
        https://devcenter.heroku.com/articles/s3#s3-setup)
    - Configure your keys using heroku config:add for each of the
        AWS settings specified by config/settings/production.py

