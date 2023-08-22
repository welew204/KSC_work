class Patient:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.is_checked_in = False
        self.does_drink = None
        self.does_smoke = None
        self.blood_pressure = None
        self.recommendation = None
        self.diagnosis = None
        self.extra_notes = None

    def print_info(self):
        print('-----PATIENT', self.first_name, self.last_name, '----')
        print('Is checked in:', self.is_checked_in)
        print('Drinks?', self.does_drink)
        print('Smokes?', self.does_smoke)
        print('Blood pressure?', self.blood_pressure)
        print('Diagnosis:', self.diagnosis)
        print('Recommendation:', self.recommendation)

    def check_in(self):
        self.is_checked_in = True

    @staticmethod
    def ask_for_bool(question):
        value = ''
        while value != 'y' and value != 'n':
            value = input(question + ' [y/n]: ')
            value = value.strip()  # remove excess whitespace
            # get the lowercase version of the first letter
            first_letter = value[0]
            value = first_letter.lower()[0]

        # Out of the while loop, value is either 'y' or 'n'
        if value == 'y':
            return True
        else:
            return False

    @staticmethod
    def ask_for_int(question):
        value = ''
        while not value.isdigit():
            value = input(question + ' [number]: ')
            value = value.strip()  # remove excess whitespace
        # Out of the while loop, value is purely digits
        return int(value)


    def nurse_check_up(self):
        self.does_smoke = self.ask_for_bool('Does the patient smoke?')
        self.does_drink = self.ask_for_bool('Does the patient drink?')
        self.blood_pressure = self.ask_for_int('Patient blood-pressure?')


    def doctor_diagnose(self):
        if not self.is_checked_in:
            print('Need to check in first.')
            return
        if not self.blood_pressure:
            print('Patient must visit nurse first')
            return

        if self.does_smoke:
            self.recommendation = 'Quitting smoking.'

        if self.blood_pressure > 180:
            self.diagnosis = 'Hypertension Crisis'
            self.recommendation = 'Immediate treatment in ER'
        elif self.blood_pressure > 140:
            self.diagnosis = 'Stage 2 Hypertension'
        elif self.blood_pressure > 130:
            self.diagnosis = 'Stage 1 Hypertension'

        self.extra_notes = input('Extra physician notes? ')

    # Bonus activity: Use pickle to save and load the given object
    def save(self, filename):
        open_file = open(filename, 'wb+')
        pickle.dump(self, open_file)

    @staticmethod
    def load(filename):
        open_file = open(filename, 'rb')
        return pickle.load(open_file)

eric = Patient('Eric', 'Idle')

print('-------------------------------------------')

eric.print_info()
eric.check_in()
eric.print_info()

print('-------------------------------------------')


eric.nurse_check_up()
eric.print_info()

print('-------------------------------------------')

eric.doctor_diagnose()
eric.print_info()


print('-------------')
# Bonus Challenge: Using "save" and "load"

import pickle
eric.save('eric_info.p')
eric_loaded = Patient.load('eric_info.p')
eric_loaded.print_info()
# Quick check that saving and loading works:
if eric.first_name == eric_loaded.first_name:
    print('Load success!!')
else:
    print('Load failed!!')

