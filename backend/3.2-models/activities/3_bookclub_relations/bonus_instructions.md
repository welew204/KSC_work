Bonus Challenge: "INNER JOIN" for faster relations
--------------------------------------------------

Background: Once you have functionality working in a web app, it might be time
to optimize. Note that this bonus challenge references SQL, which you probably
haven't learned yet, but it's still fine to try this now.

1. Navigate to the homepage in your browser, and bring up the Django Debug
Toolbar, then click on the SQL tab.

2. Notice how it says something like "3 similar queries. Duplicated 2 times."
(or possibly higher numbers) next to some of the DB queries?
    - The user data is getting fetched *individually* for each ReadingList.
    - If you had 100s of ReadingLists on the homepage, it would end up going to
      the database 100s of times, which can be slow as databases get bigger.

3. Fix this by using Django's `selected_related` feature, which will fetch
everything you need in the first "trip" to the database.
    - In SQL terminology, this is called an "INNER JOIN"
    - Hint:


        ReadingList.objects.all().order_by('-votes').select_related('creator_user')


4. Verify that the homepage is faster with the Django Debug Toolbar. This one
change should drastically reduce the number of queries.

- HINT: If the Django Debug Toolbar doesn't show for you, try 127.0.0.1:8000
  instead of localhost:8000



Bonus Challenge: One vote only
-----------------------------------------

Currently, you can vote up or down as often as you like. This is clearly
undesirable: You should only be able to vote on a ReadingList once.

This is a ManyToMany relationship: Many Users can vote on Many ReadingLists

Tips:
1. Add a ManyToMany relation field between ReadingList and Users called `users_who_voted`
2. Do makemigrations + migrate
3. Before allowing a user to vote, use this relation check if they have already
voted on this ReadingList before, and prevent them from voting again
4. After voting, add the user to the `users_voted` relation

Code hints:

        # Adding a ManyToManyField
        users_who_voted = models.ManyToManyField(
            User,
            related_name='reading_lists_voted_on',
        )

        # Checking if already associated
        logged_in_user = request.user
        user_who_voted = reading_list.users_who_voted.filter(id=logged_in_user.id)
        if user_who_voted.exists():
            print('already voted')
        else:
            print('can vote')

        # Associating a model
        reading_list.users_who_voted.add(logged_in_user)



Bonus Challenge: Security
-----------------------------------------

Right now, users can delete other user's Lists and Books just based on the ID.
Can you figure out how? Can you figure out how to prevent this so that only the
creator of a list can delete that list or edit books on that list?



Bonus Challenge: The Algorithm
-----------------------------------------

Background: In social networks like Facebook, Instagram, TikTok, or Reddit, the
concept of "trending" is based on some sort of more complicated formula. This
formula is often colloquially referred to as "The Algorithm", and is often is
considered a "trade secret".  Sometimes these algorithms are unique to each
user (Facebook, TikTok, Instagram), other times it's global to the site
(Reddit, YouTube when logged out).  These "Trending formulas" are usually based
on a two factors: "Time" and "Popularity" -- newer and popular is better.

1. Right now, "What's trending" is strictly based on votes. Write notes on a
formula you might implement to come up with your own trending algorithm for
Book Club.

2. Write in pseudocode how you might add this algorithm to the site.

More: Research various formulas in use, and relevant Python code.

