houses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin',
]

luna_info = {
    'name': 'Luna Lovegood',
    'patronus': 'hare',
    'field': 'Magizoology',
}

def wizard_currency_to_pounds(galleons, sickles, knuts):
    # Given wizarding currency, convert to British pounds

    # 493 knuts to a sickle
    sickles = sickles + knuts / 493.0

    # 17 sickles to a galleon
    galleons = galleons + sickles / 17.0

    # Galleons are pinned at £5
    return galleons * 5.0
