def print_menu(title, items):
    print('----------------------')
    print('-', title.ljust(18), '-')
    for index, item in enumerate(items):
        print(index, item)
    print('----------------------')

def main():
    title = 'Main Menu'
    items = ['All', 'Back', 'Create']
    print_menu(title, items)

    title = 'Settings'
    items = ['Disk', 'Eject', 'Fail']
    print_menu(title, items)

    title = 'Information'
    items = ['Help', 'Info', 'Join']
    print_menu(title, items)

main()
