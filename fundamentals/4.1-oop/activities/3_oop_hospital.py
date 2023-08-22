# REMINDER: Start with print, and save and test after every change!

import datetime
# Welcome to General Hospital Oop! Now this activity involves transforming the
# code form activity 1 into the "object oriented programming" syntax.

print('checker print')
print('Challenge 1 -------------')
# Challenge 1:
# 1. See this class definition, and instantiation? Read it and understand it.
# Can you identify all the different parts?
# 2. Modify it to also support a last name, instead of the "hard-coded" last
# name of Cleese.


class Patient:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.is_checked_in = False


john = Patient('John', 'Cleese')
""" print(john) """

print('Challenge 2 -------------')
# Challenge 2:
# - Add a new method to the Patient class called "print_info". It should
# consist of a series of prints to print out all 3 properties of the patient.
# - Create a "Patient" for yourself and a celebrity (or someone sitting next to
# you).
# - Invoke your new print_info() method on your newly created patients to
# ensure the information is getting printed out correctly.

# Hint #1: Adding the method must be done above to the Patient class.
# Hint #2: Consider making the output of the print_info() method look like the
# following:
#        ----- PATIENT -----
#        First name: Jane
#        Last name: Hacker
#        Checked-in status: False


class Patient2(Patient):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

    def print_info(self):
        msg = f"""
----- PATIENT -----
First name: {self.first_name}
Last name: {self.last_name}
Checked-in status: {self.is_checked_in}
"""
        return msg, print(msg)


me = Patient2('Will', 'Belew')
me.print_info()

print('Challenge 3 -------------')
# Challenge 3:
# - Add a new method to Patient called "check_in" that changes is_checked_in to
# be True.
# - Using print_info before and after an invocation of check_in(), ensure that
# your check_in() method works.


class Patient3(Patient2):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

    def check_in(self):
        self.is_checked_in = True


Pamela = Patient3('Pamela', 'Anderson')
""" Pamela.print_info()
Pamela.check_in()
Pamela.print_info() """


print('Challenge 4 -------------')
# Challenge 4:
# Write a new method to Patient called "nurse_check_up".
# It should then ask the following questions.
#     1. Does the patient smoke?
#     2. Does the patient drink?
#     3. Patient blood-pressure?
# Hint: Use input() and storing the result in separate properties of the
# patient object.


class Patient4(Patient3):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.smoke = None
        self.drink = None
        self.blood_pressure = None

    def patient_nurse_check_up(self):
        smoke = True if input("Do you smoke?")[0].lower() == 'y' else False
        drink = True if input("Do you drink?")[0].lower() == 'y' else False
        blood_pressure = int(input("What's the patients bloodpressure?"))
        self.smoke = smoke
        self.drink = drink
        self.blood_pressure = blood_pressure

    def print_info(self):
        patient_string = super().print_info()[0] + \
            f"Blood Pressure: {self.blood_pressure}\nDrinks: {self.drink}\nSmokes: {self.smoke}"
        print(patient_string)


Leo = Patient4('Leo', 'DiCaprio')
""" Leo.print_info()
Leo.patient_nurse_check_up()
Leo.print_info() """


print('Challenge 5 -------------')
# Challenge 5:
# - Let's refactor the above method by creating "nicer" methods to ask for data
# from the user. We'll create two new methods: ask_for_bool, ask_for_int


class Patient5(Patient4):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

# ask_for_bool: This method should ask the user a question given as a string
# argument, and then use input() to ask for "yes" or "no". If the use types in
# "yes" then your method should "return True". Otherwise, your method should
# "return False".
    def ask_for_bool(self):
        print("Are you Catholic?")
        ans = input('?')
        self.catholic = True if ans[0].lower() else False
        print(self.catholic)

# ask_for_int: This method should convert the user's input into an int. This
# can be done using int(SOMETHING)   (replace "SOMETHING" with a variable name)
    def ask_for_int(self):
        print("How hungry are you? (scale 1 - 10, 10 is a LOT of hunger)")
        ans = input('?')
        self.hunger = int(ans) if ans.isdigit() else None
        print(self.hunger)

# Note: This one is challenging!


""" Liam = Patient5('Liam', 'Coach')
Liam.ask_for_bool()
Liam.ask_for_int() """

print('Challenge 6 -------------')
# Challenge 6:
# Create another method called "doctor_diagnose". It should allow a doctor to
# enter a "diagnosis" and a "recommendation" (two new properties for the
# Patient class). This diagnosis method should do the following:


class Patient6(Patient5):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

    def doctor_diagnose(self):
        print(self.blood_pressure)
        if self.is_checked_in == False:
            return print("Oops, you need to get checked in first!!")
        self.recommend = None
        self.diagnosis = None
        if self.blood_pressure < 120:
            self.recommend = 'Blood pressure looks good!'
        elif 120 <= self.blood_pressure < 130:
            self.diagnosis = "Stage 1 Hypertension"
        elif 130 <= self.blood_pressure < 180:
            self.diagnosis = "Stage 2 Hypertension"
            self.recommend('You should go to the ER! ')
        else:
            self.diagnosis = "Hypertension Crisis"
        if self.smoke:
            self.recommend += 'You should stop smoking.'
        print(self.diagnosis, self.recommend)


# 1. Check that blood-pressure is below 120. If between 120-130 it should
# diagnose "Stage 1 Hypertension", if between 130-180 "Stage 2 Hypertension",
# above 180 "Hypertension Crisis"
# 2. Recommend the patient a) visit the ER if blood pressure is above 180 the
# or b) if the patient smokes, recommend the patient stop.

# Tips:
# - Modify the print_info to also show recommendation and diagnosis
# - Make sure the patient starts with a diagnosis and recommendation of None
# when initialized, but later gets it filled in by this method.
# - It should only work on patients who have already been checked in and
# visited a nurse.

Eli = Patient6('Eli', 'Lily')
Eli.doctor_diagnose()
Eli.check_in()
Eli.patient_nurse_check_up()
Eli.doctor_diagnose()

print('-------------')
# Bonus Challenge 1:
# An important part of coding in any language is learning to solve errors
# in your code. We've written a program, called Debug Trainer, to help you
# practice this. Download it and run it three times on this file (3_oop_hospital.py)
# and see if you can figure out how to solve the bugs it creates.
#
# If you're on Linux, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/debug-trainer_1.1.0_amd64.AppImage
#
# If you're on a Mac, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/Debug.Trainer_1.1.0_x64.dmg
#
# If you're on Windows, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/Debug.Trainer_1.1.0_x64.msi


# Bonus Challenge 2:
# Spend some time improving your ask_for_bool and ask_for_int methods:
# - ask_for_bool should be "tolerant" of different answers, and accept anything
# like "y", "n", "YES  " etc
# - Both should keep on asking until the user enters a valid answer, letting
# the user know that what was typed is not valid
# - For "cleaner code", since your methods probably don't need the "self"
# parameter, research "static methods", and change them to be that

# Hint: To convert a method into a "static method", simply delete the "self"
# parameter, then add the line "@staticmethod" above the method (this @-sign
# thing is called a "decorator" and they "unlock" extra options for functions
# and methods)


# Advanced Bonus Challenge:
# - Create another (non-static) method called "save". It should take a filename
# as an argument. The Patient information should get saved to that file. This
# can be done with Python's built-in module called "pickle" (research this).
# - Make a static method called "load" that will restore a Patient object
# instance from a "pickled" file.
