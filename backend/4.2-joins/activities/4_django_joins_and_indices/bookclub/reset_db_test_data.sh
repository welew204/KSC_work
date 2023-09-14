#!/bin/bash

# This is a helper Bash script to make it easier to reload data.

# Remove migration
rm ./apps/core/migrations/*.py
rm ./bookclub/db.sqlite3

# Remake that migration
python manage.py makemigrations core
python manage.py migrate

# Reload the data
python manage.py loaddata testing_data

echo '-- Test data loaded!! :)'
