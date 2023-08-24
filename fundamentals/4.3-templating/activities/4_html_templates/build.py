from jinja2 import Template
import json

# Read in book's data. It's in the format of lists of lists of lists.
wonderland_parsed = json.load(open('wonderland.json'))

# Read in template to variable
template_html = open('template.html').read()
template = Template(template_html)

# Render template with context
html_result = template.render({
    'book_title': "alICe's adVENtures in wonderLAND",
    'author': "Lewis Carol",
    'chapters': wonderland_parsed,
})

# Write the resulting HTML to a new file
open('output.html', 'w+').write(html_result)

