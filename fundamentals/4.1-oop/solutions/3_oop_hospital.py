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

    def ask_for_bool(self, question):
        value = input(question)
        if value == 'yes':
            return True
        else:
            return False

    def ask_for_int(self, question):
        value = input(question)
        return int(value)

    def nurse_check_up(self):
        self.does_smoke = self.ask_for_bool('Does the patient smoke? ')
        self.does_drink = self.ask_for_bool('Does the patient drink? ')
        self.blood_pressure = self.ask_for_int('Patient blood-pressure? ')


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

eric = Patient('Eric', 'Idle')



print('Challenge 2 -------------')
# Challenge 2:
# Add a new method called "print_info". It should print out all the information
# of the patient. Test it out.

eric.print_info()


print('Challenge 3 -------------')
# Challenge 3:
# Add a new method called "check_in". It should set is_checked_in to be True.

eric.check_in()
eric.print_info()




print('Challenge 5 -------------')
# Challenge 5:
# Refactor the above method to use two other methods: "ask_for_int" and
# "ask_for_bool". These should more intelligently convert whatever the user
# types in into the correct data type. For example, "ask_for_bool" should look
# for "yes" or "no", and convert that to True or False.


eric.nurse_check_up()
eric.print_info()








print('Challenge 6 -------------')
# Challenge 6:
eric.doctor_diagnose()
eric.print_info()





