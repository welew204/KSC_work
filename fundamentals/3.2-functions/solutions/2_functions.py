# REMINDER: Only do one challenge at a time! Save and test after every one.

print('Challenge 1 -------------')
# Challenge 1:
# Write the code to "invoke" the function named challenge_1

def challenge_1():
    print('Hello Functional World!')
challenge_1()


print('Challenge 2 -------------')
# Challenge 3:
# Uncomment the following code. Many of these functions and invocations have
# typos or mistakes. Fix all the mistakes and typos to get the code running.
# When running correctly, it should say a b c d on separate lines.

def func_1():
    print("a")

def func_2():
    print("b")

def func_3():
    print("c")

def func_4():
    print("d")


func_1()
func_2()
func_3()
func_4()






print('Challenge 3 -------------')
# Challenge 3:
# Uncomment the following code. Make sure it works. See how repetitive it is?
# See if you can "refactor" it to be less repetitive. This will require putting
# the repetitive bits of the code into a function, then invoking the function
# in lieu of repeating the code.

def ask_name():
    name = input('What is your name? ')
    print("Hi", name)

print("We need to ask your name 3 times.")
ask_name()
ask_name()
print("And one more time....")
ask_name()

