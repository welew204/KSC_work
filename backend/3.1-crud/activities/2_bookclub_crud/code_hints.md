

Challenge 3: R in CRUD
----------------------

        all_books = ReadingList.objects.all()
        context = {
            'book_list': all_books,
        }



Challenge 4: C in CRUD
----------------------

        # 1. Copy the entire "form" if-statement structure from the "C in CRUD
        # for Books" view-function
        # 2. Change the form class to be AddReadingListForm
        # 3. Change the Create itself to look something like this:
        ReadingList.objects.create(
            name=form.cleaned_data['name'],
        )



Challenge 5: D in CRUD
----------------------


        rl = ReadingList.objects.get(id=id_number)
        rl.delete()


Challenge 6: U in CRUD
----------------------

        # 1. Copy the entire "form" if-statement structure from the "U in CRUD
        # for Books" view-function
        # 2. Change the form class to be EditReadingListForm
        # 3. Change the initial data to include 'name'
        # 4. Change the Update itself to look something like this:
        rl = ReadingList.objects.get(id=id_number)
        rl.name = ...
        rl.save()



Bonus Challenge 1: R in CRUD
-----------------------------

Make on the reading list home page a link to make the reading lists clickable
to the "details page":

        <h5>
            <a href="/reading-list/{{ rl.id }}/">
                {{ rl.name }}
                <span class="badge bg-info">{{ rl.topic }}</span>
            </a>
        </h5>



Bonus Challenge 2: C in CRUD
-----------------------------

        # Get relevant reading list from database
        reading_list = ReadingList.objects.get(id=list_id)
        rl_name = reading_list.name

        # ...

        # Create book such that it's associated with the reading list
        Book.objects.create(
            title=form.cleaned_data['title'],
            description=form.cleaned_data['description'],
            reading_list_name=rl_name,
        )



Bonus Challenge 3: D in CRUD
-----------------------------

        # Almost identical to previous D in CRUD, except need to get URL to
        # redirect to Reading List page.
        url = 'SOMETHING GOES HERE/' + list_id + '/'
        return redirect(url)



Bonus Challenge 4: U in CRUD
-----------------------------

        # Almost identical to previous U in CRUD, except need to get URL to
        # redirect to Reading List page.
        url = 'SOMETHING GOES HERE/' + list_id + '/'
        return redirect(url)

