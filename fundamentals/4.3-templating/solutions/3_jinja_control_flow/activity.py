# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
from jinja2 import Template

template = Template('''
{% if is_ready %}
    Activity 1 is ready!
{% else %}
    Activity 1 is not ready...
{% endif %}
''')
result = template.render({
    'is_ready': True,
})
print(result)




print('Challenge 2 -------------')

import json
movie_data = json.load(open('movies.json'))

template_string = '''
{% for movie in movies %}
    -------------------------------
    - {{ movie.title }}
    Facts:
        Title: {{ movie.title }}
        Summary: {{ movie.summary }}
    {% if movie.length > 150 %}
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

template_string = '''
{% for movie in movies %}
{{ movie.title }} | {{ movie.length }} min
{% endfor %}
'''
movies_information_template = Template(template_string)
result = movies_information_template.render({
    'movies': movie_data,
})
print(result)






print('Challenge 4 -------------')
players = json.load(open('athletics.json'))

template_string = '''
{% for player in athletes -%}
- {{ player.Name }}
    {%- if player['First Year'] > 2010 -%}
        |Newer Player
    {%- endif -%}
    |
    {%- if player.Bat == "R" and player.Throw == "R" -%}
        BOTH: Right
    {%- endif -%}
    {%- if player.Bat == "L" and player.Throw == "L" -%}
        BOTH: Left
    {%- endif -%}
    {%- if player.Bat == "L" and player.Throw == "R" -%}
        Bat: Left -- Throw: Right
    {%- endif -%}
    {%- if player.Bat == "R" and player.Throw == "L" -%}
        Bat: Right -- Throw: Left
    {%- endif %}
{% endfor %}
'''
athletics_template = Template(template_string)
result = athletics_template.render({
    'athletes': players,
})
print(result)






print('-------------')
# Bonus Challenge
# Modify the above template to generate an HTML page containing a table,
# containing the same information. Save that HTML page to output.html

template_string = '''
<link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-vader.css" type="text/css">

<body>
<table>
    <thead>
        <tr>
            <th>Rank</th> <th>Uniform</th> <th>Name</th> <th>Nationality</th>
            <th>Age</th> <th>Bat/Throw</th> <th>Height</th>
            <th>Weight</th> <th>Date of Birth</th> <th>First Year</th>
        </tr>
    </thead>
    <tbody>
        {% for player in athletes -%}
            <tr>
                <td>{{ player.Rank }}</td>
                <td>{{ player.Uniform }}</td>
                <td>{{ player.Name }}</td>
                <td>{{ player.Nationality }}</td>
                <td>{{ player.Age }}</td>
                <td>
                    {% if player.Bat == "R" and player.Throw == "R" %}
                        Right
                    {% endif %}
                    {% if player.Bat == "L" and player.Throw == "L" %}
                        Left
                    {% endif %}
                    {% if player.Bat == "L" and player.Throw == "R" %}
                        Bat: Left <br /> Throw: Right
                    {% endif %}
                    {% if player.Bat == "R" and player.Throw == "L" %}
                        Bat: Right <br /> Throw: Left
                    {% endif %}
                    {% if player.Bat == "S" %}
                        Bat: Switch
                    {% endif %}
                </td>
                <td>{{ player.Height }}</td>
                <td>{{ player.Weight }} lb</td>
                <td>{{ player['Date of Birth'] }}</td>
                <td>{{ player['First Year'] }}</td>
            </tr>
        {% endfor %}
    </tbody>
</table>
</body>
'''
athletics_template = Template(template_string)
result = athletics_template.render({
    'athletes': players,
})
open('output.html', 'w+').write(result)

