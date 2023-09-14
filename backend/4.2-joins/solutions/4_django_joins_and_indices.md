# Challenge #2

**models.py**


        class ReadingList(models.Model):
            title = models.CharField(
                max_length=100,
                db_index=True,
            )
            category = models.CharField(
                max_length=64,
                choices=GENRES,
                db_index=True,
            )
            description = models.TextField(
                help_text='Reading list description',
                db_index=True,
            )

            creator_user = models.ForeignKey(
                User,
                on_delete=models.CASCADE,
                help_text='User who created this reading list',
                db_index=True,
            )

            views = models.PositiveIntegerField(default=0, db_index=True)


**results**

        $ bash wipe_and_show_schema.sh
        Migrations for 'core':
        apps/core/migrations/0001_initial.py
            - Create model ReadingList
            - Create model Book

        ------------------------------------------
        -- SQL                                  --
        ------------------------------------------
        BEGIN;
        --
        -- Create model ReadingList
        --
        CREATE TABLE "core_readinglist" ("id" integer NOT NULL PRIMARY KEY
        AUTOINCREMENT, "title" varchar(100) NOT NULL UNIQUE, "category" varchar(64)
        NOT NULL, "description" text NOT NULL, "views" integer unsigned NOT
        NULL CHECK ("views" >= 0), "creator_user_id" integer NOT NULL
        REFERENCES "accounts_user" ("id") DEFERRABLE INITIALLY DEFERRED);
        --
        -- Create model Book
        --
        CREATE TABLE "core_book" ("id" integer NOT NULL PRIMARY KEY
        AUTOINCREMENT, "title" varchar(30) NOT NULL, "description" text NOT
        NULL, "reading_list_id" integer NOT NULL REFERENCES "core_readinglist"
        ("id") DEFERRABLE INITIALLY DEFERRED);
        CREATE INDEX "core_readinglist_title_f2c73eb6" ON "core_readinglist" ("title");
        CREATE INDEX "core_readinglist_category_da3ca9d5" ON "core_readinglist" ("category");
        CREATE INDEX "core_readinglist_description_b03f6b51" ON "core_readinglist" ("description");
        CREATE INDEX "core_readinglist_views_ec3dea12" ON "core_readinglist" ("views");
        CREATE INDEX "core_readinglist_creator_user_id_943b899c" ON "core_readinglist" ("creator_user_id");
        CREATE INDEX "core_book_reading_list_id_42eacec7" ON "core_book" ("reading_list_id");
        COMMIT;



Comprehension questions:

1. What happens in the generated SQL when you add an index to a field?
    - It adds a new index to the CREATE INDEX lines at the end of the sql

2. Which field(s) automatically got indices, without you having to add one?
    - The `reading_list_id` field, along with the `create_user_id` field
    - In other words, the "foreign keys" all get indices automatically
    - Also, the id field also gets an index (PRIMARY KEY fields automatically
      do, and the "id" by default is the PRIMARY KEY)
3. Uses of unique?
    - Unique is useful to make certain fields globally unique.
    - For example, if you don't want two people to make a list with the same
      name, or add the same book.



# Challenge #3




        $ bash show_migration_sql.sh 
        Migrations for 'core':
        apps/core/migrations/0001_initial.py
            - Create model ReadingList
            - Create model Book
            - Create constraint unique_title_in_list on model book
        ------------------------------------------
        -- SQL                                  --
        ------------------------------------------
        BEGIN;
        --
        -- Create model ReadingList
        --
        CREATE TABLE "core_readinglist" ("id" integer NOT NULL PRIMARY KEY
        AUTOINCREMENT, "title" varchar(100) NOT NULL, "category" varchar(64)
        NOT NULL, "description" text NOT NULL, "score" integer NOT NULL,
        "views" integer unsigned NOT NULL CHECK ("views" >= 0), "created"
        datetime NOT NULL, "last_modified" datetime NOT NULL, "creator_user_id"
        integer NOT NULL REFERENCES "accounts_user" ("id") DEFERRABLE INITIALLY
        DEFERRED);
        --
        -- Create model Book
        --
        CREATE TABLE "core_book" ("id" integer NOT NULL PRIMARY KEY
        AUTOINCREMENT, "title" varchar(30) NOT NULL, "description" text NOT
        NULL, "reading_list_id" integer NOT NULL REFERENCES "core_readinglist"
        ("id") DEFERRABLE INITIALLY DEFERRED);
        --
        -- Create constraint unique_title_in_list on model book
        --
        CREATE TABLE "new__core_book" ("id" integer NOT NULL PRIMARY KEY
        AUTOINCREMENT, "title" varchar(30) NOT NULL, "description" text NOT
        NULL, "reading_list_id" integer NOT NULL REFERENCES "core_readinglist"
        ("id") DEFERRABLE INITIALLY DEFERRED, CONSTRAINT "unique_title_in_list"
        UNIQUE ("title", "reading_list_id"));
        INSERT INTO "new__core_book" ("id", "title", "description",
        "reading_list_id") SELECT "id", "title", "description",
        "reading_list_id" FROM "core_book";
        DROP TABLE "core_book";
        ALTER TABLE "new__core_book" RENAME TO "core_book";
        CREATE INDEX "core_readinglist_creator_user_id_943b899c" ON
        "core_readinglist" ("creator_user_id");
        CREATE INDEX "core_book_reading_list_id_42eacec7" ON "core_book"
        ("reading_list_id");
        COMMIT;




Comprehension questions:

What happens in the generated SQL when you add a UniqueConstraint?
    - It creates the constraint in the SQL



# Challenge #4



Here we use `__` double underscore to select "through" the relation and get
books for which their reading list matches a certain criteria. Behind the
scenes, this generates a JOIN and a subquery to perform the correct WHERE:


        >>> from apps.core.models import ReadingList, Book

        >>> # double underscore: Using JOIN to filter
        >>> qs = Book.objects.filter(reading_list__category='fiction')
        >>> print(qs)
        <QuerySet [<Book: The Lord of the Rings>, <Book: Harry Potter and the Prisoner of Azkaban>, <Book: A Game of Thrones>, <Book: The Way of Kings>, <Book: Nineteen Eighty-Four>, <Book: Ender's Game>, <Book: Starship Troopers>, <Book: Snow Crash>, <Book: Slaughterhouse Five>, <Book: Dune>, <Book: The Left Hand of Darkness>, <Book: The Martian>, <Book: Foundation>, <Book: The Time Machine>, <Book: The War of the Worlds>, <Book: I, Robot>, <Book: Hitchhiker's Guide to the Galaxy>, <Book: The Hunger Games>, <Book: Catching Fire>, <Book: Mockingjay>, '...(remaining elements truncated)...']>
        >>> print(qs.query)
        SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book" INNER JOIN "core_readinglist" ON ("core_book"."reading_list_id" = "core_readinglist"."id") WHERE "core_readinglist"."category" = fiction





Another situation with a JOIN! This one is even more powerful, since it brings
in data from both tables at once:


        >>> # select_related: Using JOIN to bring in data from multiple tables
        >>> qs = Book.objects.all().select_related('reading_list')
        >>> print(qs)
        <QuerySet [<Book: The Lord of the Rings>, <Book: Harry Potter and the Prisoner of Azkaban>, <Book: A Game of Thrones>, <Book: The Way of Kings>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>, <Book: Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City>, <Book: City of Quartz: Excavating the Future in Los Angeles>, <Book: The Empire of Necessity: Slavery, Freedom, and Deception in the New World>, <Book: The Age of Empire: 1875-1914>, <Book: Nineteen Eighty-Four>, <Book: Ender's Game>, <Book: Starship Troopers>, <Book: Snow Crash>, <Book: Slaughterhouse Five>, <Book: Dune>, <Book: The Left Hand of Darkness>, <Book: The Martian>, <Book: Foundation>, <Book: The Time Machine>, <Book: The War of the Worlds>, '...(remaining elements truncated)...']>
        >>> print(qs.query)
        SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id", "core_readinglist"."id", "core_readinglist"."title", "core_readinglist"."category", "core_readinglist"."description", "core_readinglist"."creator_user_id", "core_readinglist"."score", "core_readinglist"."views", "core_readinglist"."created", "core_readinglist"."last_modified" FROM "core_book" INNER JOIN "core_readinglist" ON ("core_book"."reading_list_id" = "core_readinglist"."id")

        >>> first_book = qs[0]
        >>> print(first_book.reading_list.title)
        Fantasy books I recently read



Finally, showing that this last JOIN wasn't necessary per se, but very
important to reduce queries:

        >>> from apps.core.models import ReadingList, Book

        >>> qs = Book.objects.all()
        >>> print(qs)
        <QuerySet [<Book: The Lord of the Rings>, <Book: Harry Potter and the Prisoner of Azkaban>, <Book: A Game of Thrones>, <Book: The Way of Kings>, <Book: The Storm Before the Storm: The Beginning of the End of the Roman Republic>, <Book: Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City>, <Book: City of Quartz: Excavating the Future in Los Angeles>, <Book: The Empire of Necessity: Slavery, Freedom, and Deception in the New World>, <Book: The Age of Empire: 1875-1914>, <Book: Nineteen Eighty-Four>, <Book: Ender's Game>, <Book: Starship Troopers>, <Book: Snow Crash>, <Book: Slaughterhouse Five>, <Book: Dune>, <Book: The Left Hand of Darkness>, <Book: The Martian>, <Book: Foundation>, <Book: The Time Machine>, <Book: The War of the Worlds>, '...(remaining elements truncated)...']>
        >>> print(qs.query)
        SELECT "core_book"."id", "core_book"."title", "core_book"."description", "core_book"."reading_list_id" FROM "core_book"

        >>> first_book = qs[0]
        >>> print(first_book.reading_list.title)
        Fantasy books I recently read

