# First, get the template files
top_template = open('top_template.html').read()
bottom_template = open('bottom_template.html').read()

# Read in index HTML code
content = open('middle_index.html').read()

# Combine template HTML code with content HTML code
index_html = top_template + content + bottom_template
open('index.html', 'w+').write(index_html)

# Rinse and repeat, but with blog HTML code
content = open('middle_blog.html').read()
blog_html = top_template + content + bottom_template
open('blog.html', 'w+').write(blog_html)

# And again, this time with art HTML code
content = open('middle_art.html').read()
art_html = top_template + content + bottom_template
open('art.html', 'w+').write(art_html)

