# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Add code to print the "lyrics" variable from "library.py"
import library
print(library.lyrics)


print('Challenge 2 -------------')
# Invoke the greeter function from library.py. Also, write an "from import"
# style statement to import the greeter directly.
library.greeter('alice')
from library import greeter
greeter('bob')



print('Challenge 3 -------------')
# Time to make your own module.  Import mymod from within this file
# Invoked "mymod.myfunc" from within this file.
import mymod
mymod.myfunc()



print('Challenge 4 -------------')
# Uncomment the following code. Fix the typos so that it runs func1 and func2.

import anotherlib
from anotherlib import func2
anotherlib.func1()
func2()



print('Challenge 5 -------------')
# Look around in the directories next to this file. Can you find 'file1' and
# 'file2'? Add code here to import those files
from mod import file1
from mod.deeper import file2




print('-------------')

# Bonus Challenge:
# Uncomment the following code. Can you figure out why it doesn't work?
import brokenmod
brokenmod.submodule

# ANSWER: Need an __init__.py in brokenmod that imports submodule

