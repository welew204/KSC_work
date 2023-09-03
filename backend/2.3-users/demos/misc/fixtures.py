from wall.models import FaceboopFanPage, FaceboopPost

users = [
    {
        "name": "Chun-Li",
        "image": "https://i.imgur.com/bYSjhZe.png",
        "email": "chunli@email.link",
        "password": "hadouken",
        "date_joined": "2000-08-24",
    },
    {
        "name": "Squidward",
        "image": "https://i.imgur.com/QUo3ZVw.png",
        "email": "squid@bikini.bottom",
        "password": "frycooknolonger",
        "date_joined": "2002-03-14",
    },
]


posts = [
    {
        'username': 'mrtentacles',
        'text': '''
            That's it mister! You just lost your brain privileges!  You're
            a man now, Spongebob, and it's time you started acting like
            one. The maniacs in the mailbox. The sky had tartar sauce.
            Spongebob is the only guy I know who can have fun with a
            jellyfish, for twelve hours. The line for the tunnel of glove
            is filling up. go out and get yourself a case of the krabbies.
            Mr. Krabs, please. I'll prove I'm a fry cook.  Hey look, a
            cardboard box washed up on the beach. Holy fish paste!
        ''',
    },
    {
        'username': 'chunli',
        'text': '''
            Veggies, proinde vos postulo esse magis sierra leone bologi garlic
            beetroot rock melon parsley soybean courgette green bean mung bean
            desert raisin bitterleaf avocado sweet pepper.
        ''',
    },
]

# clear
FaceboopFanPage.objects.all().delete()
FaceboopPost.objects.all().delete()

# and add in test data
for user in users:
    FaceboopFanPage.objects.create(**user)
for post in posts:
    FaceboopPost.objects.create(**post)
