# "Import" executes code in another file,
# and then lets us access variables and
# functions defined in that file
import anotherfile

print(anotherfile.parrot_status)
anotherfile.some_function()

# We can also import stuff like this:
from anotherfile import (
    parrot_status,
    some_function,
)
some_function()

# To access a file in another directory,
# we need to use '.' instead of '/'
import facts.lotr
print(facts.lotr.aragorns_age)
print(facts.lotr.pipeweed_strains)
print(facts.lotr.galadriel_info)

# OR...
from facts import lotr
print(lotr.aragorns_age)

# OR...
from facts.lotr import aragorns_age
print(aragorns_age)

# NOTE: Python file names MUST be all
# alphabet + underscore-only, otherwise
# they can't be imported!


# Finally, the true power of modules:
# Write functions that other code uses.
# This is a way to collaborate, as you
# can write code for your teammates to
# use, while keeping it all separate.
from facts.harry_potter import (
    wizard_currency_to_pounds,
)
pounds = wizard_currency_to_pounds(3, 10, 254)
pounds_rounded = round(pounds, 2)
print('In pounds:', pounds_rounded)

