from jinja2 import Template

# Bonus Challenge
template_code = open('madlib.html').read()
new_template = Template(template_code)
new_html = new_template.render(
    name=input('Your name? '),
    adjective=input('An adjective?'),
    event=input('An event in your life? '),
    celebrity1=input('Name a celebrity: '),
    celebrity2=input('Name another celebrity: '),
    noun1=input('A noun? '),
    noun2=input('And another noun? '),
    noun3=input('And a plural noun? '),
    verb1=input('A verb? '),
    verb2=input('Another verb? '),
    verb3=input('And a final verb?'),
)
open('madlib_output.html', 'w+').write(new_html)

