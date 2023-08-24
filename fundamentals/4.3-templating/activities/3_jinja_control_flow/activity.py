# REMINDER: Only do one challenge at a time! Save and test after every one.

import json
from jinja2 import Template
print('Challenge 1 -------------')
# Challenge 1:
# 1. As with the previous activity, create a new virtualenv using pipenv
# 2. Enter into that virtualenv
# 3. Install jinja2
# 4. Examine the following code. See if you can explain in your own words what
# every line is doing. Change it to say "Activity 1 is ready!" (Should be done
# without modifying the template itself.)


template = Template('''
{% if is_ready %}
    Activity 1 is ready!
{% else %}
    Activity 1 is not yet ready...
{% endif %}
''')
result = template.render({
    'is_ready': True,
})
print(result)


print('Challenge 2 -------------')
# Challenge 2:
# 1. Oh yay, another one of those "spot the mistakes" problems! This time, the
# only parts of this that are broken are in the Jinja template that is doing
# looping and if statements.
# 2. Uncomment the commented-out code and observe the errors that Jinja
# generates.
# 3. Fix everything. You will know it is fixed when it loops through all 5
# movies, printing their titles, summaries, and noting movies that are
# unusually long.

movie_data = json.load(open('movies.json'))

template_string = '''
{% for movie in movies %}
    -------------------------------
    - {{ movie.title }}
    Facts:
        Title: {{ movie.title }}
        Summary: {{movie.summary}}
    {% if movie.length > 150  %}
        Really Long: This movie is over 2.5 hours, yikes!
    {% endif %}
{% endfor %}
'''

movies_information_template = Template(template_string)
result = movies_information_template.render({
    'movies': movie_data,
})
print(result)


print('Challenge 3 -------------')
# Challenge 3:
# Write the code for a new template and render it, such that it loops through
# all movies, printing out their title and runtime (labeled as minutes), so
# it looks something like:

# The Shawshank Redemption | 142 min
# WALL-E | 97 min
# Pan's Labyrinth | 119 min
# The Godfather: Part II | 202 min
# The Room | 99 min

# (Some excess space or extra lines are okay.)
template_string_2 = '''
{% for movie in movies %}
    {{ movie.title }} |  {{ movie.length }} min
{% endfor %}
'''

movies_information__compact_template = Template(template_string_2)
result = movies_information__compact_template.render({
    'movies': movie_data,
})
print(result)


print('Challenge 4 -------------')
# Challenge 4:
# This is tough challenge!
# 1. Write a template that loops through all the baseball players found within
# the athletics.json file, outputting their name.
# 2. If the player joined after 2010, write "newer player" after their name.
# Hint: Use player['First Year'] to access the year they joined.
# 3. Output "BOTH: Right" if they bat with their right hand AND throw with
# their right hand. Output "BOTH: Left" if they use left for both. If is a mix
# of the two, then write: "Left, Bat - Right, Throw" (as an example)
# Hint: The data is in the format of "Bat": "R", and "Throw": "L"
players = json.load(open('athletics.json'))
as_string_template = '''
{% for ath in athletics%}
    {{ath.Name}}{% if ath['First Year'] > 2010%}
        , newer player
    {% endif %} | {% if ath.Bat == ath.Throw %} BOTH:{{ ath.Bat }} {% else %} Bat, {{ ath.Bat }} - Throw, {{ ath.Throw }}
    {% endif %}
{% endfor %}
    '''
player_template = Template(as_string_template)
results = player_template.render({'athletics': players})
print(results)

print('-------------')
# Bonus Challenge
# Modify the above template to generate an HTML page containing a table,
# containing the same information. Save that HTML page to output.html
