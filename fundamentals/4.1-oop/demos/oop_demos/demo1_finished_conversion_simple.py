class BookInfo:
    def __init__(self, title):
        self.title = title

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

new_book = BookInfo('The Adventures of Tom Sawyer')
new_book_2 = BookInfo('A Tale of Two Cities')

print('Lowercase version 1:', new_book.to_lowercase())
print('Lowercase version 2:', new_book_2.to_lowercase())

new_book_title_sortable = new_book.without_article()
print('new_book_title_sortable:', new_book_title_sortable)
