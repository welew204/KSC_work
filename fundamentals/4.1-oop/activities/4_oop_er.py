# REMINDER: Start with print, and save and test after every change!

# Challenge 0: For this activity, we start with a Patient class pre-created.
# Look over the code. It's okay not to understand every single line, but try to
# understand at least broadly what each method does.
print('Testey biatch!')


class Patient:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.is_checked_in = False
        self.does_drink = None
        self.does_smoke = None
        self.recommendation = None
        self.diagnosis = None
        self.extra_notes = None
        self.blood_pressure = None

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
        smoke_string = input('Does the patient smoke? ')
        drink_string = input('Does the patient drink? ')
        blood_pressure_string = input('Patient blood-pressure? ')
        if smoke_string == 'yes':
            self.does_smoke = True
        else:
            self.does_smoke = False
        if drink_string == 'yes':
            self.does_drink = True
        else:
            self.does_drink = False
        self.blood_pressure = int(blood_pressure_string)

    def doctor_diagnose(self):
        if self.is_checked_in == False:
            return print("oops you need to check-in first!")
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
# HINT: This requires adding another line of code to the __init__ in the
# original class, to make sure that a certain property gets a default value.

eric = Patient('Eric', 'Idle')
# eric.doctor_diagnose()


print('Challenge 2 -------------')
# Challenge 2:
# Time to get practice with the concept of extension and "subclasses"!
# Here's the challenge: The General Oop Hospital has an Emergency Room, and
# they want patients there processed differently.
# 1. Create a new class called: EmergencyPatient
# 2. EmergencyPatient should inherit from Patient


class EmergencyPatient(Patient):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

    def triage(self):
        self.triage_level = None
        ans1 = input("Requires life saving intervention?  ")
        if ans1[0].lower() == 'y':
            self.triage_level = 1
            return
        ans2 = input("Is high risk: confused, lethargic, severe distress?  ")
        if ans2[0].lower() == 'y':
            self.triage_level = 2
            return
        ans3 = input("How many resources needed ('none', 'some', or 'many'): ")
        while True:
            if ans3 == 'none':
                self.triage_level = 5
                return
            elif ans3 == 'some':
                self.triage_level = 4
                return
            elif ans3 == 'many':
                self.triage_level = 3
                return
            ans3 = input(
                "Invalid, try again....\n  How many resources needed ('none', 'some', or 'many'): ")


print('Challenge 3 -------------')
# Challenge 3:
# Note: This one is tricky!
# - Create a new method within the EmergencyPatient class called "triage"
# - This method should ask the user a series of questions
# - Using a series of if statements (and possibly "else", "return" or "elif"),
# and check if those are equal to "yes" to set an appropriate "triage_level"

# In Pseudocode, you should do have the triage function do the following:
# - Requires life saving intervention?
#       - yes means triage_level = 1, and triage ends
# - Is high risk: confused, lethargic, severe distress?
#       - yes means triage_level = 2, and triage ends
# - How many resources needed (none, some, or many):
#       - "none" means triage_level = 5, and triage ends
#       - "one" means triage_level = 4, and triage ends
#       - "many" means triage_level = 3, and triage ends


print('Challenge 4 -------------')
# Challenge 4:
# So far so good, but the print_info() method of EmergencyPatient isn't showing
# the new triage_level property. Override print_info() so that it prints out
# triage_level.

# Hint: Use super().print_info() at the top of your method to re-use the base
# class's print_info() method, so you don't have to duplicate anything.


class EmergencyPatient2(EmergencyPatient):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)

    def print_info(self):
        super().print_info()
        print("Triage-Level:", self.triage_level)


Val = EmergencyPatient2('Val', 'Kilmer')
Val.triage()
Val.print_info()

print('Challenge 5 -------------')
# Challenge 5:
# - The hospital needs all emergency patients to start with is_checked_in set
# to True by default, since ER patients are automatically checked-in.
# - Can you override __init__ method in the EmergencyPatient class that makes
# is_checked_in start as True for EmergencyPatients?
# Hint: Use super().__init__(first_name, last_name)


class EmergencyPatient3(EmergencyPatient2):
    def __init__(self, first_name, last_name):
        super().__init__(first_name, last_name)
        self.is_checked_in = True


Val = EmergencyPatient3('Val', 'Kilmer')
print(Val.is_checked_in)

print('-------------')
# Bonus Challenge 1:
# An important part of coding in any language is learning to solve errors
# in your code. We've written a program, called Debug Trainer, to help you
# practice this. Download it and run it three times on this file (4_oop_er.py)
# and see if you can figure out how to solve the bugs it creates.
#
# If you're on Linux, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/debug-trainer_1.1.0_amd64.AppImage
#
# If you're on a Mac, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/Debug.Trainer_1.1.0_x64.dmg
#
# If you're on Windows, download it at this link: https://github.com/kickstartcoding/debug_trainer_app/releases/download/debug-trainer-v1.1.0/Debug.Trainer_1.1.0_x64.msi


# Bonus Challenge 2:
# Look up the following less common concepts, and see if you can explain them
# in your own words.
# FROM CHATGPT:::::::
# 1. Singleton pattern
"""Sure! Imagine you have a magical cookie jar. This cookie jar can only have one cookie in it at a time. No matter how many times you open it, there's only ever one cookie inside.

The Singleton programming pattern works a bit like that magical cookie jar. It's a way of making sure that there's only one instance (or object) of a particular class in your computer program. Just like the cookie jar always has one cookie, the Singleton pattern ensures you have one and only one instance of a specific thing.

This can be really useful in programming because sometimes you want to make sure there's only one of something. Maybe you're keeping track of settings for your game, or you have a special piece of equipment that should never have duplicates. The Singleton pattern helps keep things organized by making sure you're always working with the same instance, just like the magical cookie jar always has only one cookie to give you."""
# 2. Factory pattern
"""Sure thing! Imagine you're a toy maker and you create different types of toys like cars, dolls, and robots. Each toy has its own special way of being made, but you want to make it easy to create new toys without getting confused.

So, you decide to create a magical toy factory. This factory knows how to make all the different types of toys. When you want a new toy, you just tell the factory what kind of toy you want, and it creates that toy for you. You don't need to worry about how each toy is made because the factory takes care of all the details.

In programming, the Factory pattern is a bit like that magical toy factory. It's a way of organizing your code so that you can easily create different objects without knowing all the nitty-gritty details of how each object is constructed. You just tell the factory what kind of object you want, and it creates it for you. This makes it simpler to add new objects to your program without messing up everything else. Just like the magical toy factory keeps your toy-making organized, the Factory pattern keeps your code organized when you want to create different types of objects."""
# 3. Object pool
"""Sure thing! Imagine you're in a video game where you're controlling a team of superheroes. Each superhero has special powers and abilities. Now, you know that creating a superhero takes a lot of time and resources. So, you decide to set up a superhero base where you keep a bunch of superheroes ready to go.

This superhero base is like an "object pool." It's a special place where you store pre-made superheroes. When you need a superhero, you don't have to create a new one from scratch. You just borrow one from the superhero base. Once you're done using the superhero, you put them back in the base for someone else to use.

In programming, the Object Pool pattern is a bit like that superhero base. It's a way of reusing objects instead of creating new ones all the time. Just like you don't need to create new superheroes every time you need one, the Object Pool pattern lets you reuse objects, like database connections or other resources, to make your program run faster and save resources. It's like having a team of ready-to-go superheroes right at your fingertips!
"""
# 4. Mixin
"""Of course! Imagine you have different LEGO sets, each with its own cool pieces. Instead of building a new LEGO set from scratch, you can mix in pieces from different sets to create something unique. The Mixin pattern in programming is like that – it lets you take special parts from different "sets" (classes) and combine them to build a new thing without starting from scratch."""

# Advanced Bonus Challenge:
# Look up how to do multiple inheritance in Python. Refactor the
# EmergencyPatient into 3 total classes:
# 1. Emergency "mixin"
# 2. Patient "base class"
# 3. EmergencyPatient that derives from both Emergency and Patient.
#
# The EmergencyPatient class should have the triage method, but nothing else.
#
# Why do you think this pattern is useful?
