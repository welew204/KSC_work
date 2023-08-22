print('extension')
class BookInfo:
    def __init__(self, title, author, page_count):
        self.title = title
        self.author = author
        self.page_count = page_count

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


class NovelInfo(BookInfo):
    def without_article(self):
        old_method_results = super().without_article()
        return old_method_results + ' -- by ' + self.author

    def print_if_gripping_read(self):
        if self.page_count < 350:
            print(self.title, 'is great to read')
        else:
            print(self.title, 'is borrrrring')


new_book = NovelInfo('The Adventures of Tom Sawyer', 'Mark Twain', 300)
new_book_2 = NovelInfo('A Tale of Two Cities', 'Charles Dickens', 451)

new_book_2.print_if_gripping_read()

sortable_title = new_book.without_article()
print('novel title is', sortable_title)

new_book_3 = BookInfo('The Storm Before the Storm', 'Mike Duncan', 200)
sortable_title = new_book_3.without_article()
print('nonfiction title is', sortable_title)

# Cannot use this method since it's only in the subclass
#new_book_3.print_if_gripping_read()
     

