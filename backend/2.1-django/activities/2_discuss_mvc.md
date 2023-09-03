# Questions

1. What might be the advantages of MVC, the "keep stuff separate" philosophy?
- easier debugging, development, deployment

2. Define the following terms in your own words: Django Model, Django View,
Django Template
- Django model: the interface to the database, used to validate queries and post to db, the I/O
- Djanjo view: the business logic of the application, where your user's requests and views are turned into conditionals, etc, to selectively interact (via the Model) with the DB; the bulk of the code
- Django Template: the raw html created based on response from the view function, passing info on from the Model; the frontend

3. Can you explain in your own words a what is a "django project" vs a "django
app"? Why do we have this distinction?
- django project is a collection of 1 or more apps, with settings and other global components consolodated
- a django app is one part or department of the project
- cannot have an app w/ out a project :)
>> this paradigm provides for better "keep stuff seperate" philosophy
4. Which category does each of the following code goes into (either "model",
"view", or "template"):

- Code to make a HTML list of dogs
>> Template
- Code which decides if a dog is too young to be adopted
>> View
- Code that stores a dog adoption record into the database
>> Model
- Code that checks if a user is logged out to prevent them from continuing
>> View, by way of Model
- Code that ensures email addresses in the database look valid with "@" in them
>> Model
- Code which renders HTML showing a dog's adoption history
>> Template

