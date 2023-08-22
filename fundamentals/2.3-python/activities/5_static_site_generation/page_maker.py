temp_top = open('templates/top.html').read()
temp_bottom = open('templates/bottom.html').read()

about_content = open('content/about.html').read()

new_html = temp_top+about_content+temp_bottom
new_page_title = 'fun_text_page'
open(f'{new_page_title}.html', 'x+').write(new_html)
