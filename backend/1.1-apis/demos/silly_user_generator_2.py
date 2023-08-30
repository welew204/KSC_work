# Wonder how we made the users? We used silly. There ya go
import json

def make_user():
    import silly
    import random
    return {
        'email': silly.email(),
        'username': silly.domain(),
        'first_name': silly.name().title().split()[0],
        'last_name': silly.name().title().split()[-1],
        'date_joined': str(silly.datetime()),
        'password': silly.a_thing().replace(' ', '$'),
    }

users = [make_user() for i in range(4)]
print(json.dumps(users, indent=4))

