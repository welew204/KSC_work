# Wonder how we made the users? We used silly. There ya go
import json

def make_user():
    import silly
    import random
    return {
        'name': silly.name().title(),
        'position': {
            'org': silly.company().title(),
            'role': silly.title().title(),
        },
        'personal': {
            'bio': silly.sentence().capitalize(),
        },
        'contact': {
            'email': silly.email(),
            'phone': silly.phone_number(),
            'location': silly.city().capitalize(),
        },
        'account': {
            'withdrawn': random.randint(1, 100000),
            'total':  random.randint(1, 100000),
        },
    }

users = [make_user() for i in range(4)]
print(json.dumps(users, indent=4))

