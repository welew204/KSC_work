from jinja2 import Template
import json

# Read in book's JSON data. Note that Python's JSON library can actually
# read directly from an open file.
wonderland_parsed = json.load(open('wonderland.json'))

# Read in and apply template
template_html = open('template.html').read()
template = Template(template_html)
html_result = template.render({
    'book_title': "alICe's adVENtures in wonderLAND",
    'author': "Lewis Carol",
    'chapters': wonderland_parsed,
})

# Write out template
open('output.html', 'w+').write(html_result)

