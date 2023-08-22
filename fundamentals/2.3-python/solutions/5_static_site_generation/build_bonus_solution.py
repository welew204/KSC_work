# Bonus solution that only has one template file that it applies templating to
# to insert the right data in the right spots
from string import Template
bonus_template_text = open('bonus_challenge_template.html').read()
template = Template(bonus_template_text)


# Use "format" feature of Python strings to insert data where needed for the
# index page
index_content = open('middle_index.html').read()
index_html = template.safe_substitute(
    title="About Me",
    index_class="active",
    content=index_content,
)
open('index.html', 'w+').write(index_html)


# Do the same for blog, this time having the page title be Blog, the blog link
# be active, and the using the blog content in the middle
blog_content = open('middle_blog.html').read()
blog_html = template.safe_substitute(
    title="Blog",
    blog_class="active",
    content=blog_content,
)
open('blog.html', 'w+').write(blog_html)


# Finally, do the same for the art page
art_content = open('middle_art.html').read()
art_html = template.safe_substitute(
    title="Art",
    art_class="active",
    content=art_content,
)
open('art.html', 'w+').write(art_html)

