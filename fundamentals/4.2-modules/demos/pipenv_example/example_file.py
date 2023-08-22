# This won't work, since silly
# is not in the standard library,
# OR a file we created

# Instead, we have to download it
# from PyPI using pipenv
import silly

name = silly.name()
print('My name is', name)
