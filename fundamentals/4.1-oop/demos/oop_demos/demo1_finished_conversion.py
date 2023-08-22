print('OOP version')

class BookInfo:
    def __init__(self, title, author, page_count):
        print('title:', title)
        self.title = title
        self.author = author
        self.page_count = page_count
        
    def print_if_even(self):
        if self.page_count % 2 == 0:
            print('Its even!')
        else:
            print('Its odd!')

    def to_lowercase(self):
        lowercase_title = self.title.lower()
        return lowercase_title

    def without_article(self):
        if self.title.startswith('The '):
            return self.title[4:] + ', The'
            
        elif self.title.startswith('A '):
            return self.title[2:] + ', A'
            
        else:
            return self.title


new_book = BookInfo('The Adventures of Tom Sawyer', 'Mark Twain', 300)
new_book_2 = BookInfo('A Tale of Two Cities', 'Charles Dickens', 451)

print('Lowercase version 1:', new_book.to_lowercase())
print('Lowercase version 2:', new_book_2.to_lowercase())

new_book_title_sortable = new_book.without_article()
print('new_book_title_sortable:', new_book_title_sortable)

new_book_2.print_if_even()



