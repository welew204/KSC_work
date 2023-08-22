
# Bonus Challenge 2:
# Look up the following less common concepts, and see if you can explain them
# in your own words.
# 1. Singleton pattern
# 2. Factory pattern
# 3. Object pool

# 1. Only one instance will ever be used of a Singleton class
#
# 2. "Factories" are methods or functions that set up objects (possibly doing
# extra work compared to a regular constructor / __init__ method)
#
# 3. Object pools are cases where a particular object should be reused, such as
# connection to a database or server. Instead of creating new ones  each time,
# we look for existing ones. It's similar in principle to a singleton, except
# for singletons, there it is limited to only 1, but for object pools it is
# usually limited to a small number such as 10.



# Advanced Bonus Challenge:
# Look up how to do multiple inheritance in Python. Can you refactor the
# EmergencyPatient into 3 total classes:
# 1. Emergency "mixin"
# 2. Patient "base class"
# 3. EmergencyPatient that derives from both Emergency and Patient.
#
# The EmergencyPatient class should have the triage method, but nothing else.
#
# Why do you think this pattern is useful?

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

    def nurse_check_up(self):
        self.does_smoke = input('Does the patient smoke? ') == 'yes'
        self.does_drink = input('Does the patient drink? ') == 'yes'
        self.blood_pressure = int(input('Patient blood-pressure? '))

    def doctor_diagnose(self):
        if not self.blood_pressure:
            print('Patient must visit nurse first')
            return

        if self.blood_pressure > 180:
            self.diagnosis = 'Hypertension Crisis'
            self.recommendation = 'Immediate treatment in ER'
        elif self.blood_pressure > 140:
            self.diagnosis = 'Stage 2 Hypertension'
        elif self.blood_pressure > 130:
            self.diagnosis = 'Stage 1 Hypertension'

        self.extra_notes = input('Extra physician notes? ')


print('Challenge 1 -------------')
# Challenge 1:
# Debugging challenge: Examine the class above. When you uncomment the
# following lines, an error occurs. Instead of saying "Patient must visit nurse 
# first", it causes a Python error.  Why is that? Can you fix it?
# HINT: This requires editing the original class.

eric = Patient('Eric', 'Idle')
eric.doctor_diagnose()



print('Challenge 2 -------------')
# Challenge 2:
# It's extension time! Here's the challenge: The General Oop Hospital has an
# Emergency Room, and they want patients processed differently. Create a new
# EmergencyPatient class that inherits from the Patient base-class.

class Emergency:
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.triage_level = None
        self.is_checked_in = True

    def print_info(self):
        print('-----!!! EMERGENCY !!!-------')
        super().print_info()
        print('Triage level: ', self.triage_level)



class EmergencyPatient(Emergency, Patient):
    def triage(self):
        answer = input('Requires life saving intervention?')
        if answer == 'yes':
            self.triage_level = 1
            return

        answer = input('Is high risk: confused, lethargic, severe distress? ')
        if answer == 'yes':
            self.triage_level = 2
            return

        answer = input('How many resources needed (none, some, or many)? ')
        if answer == 'many':
            self.triage_level = 3
        elif answer == 'one':
            self.triage_level = 4
        else:
            self.triage_level = 5



john = EmergencyPatient('John', 'Cleese')
john.print_info()
john.triage()
john.print_info()

