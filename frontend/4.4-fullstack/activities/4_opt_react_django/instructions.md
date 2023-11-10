# Optional Activity - React Django Integration

This is an optional activity. It is recommended generally only if you have
already completed the Backend course, and you want to see how the Django
development we learned in that course can be integrated with React.

This activity assumes you are already comfortable using technologies covered in
the Backend course, including Python, virtualenvs (via Pipenv), Django view
functions, Django urls.py and so on. If you have not taken this course or are
othwerise unfamiliar with these topics, this activity might be difficult to
follow along, and you may prefer to inspect the solution directory directly.


-------------

The purpose of this activity is to get practice integrating a React project
with a Django project.



Challenge 1: New Django project
----------------------------------------

Get going with a brand new Django project. To do this, you will need to follow
the same steps as described in the *Backend* course to start a Django project
using Kickstart Coding's KC Project Starter.  The guide is below:

<https://github.com/kickstartcoding/django-kcproject-starter>


Once you have completed the guide and are successfully seeing the "My Site"
Boostrap-based example page in your browser at `localhost:8000`, continue on to
Challenge 2.



Challenge 2: New React project
----------------------------------------

1. Start a new React app called "frontend", by running the following command in
the same directory as `manage.py`:

        npx create-react-app frontend


2. Build the frontend. The goal here is to just have the "sample app" that
comes with CRA built and residing in the `build/` directory:

        cd frontend
        npm run build


3. If built successfully, you should be able to open up
`frontend/build/index.html` as a file directly in your browser, and see the
example CRA app (typically with a spinning React logo and a link to the React
documentation)



Challenge 3: Add React static files
----------------------------------------

Configure Django to serve up React's compiled JS, CSS, etc as additional static
files. Put this at the end of your "base.py" settings file:

        STATICFILES_DIRS = [
            os.path.join(BASE_DIR, '..', 'frontend', 'build', 'static'),
        ]




Challenge 4: Serve React's index.html
----------------------------------------

Background: So far, we are only serving up the built JS, CSS, and image files
that CRA's webpack configuration generates when we run `npm run build`. We also
want to serve up the `index.html` itself, in order to "mount" the React app and
see it in the browser when we navigate to a certain URL.

1. Create a view-function in Django to serve up the frontend's "index.html" in
the build directory to "kick things off". Open up `apps/core/views.py` and add
the following code:

        from django.http import HttpResponse
        def react_app(request):
            index_contents = open('./frontend/build/index.html').read()
            return HttpResponse(index_contents)


2. Create a URL route for your new view-function. Open up `apps/core/urls.py`
and add the following URL path to the end of the list, before the `]`:

        path('app/', views.react_app),

3. Run the Django server in a terminal (within virtualenv), if you aren't
already running it:

        python manage.py runserver


4. In your browser, navigate to `localhost:8000/app/` -- if you did everything
correctly, you should see the CRA sample application in your browser!




Challenge 5: API communication
----------------------------------------

1. Try adding the following test views to `apps/core/views.py`:

        from django.http import JsonResponse
        def example_api_view(request):
            return JsonResponse({
                'testing': 'Does this work?',
            })

2. And add the following test URL to `apps/core/urls.py`:

        urlpatterns = [
            # ...snip...
            path('api/just/testing/', views.example_api_view),
        ]


3. Now, in the `frontend/src/App.js`, add a `useEffect` and `fetch` to
"establish communication" and prove that you can send data from the backend to
the frontend:

        import {useEffect} from 'react';
        // ... snip...
        function App() {

          function getData() {
            fetch('/api/just/testing/')
              .then(response => response.json())
              .then(data => {
                console.log('Got data from Django!');
                console.log(data);
              });
          }
          useEffect(getData, []);

          return (
                // ...snip...
          );
        }


4. Finally, you won't be able to see the change you made to App.js until you
re-build the frontend:

        cd frontend
        npm run build

5. In your browser, navigate to `localhost:8000/app/`, and bring up your Dev
Tools console. If you did everything correctly, you should see the data from
the Django view-function showing up in your React-powered frontend app's
console.log statement.



Bonus Challenge: Using CRA's test server
----------------------------------------

* To keep on using CRA's test server during development so you get
  live-reloading, running both Django and node simultaneously. To do this,
  you'll have to configure CRA's proxy setting, by editing
  `frontend/package.json` to include `"proxy": "http://localhost:8000/",`



Bonus Challenge: React "catch-all" route
----------------------------------------

Background: React Router is a library we will be learning in a future lesson
(probably the very next one you will do!).  It is a library that permits React
to handle multiple "routes", or have an app that resembles a multi-page but is
still being controlled by React and is in fact still just index.html
"pretending" to be many routes at once. Most Single Page Apps use this
technique.

For React Router to work with Django, we will need to tell Django to serve up
the React index.html for ALL routes that it does not recognize, basically
"giving up control" to React in lieu of a 404 or error page. This allows us to
merge Django routes with React routes: Django routes will "trigger" first, and
if none of those are found, React will be the "catch-all".

Go into the project-level urls.py, and add the following
to the very end of the file:

        from django.urls import re_path
        from app.core import views
        urlpatterns += [re_path(r'.*', views.react_app)]




Bonus Challenge: Research Django REST Framework
------------------------------------------------

Background: Django REST Framework (DRF), is one of the most popular libraries
for Django. DRF is also exceedingly complicated, which is why we don't go into
it in either this course or the Backend course. DRF is overkill for most stuff
you might want to do, but really shines for larger SPA projects where Django's
role is relegated to mostly just being the API backend (i.e. with a SPA
obviating the need of Django's templating).  In this situation, DRF replaces
views and templates with a different structure that is more conducive to
writing and maintaining sophisticated APIs, with it's own "Serialization" code
paradigm (and terminology), OAuth and public API token support, and nifty
features such as automatically generated public documentation.

Read more here, and see if you can integrate that into this project (no
solution provided): <https://www.django-rest-framework.org/>

