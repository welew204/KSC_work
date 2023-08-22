print('Hello world!')


def title_to_lowercase(book_title):
    # Convert to lower case, then return
    lowercase_title = book_title.lower()
    return lowercase_title

def title_without_article(book_title):
    if book_title.startswith('The '):
        # Skip the first 4 characters, add in 'The'
        return book_title[4:] + ', The'
        
    elif book_title.startswith('A '):
        # Skip the first 2 characters, add in 'A'
        return book_title[2:] + ', A'
        
    else:
        return book_title


book_title = 'The Adventures of Tom Sawyer'


lower_version = title_to_lowercase(book_title)
print('Lower case title:', lower_version)

sorting_title = title_without_article(book_title)
print('Title used for sorting:', sorting_title)

