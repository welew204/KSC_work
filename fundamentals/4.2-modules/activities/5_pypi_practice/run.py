# For this activity, we are going to try a "sampling" of different PyPI
# packages available.

# Challenge #1
# 1. Use pipenv to create new environment in this directory.
# 2. Enter that environment.
# USED CONDA INSTEAD


# Challenge #2
# https://github.com/Robpol86/terminaltables
# 1. Use pipenv to install terminaltables
# 2. Read the online documentation to get the example terminal table working
from docx import Document
from terminaltables import AsciiTable
data = [["Col 1", "Col 2", "Col 3", "Col 4"], [
    1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
table = AsciiTable(data)
print(table.table)

# Challenge #3
# https://pypi.org/project/python-docx/
# 1. Use pipenv to install python-docx
# 2. Read the online documentation to get reading and writing to the
# example.docx working
document = Document('5_pypi_practice/example.docx')
print(document)
document.add_heading('Heya!!', 0)
document.save('5_pypi_practice/example2.docx')
