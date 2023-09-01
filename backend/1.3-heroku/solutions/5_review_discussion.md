# Web

- internet
    - the concept or project of making all computers and devices in the world
      connected and talking with each other
- server
    - a computer that sits around waiting for requests to come in, so it cna
      send back responses
    - either the physical hardware
    - or the code or application that we're writing that does the logic when
      requests come in
- request
    - Sent by the client (the web browser)
    - Every single thing on the web is requested first with a "request"
    - HTTP defines this concept
    - Requests have paths
    - Analogy: Paper airplane from the client, to the server
- response
    - Sent back by the server code
    - Every thing we see on the web was "delivered to us" via a response
    - also can be thought of as a paper airplane
- routing
    - Code on the server, decides what to do with requests
    - In the case of Django, it's urls.py and it decides which view function handles each request
- API
    - Interface that code uses to talk to other code
    - Web API is an API that's built using requests and responses
    - Often JSON data
    - Give us access to databases and services written by third parties e.g. misc companies or orgs
- TCP
    - Two-way connection, that allows 2 computers to talk with each other
    - HTTP is built on top of TCP
    - Web developer don't think about TCP
    - Port numbers come from this
- HTTP
    - Protocol about how web servers talk with web clients
    - Defines the concepts of requests and responses
- IP Address
    - Phone numbers for computers
    - It's long number separated with dots typically (v4) that uniquely identifies every device on the interenet
    - You get a new one every time you reconnect
- What are some examples of clients?
    - Web browsers (firefox, chrome, chromium, safari, edge etc)
    - curl
    - insomnia and postman
- How does HTTP work to deliver content from servers to clients?
    - Requests & responses
    - Requests go into the server, specifying which content is needed
    - Servers decide what to respond with, and then send that via a "response"


----------------------

# Python modules

- module
    - A bit of python code we can import
    - Could be a single file
    - Could also be a directory filled with Python files
    - Whenever import suchandsuch, the "suchandsuch" is called a module

- import
    - Lets us gain access to other modules
    - Brings in code from another file
    - import will activate or run another python file, and then expose all the
      variables and functions and classes

- standard library
    - Is a huge set of modules that were written by core Python developers
    - Most needs to be imported
    - zip, csv, math, or random are explains
    - Python is "batteries included"
        - The opposite: Node.js is not "batteries include"
        - JavaScript developers prefer many things to be optional, supplied by
          the community instead of coming pre-installed
- PyPI
    - Community developed software for Python
    - The official repository of packages (downloadable modules)
    - Random developers around the world can upload their code to PyPI

- pipenv
    - One of several tools lets us download from PyPI
    - Creates & manages "virtualenv"
- pip
    - Also lets us download stuff from PyPI

- virtualenv
    - "Virtual environments"
    - We need to use these to safely download code from PyPI
    - Every project you work on, will get a virtualenv
    - That way each project can get separate dependencies
- dependencies
    - Everything you need to download to make a project work
- jinja
    - Templating lanaguage
    - Spin-off of Django Templates
    - Lets us combine our Python values into HTML
    - Substitute placeholders in our HTML files with our Python variables
- markdown
    - Library that lets us write markdown text, and convert this to HTML
- django
    - Package that has TONS of features, but it allows for developing web
      servers
    - Has routing for web servers
    - Defines concepts like view functoins, etc


- What are the use of Python Modules?
    - Break apart massive files
    - Better collaboration with other people
    - Use code other people wrote
    - Avoid merge conflicts, because we can separate our code and effort into
      separate files

- How can we download new libraries and put them into use?
    - Find out which libraries we want to use by searching Google, by searching
      PyPI, or in Stack Overflow answers
    - pipenv and/or pip
    - Create a new virtualenv for our project
    - Then use pipenv and/or pip to install software into that new virtual environment
    - THEN, we use import to gain access to these new libraries
    - Finally, use the documentation provided by those libraries to add
      features to our project

# Python OOP Terms:

- class
    - "Blueprint" for objects
    - It couples data with functions that use that data
    - Allows the OOP paradigm
    - Allows creation of object instances
- method
    - Function attached to a class or object
    - OOP word for "function"
- property
    - Are variables attached to object instances
- constructor
    - A special method that is run whenever you create a new instance
- instantiate
    - Instatiation is the process of creating a new instance
- instance
    - A particular copy of a class
    - One object instance of a class that was created
- extension
    - When a class copies the features of another class (base class gets copied to a subclass)
    - Keeps our classes DRY
- override
    - When we name a method the same thing as in a base class
    - The subclass version "wins" against the base class
    - It lets us substitute custom methods instead of base class methods
    - "Customizes" aspects of base class
- super
    - How we access the base class in case we need it again
    - Used for when we do overriding so we can invoke the old version of things
    - Allows for DRYer code when doing overriding so we don't have to copy methods
- What is the object oriented programming paradigm?
    - Modelling real life problems, in terms of classes and objects
    - Optional in Python -- you don't have to make classes in python
    - Most modern languages use this (Python, JavaScript, Java, C#, Ruby, C++,
      PHP, Perl and so on)
- How do we create new classes and objects using Python OOP?
    - class keyword
    - Invoke the class as function, will create a new object


### OOP example:


    class Foo:
        def method_example(self):
            print('hello class world')

    f = Foo()
    f.method_example()


    class Bar(Foo):
        def method_example(self):
            super().method_example()
            print('hello bar class world')

    b = Bar()
    b.method_example()

