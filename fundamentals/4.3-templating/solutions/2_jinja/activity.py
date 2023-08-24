from jinja2 import Template

print('Challenge 1 -------------')
# Challenge 1:

template = Template('Hello, {{ name }}!')
result = template.render({
    'name': 'Jessica',
})
print(result)


print('Challenge 2 -------------')
# Challenge 2:


user_information_template = Template('''
<p>Name: {{ name }}</p>
<p>Favorite color: {{ color }}</p>
<p>Favorite food: {{ food }}</p>
<p>Favorite book: {{ book }}</p>
''')

result = user_information_template.render(
    name='Samwise Gamgee',
    color='Green',
    food='Taters',
    book='There and Back Again',
)
print(result)



print('Challenge 3 -------------')
# Challenge 3:
# Uncomment the print function invocation. Only modify the template code
# to add the template variables necessary to categorize the foods. The
# first done is done for you.

template_code = '''
Healthy foods: {{ foods.fruit }}, {{ foods.vegetable }}, {{ foods.cold_dish }}
Junk foods: {{ foods.snack }}, {{ foods.drink }}, {{ foods.sandwich }}
'''

food_template = Template(template_code)
foods = {
    'fruit': 'apple',
    'vegetable': 'carrot',
    'sandwich': 'burger',
    'drink': 'mtn dew',
    'cold_dish': 'salad',
    'snack': 'doritos',
}
results = food_template.render({
    'foods': foods,
})
print(results)






print('Challenge 4 -------------')
# Challenge 4:
# Uncomment the print function invocation. Only modifying the "context"
# dictionary, can you make this print the HTML of a simple website?


template_code = '''
<h1>{{ title }}</h1>
<p>My blog posts:</p>
<h2>{{ blog_post_titles|first|title }}</h2>
<p>{{ blog_posts|first|truncate }}</p>
'''
context = {
    'title': 'Thoughts by Samwise Gamgee',
    'blog_post_titles': ['my journey in middle earth'],
    'blog_posts': ['''As "punishment" for eavesdropping on Gandalf's
    conversation with Frodo regarding the One Ring, I was made Frodo's
    first companion on his journey to Rivendell. They we were joined by
    Meriadoc Brandybuck and Peregrin Took, Frodo's cousins, and
    journeyed together to Rivendell, where the Council of Elrond took
    place and I joined the Fellowship of the Ring.'''],
}

results = Template(template_code).render(context)
print(results)



print('Challenge 5 -------------')
# Challenge 5:
# Uncomment the print function invocation. Only modify the template code
# adding filters necessary to do the thing it says.  You'll have to
# research different filters here:
# http://jinja.pocoo.org/docs/2.10/templates/#builtin-filters


template_code = '''
All noodles: {{ noodles|join(', ') }}
Alphabetical: {{ noodles|sort|join(', ') }}
Reverse alphabetical: {{ noodles|sort|reverse|join(', ') }}
First: {{ noodles|first }}
Last, with a capital letter: {{ noodles|last|title }}
First alphabetically: {{ noodles|sort|first }}
Last alphabetically: {{ noodles|sort|last }}
Number of different types of noodles: {{ noodles|length }}
'''

noodles = [
    'soba',
    'ramen',
    'lo mein',
    'spaghetti',
    'jap chae',
    'vermicelli',
    'gnocchi',
]

results = Template(template_code).render({
    'noodles': noodles,
})
print(results)





