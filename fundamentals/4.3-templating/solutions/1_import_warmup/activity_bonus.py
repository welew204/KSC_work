print('-------------')
# Advanced Bonus Challenge:
import matplotlib.pyplot as plt

weights = []
heights = []
roster_file = open('athletics_40_roster.csv')
for row in csv.DictReader(roster_file):
    # Convert the weight string into float, then append to weights list
    weight = float(row['Weight'])
    weights.append(weight)

    # Split feet and inches, and then remove the annoying " and ' characters at
    # the end as they existed in the CSV file, finally convert string to float
    feet, inches = row['Height'].split()
    feet = feet.strip("'")
    inches = inches.strip('"')
    feet = float(feet)
    inches = float(inches)

    # Use pint to calculate the effective height of the athletes
    height = feet * ureg.feet + inches * ureg.inches

    # Append height to the heights list
    heights.append(height.magnitude)

# Finally, scatter plot the weights and heights, and show the plot
plt.scatter(weights, heights)
plt.show()

