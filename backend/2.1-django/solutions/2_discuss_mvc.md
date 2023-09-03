# Questions

1. What might be the advantages of MVC, the "keep stuff separate" philosophy?
    * As applications get more and more complex, with more and more people
      working on them, it becomes important to break it down
    * Avoid merge conflicts: Front-end engineers can just focus on writing
      templates, backend engineers models and views
    * Easier to conceptualize: Big ideas are hard to break down, this is one
      more way to break down big ideas (e.g. "what does it look like?" is a
      different question than "how does it behave?" and "what data should we
      store?")
    * Prevent bugs: For example, front-end engineers can be relatively assured
      they can't introduce any database-breaking bugs if they stick with
      working on Templates, while back-end engineers can be relatively assured
      they won't  introduce graphical or browser-related bugs if they stick
      with Views and Models

2. Define the following terms in your own words: Django Model, Django View,
Django Template
    * Django Model - Validates data in the database. Stores and retrieves database
      data.
    * Django View - Code that fetches data and makes responses based on requests
      coming in. Contains the "business logic": Makes all the decisions.
    * Django Template - e.g. Jinja or Django templates, present data with HTML
      and CSS

3. Can you explain in your own words a "django project" vs a "django app"? Why
do we have this distinction?
    * Unlike other frameworks, Django separates a concept of a "project" from
      the concept of a project's various "apps"
    * Django projects represent an entire website or web application, while a
      Django app is only part of one functionality or one aspect
    * Django project can contain one or many Django apps
    * Django apps could be considered like "departments" (e.g. user
      communication, billing, account management, marketing analyitcs,
      administration features, site news, etc might all be different apps for a
      larger website)
    * The distinction exists because as web applications get more complex,
      it becomes more and more important to "keep stuff separate" so that
      different teams can work on different parts of the project (reduces
      chances of merge conflicts, bugs, confusion)
    * Also, it's possible to re-use Django apps between projects, e.g. if you
      create a great chat or commenting system, it's possible to re-use it on
      multiple sites
    * Django apps represent a "vertical slice" of Models, Views, and Templates
    * For smaller web applications, such as most that you will make for this
      course, the distinction is less important, so there will probably only 1
      project and 1 app

4. Which category does each of the following code goes into (either "model",
"view", or "template"):

*NOTE:* This is somewhat subjective, some cases might be borderline depending
on interpretation of the prompt!

- Code to make a HTML list of dogs
    * Template
- Code which decides if a dog is too young to be adopted
    * View
- Code that stores a dog adoption record into the database
    * Model
- Code that checks if a user is logged out to prevent them from continuing
    * View
- Code that ensures email addresses in the database look valid with "@" in them
    * Model
- Code which renders HTML showing a dog's adoption history
    * Template

