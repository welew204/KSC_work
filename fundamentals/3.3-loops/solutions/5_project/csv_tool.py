# This is an example solution that reads in t

# Note: The "adding data" feature is not complete, given the example code is
# already 200 lines just for reporting data.


def parse_csv():
    # Note: Python has a built-in CSV reader and writer. For this solution we
    # WON'T use it, but in real life, it would make a bit more sense to use it.
    lines = open('sac_realestate.csv').readlines()
    column_names = lines[0]
    data_lines = lines[1:]  # Skip first line for all data lines
    print(column_names)
    data = []
    for line in data_lines:
        # Strip will remove any excess white-space (e.g. spaces, new lines)
        line = line.strip()

        # Split will transform the string into a list, separated by the comma
        columns = line.split(',')

        # "assert" is for adding quick debugging "sanity checks". A sanity
        # check is just a bit of code to ensure the data is sane (as are you
        # :p). We know all the addresses should be in CA so lets check here.
        assert columns[3] == 'CA'

        # Now convert it to a dict. This isn't necessary, depending on the
        # circumstance you may want to save memory and use a list or tuple.
        # However, in most cases we don't need to save memory like that.
        line_dict = {
            'street': columns[0],
            'city': columns[1],
            'zip': columns[2],
            'state': columns[3],
            'beds': int(columns[4]),
            'baths': int(columns[5]),
            'square_feet': float(columns[6]),
            'type': columns[7],
            'sale_date': columns[8],
            'price': float(columns[9]),
            'latitude': float(columns[10]),
            'longitude': float(columns[11]),
        }
        data.append(line_dict)
    return data


def _get_list_of_data_for_column(data, column):
    '''
    Helper function which "extracts" a single column from the data set
    '''
    data_list = []
    for row in data:
        data_list.append(row[column])
    return data_list


def report_mode(data):
    '''
    Here we are given data, and we 
    '''

    # Get the first item's keys, and use that to report to the user what the
    # different columns available are
    columns = data[0].keys()
    columns_string = ', '.join(columns)

    actions = 'median, mode, mean, max, min'

    # Loop forever, until they do "quit"
    while True:
        # Mention the list of actions and columns available
        print('Actions: ' + actions + ', quit')
        print('Columns: ', columns_string)
        print('Examples: "median price", or "max beds"')
        choice = input('? ')
        choice = choice.strip() # strip extraneous spaces

        # If they choose "quit" exit right away
        if choice == 'quit':
            return

        # Split the choice into words
        split_choice = choice.split()

        # If they did not reply with exactly 2 words (e.g. max price), then
        # repeat the loop.
        if len(split_choice) != 2:
            print('Invalid response, must specify action and column')
            continue

        # Using "unpacking", we can assign two variables to the two items in
        # this list, so we can check what action they specified along with
        # which column they wish to perform the action against
        action, column = split_choice

        # Validate that both column and action are legit
        if column not in columns:
            print('Unknown column: ', column)
            continue

        if action not in actions:
            print('Unknown action: ', action)
            continue

        print('-------------------')

        # Use helper to get a list of only the data in the given column
        data_list = _get_list_of_data_for_column(data, column)

        # Now, we have a big series of if statement that checks which action
        # was specified, and then do the proper code for each action
        if action == 'median':
            # "median" is take the middle-most item after sorting the data
            data_list.sort()
            middle_index = int(len(data_list)/2)
            median = data_list[middle_index]
            print('Median', column, 'is:', median)

        elif action == 'mode':
            # "mode" is the most popular item. We do this by first counting all
            # different data items, and then looping through the counts and
            # finding the most popular.
            counting_dict = {}

            # count all items
            for item in data_list:
                if item not in counting_dict:
                    counting_dict[item] = 1
                else:
                    counting_dict[item] += 1

            # find most popular
            max_count = 0
            max_item = None
            for item, count in counting_dict.items():
                if count > max_count:
                    max_item = item
                    max_count = count

            print('Mode of', column, 'is:')
            print('Most common item:', max_item)
            print('Which appeared:', max_count, 'times')

        elif action == 'mean':
            # Mean (aka average) is "sum" divided by "length"
            avg = sum(data_list) / len(data_list)
            print('Mean of', column, 'is:', avg)

        elif action == 'max':
            # "Max" is built into Python
            print('Max of', column, 'is:', max(data_list))

        elif action == 'min':
            # "Min" is built into Python
            print('Min of', column, 'is:', min(data_list))
        print('-------------------')

def print_formatted_dictionary(data_dictionary):
    '''
    Given a dictionary, print a nice looking version of that dictionary
    '''
    print('--------------------------------')
    for key, value in data_dictionary.items():
        label = key.capitalize().replace('_', ' ')
        print(label.rjust(12), value)
    print('--------------------------------')

def data_browse_mode(data):
    current_entry = 0
    while True:
        # Loop forever, until "quit" is specified

        # Print the "current" row
        print_formatted_dictionary(data[current_entry])
        print('%i/%i' % (current_entry, len(data)))

        # Print out instructions
        print('n[ext] - show next entry')
        print('p[revious] - show previous')
        print('100 - enter any number to jump to row')
        print('quit - Exit')
        choice = input('? ')

        # "sanitize" the input to remove spacing and capitalization
        # irregularities
        choice = choice.strip().lower()

        # Check what they chose and change current_entry to reflect

        if choice.startswith('n') and (current_entry + 1) < len(data):
            # If they select "n" and there is a next one, increment by 1
            current_entry += 1
        elif choice.startswith('p') and current_entry > 0:
            # If they select "p" and there is a previous one, decrement by 1
            current_entry -= 1
        elif choice.isnumeric():
            # If they typed in a number, just "jump" to that location
            current_entry = int(choice)
        elif choice == 'quit':
            # If they type in "quit" exit
            return
        else:
            print('?????????????')


def main():
    data = parse_csv()

    # Loop forever, until "quit" is specified
    while True:
        print('%i lines of data' % len(data))
        print('report: Get statistical report')
        print('browse: Browse through data')
        print('add: Add data')
        print('quit: Exit program')
        choice = input('? ')

        # "sanitize" the input to remove spacing and capitalization
        # irregularities
        choice = choice.strip().lower()

        # Check what they chose and kick off an alternate function in that case
        if choice == 'report':
            report_mode(data)
        elif choice == 'browse':
            data_browse_mode(data)
        elif choice == 'add':
            print('TODO: Incomplete...')
            # data_entry_mode(data)
        elif choice == 'quit':
            return  # Exit the function (and loop)
        else:
            print('?????????????')


if __name__=='__main__':
    main()


