# Another way to do this: Same solution as before, but without intermediate
# variables to be even shorter

def print_menu(title, items):
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')

def main():
    print_menu('Main Menu', ['All', 'Back', 'Create'])
    print_menu('Settings', ['Disk', 'Eject', 'Fail'])
    print_menu('Information', ['Help', 'Info', 'Join'])

main()
