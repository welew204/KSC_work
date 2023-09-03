<!-- Check out instructions.md to start -->

## Troubleshooting

### Issue: `django-admin startproject` fails

If you get an error like this while trying to do the initial `startproject`:

    CommandError: couldn't download URL https://github.com/kickstartcoding/django-kcproject-starter/archive/master.zip to master.zip
    <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1108)>

#### Work around

1. Go to https://github.com/kickstartcoding/django-kcproject-starter

2. Click the button `[Clone or download v]`, then click "Download Zip"

3. Save the django-kcproject-starter-master.zip file somewhere, such as
in your ~/Downloads directory, or in the directory you are working

4. Now, run the same command, except referencing the downloaded copy. Example
commands below:

```bash
#  If you saved it in ~/Downloads, then do:
django-admin startproject --template=~/Downloads/django-kcproject-starter-master.zip bookclub

#  If you saved it in the current directory:
django-admin startproject --template=./django-kcproject-starter-master.zip bookclub
```


#### Solution

This can happen to some users, often on macOS, and has to do with SSL
certificates and/or Python3 having some installation issues. To properly solve
this issue, you may need to upgrade your Python3 installation, and/or add
updated certificates. Since this can be tricky and OS-specific, consider
instead checking out instead the work-around below.


### Issue: `pipenv install --dev` fails on `psycopg2` and/or `gunicorn`

You might get large error messages while installing these packages. It might
look like:

        'ERROR: Command errored out with exit status 1: python setup.py egg_info
        Check the logs for full command output.'


#### Work around

**Ignore it, and keep on developing!**

These packages are not needed for development. Likely everything else will work
fine, and you won't run into any issues while developing, since the local
development set-up is using Sqlite, not Postgres, and the local development
server doesn't use `gunicorn`.

#### Solution

For GNU/Linux based systems, `psycopg2` this can often be properly solved by
simply installing the Postgres client locally on your operating system (e.g.
`sudo apt install postgres`). For Macintosh-based operating systems, the
solution might be more involved, and we'd recommend searching for Mac-specific
answers about Python3 `psycopg2` failing to compile.

