from jinja2 import Template


print('------------- Example 1')

template = Template('''
{% if user.is_logged_in %}
    <p>{{ user.data }}</p>
{% else %}
    <p>Not logged in...</p>
{% endif %}
''')
user_info = {
    'is_logged_in': True,
    'data': 'SSN: 595153535',
}
results = template.render({
    'user': user_info,
})
print(results)



print('------------- Example 2')

template = Template('''
Example Bullet List:
<ul>
    {% for item in items %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
''')

list_of_items = [
    'bread',
    'milk',
    'eggs',
]

results = template.render({
    'items': list_of_items,
})
print(results)




print('------------- Example 3')

template = Template('''
Using if and for loops combined:

{% for link in links %}
    {% if link == selected_link %}>>{% endif %} {{ link }}
{% endfor %}
''')

list_of_links = [
    'google.com',
    'microsoft.com',
    'facebook.com',
]

selected = 'microsoft.com'

results = template.render({
    'links': list_of_links,
    'selected_link': selected,
})
print(results)

