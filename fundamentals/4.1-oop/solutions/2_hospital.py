# REMINDER: Only do one challenge at a time! Save and test after every one.


# For this challenge, we are going to build up a set of functions to create
# code for a semi-realistic situation: We will be building helper functions to
# manage data about a patient at a hospital. You can imagine the final software
# being useful for nurses and doctors to keep track of information on patients.

# The information about patients will be in a dictionary that is passed around
# via parameters to and from functions.

print('Challenge 1 -------------')
# Challenge 1:
# Uncomment and examine the following code. See if you can explain what every
# line is doing.

def patient_initialize(patient, first, last):
    patient['first_name'] = first
    patient['last_name'] = last
    patient['is_checked_in'] = False

patient = {}
# patient_initialize(patient)
print(patient)

print('Challenge 2 -------------')
# Challenge 2:
# Rewrite patient_initialize so that it has 2 more arguments: first_name, and
# last_name. Write 2 more invocations of the function to create a patient for
# yourself and the student sitting next to you. Use print statements to confirm
# that your function is working correctly.

eric = {}
patient_initialize(eric, 'Eric', 'Idle')
print('Eric', eric)
terry = {}
patient_initialize(terry, 'Terry', 'Gilliam')
print('Terry', terry)


print('Challenge 3 -------------')
# Challenge 3:
# Write a new function called "patient_check_in". This function should take a
# patient dictionary as an argument. and then modify that argument to make
# "is_checked_in" set to be True.
# Again, use print to verify it's working.

def patient_check_in(patient):
    patient['is_checked_in'] = True

patient_check_in(eric)
print('Eric', eric)
patient_check_in(terry)
print('Terry', terry)


print('Challenge 4 -------------')
# Challenge 4:
# Write a new function called "patient_nurse_check_up". It should take a
# patient dictionary as an argument. It should then ask the following
# questions. It can be by using input() and storing the result in separate
# variables.
#     1. Does the patient smoke?
#     2. Does the patient drink?
#     3. Patient blood-pressure?
# After each question, it should store that information into the patient
# dictionary.
# Again, use print to verify it's working.

def patient_nurse_check_up(patient):
    patient['does_smoke'] = input('Does the patient smoke? ')
    patient['does_drink'] = input('Does the patient drink? ')
    patient['blood_pressure'] = int(input('Patient blood-pressure? '))

#patient_nurse_check_up(eric)
#print('Eric', eric)
#patient_nurse_check_up(terry)
#print('Terry', terry)




print('Challenge 5 -------------')
# Challenge 5:
# Time to bring it all together. Write a new function called "patient_visit".
# Using inputs, it should ask the name of the patient, then initialize the
# patient with that information. It should then use all of the above functions
# to "process" the patient.
# Hint: Feel free to comment out the previous invocations of the above function
# Add a prints as needed to report back on the process.


def patient_visit(patient):
    first_name = input('First name? ')
    last_name = input('Last name? ')
    patient_initialize(patient, first_name, last_name)
    patient_check_in(patient)
    patient_nurse_check_up(patient)

patient = {}
patient_visit(patient)  # Disabled due to bonus challenge 1

print('-------------')
# Bonus Challenge 1:
# Create another function called "patient_doctor_diagnose". It should only
# accept patients who have already been checked in and visited a nurse. It
# should allow a doctor to enter a "diagnosis".

def patient_doctor_diagnose(patient):
    if not patient['is_checked_in']:
        print('Need to check in first.')
        return
    if 'blood_pressure' not in patient:
        print('Patient must visit nurse first')
        return

    patient['recommendation'] = ''
    patient['diagnosis'] = ''
    if patient['does_smoke'] == 'yes':
        patient['recommendation'] = 'Quitting smoking.'

    if patient['blood_pressure'] > 180:
        patient['diagnosis'] = 'Hypertension Crisis'
        patient['recommendation'] = 'Immediate treatment in ER'
    elif patient['blood_pressure'] > 140:
        patient['diagnosis'] = 'Stage 2 Hypertension'
    elif patient['blood_pressure'] > 130:
        patient['diagnosis'] = 'Stage 1 Hypertension'

    extra_notes = input('Extra physician notes? ')
    patient['extra_notes'] = extra_notes
    print('----- RESULTS -----')
    print(patient)

patient_doctor_diagnose(patient)

print('-------------')
# Bonus Challenge 2:
# Where does our data go? At the end of every check up, we should store it in a
# file. Maybe use JSON, or CSV?

import csv
def store_to_file(patient):
    # Get read to save patient into given CSV file
    opened_file = open('patient.csv', 'w+')
    csv_writer = csv.writer(opened_file)

    # Use this technique with the "zip" function to extract the keys and values
    # from the dictionary. This ensures they have the same order (as opposed to
    # using keys and values independently)
    keys, values = zip(*patient.items())

    # Write the headers
    csv_writer.writerow(keys)
    # And write the values
    csv_writer.writerow(values)
store_to_file(patient)


