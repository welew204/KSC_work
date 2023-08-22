# TODO a new function goes up here!
def print_menu(title, items=list):
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')


print_menu('Main Menu', ['All', 'Back', 'Create'])
print_menu('Settings', ['Disk', 'Eject', 'Fail'])
print_menu('Information', ['Help', 'Info', 'Join'])


def main():
    title = 'Main Menu'
    items = ['All', 'Back', 'Create']
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')

    title = 'Settings'
    items = ['Disk', 'Eject', 'Fail']
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')

    title = 'Information'
    items = ['Help', 'Info', 'Join']
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')


# main()
