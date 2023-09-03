# Check out instructions.md to start

############################################################
# Challenge 3: Adding a custom model

# Add to models.py
class Book(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

# Add to admin.py
from .models import Book
admin.site.register(Book)
############################################################


############################################################
# Challenge 4: Showing all books on homepage
from .models import Book
all_books = Book.objects.all()
context = {
    'book_list': all_books,
}
############################################################


############################################################
# Challenge 5: Getting the Add Book Form to work

##### Above the view-functions:
class AddBookForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)

##### In the view-function:
if request.method == 'POST':
    form = AddBookForm(request.POST)
    if form.is_valid():
        Book.objects.create(
            title=form.cleaned_data['title'],
            description=form.cleaned_data['description'],
        )
        return redirect('/')
else:
    form = AddBookForm()

all_books = Book.objects.all()
context = {
    'book_list': all_books,
    'form': form,
}
############################################################


############################################################
# Challenge 6: Add another field (cover URL)
cover_url = models.URLField(max_length=200, blank=True)
############################################################


############################################################
# Bonus Challenge 3
# Path for urls.py:
    path('delete-book/', views.delete_book),
# view for views.py:
def delete_book(request):
    id_number = request.POST['book_id']
    book = Book.objects.get(id=id_number)
    book.delete()
    return redirect('/')
############################################################


############################################################
# Bonus Challenge 4
import requests
title = form.cleaned_data['title']
response = requests.get(f'http://openlibrary.org/search.json?title={title}&limit=1')
data = response.json()
if data['num_found'] > 0:
    cover_id = data['docs'][0]['cover_i']
    url = f'http://covers.openlibrary.org/b/id/{cover_id}-S.jpg'
else:
    url = ''
Book.objects.create(
    title=form.cleaned_data['title'],
    description=form.cleaned_data['description'],
    cover_url=url,
)
############################################################


