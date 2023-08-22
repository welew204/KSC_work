Refactoring into functions
-------------------------------------

"Refactoring" is rewriting code, while keeping the behavior the same.

Refactoring code into functions is one of the most common types of activities
you'll do when coding. Here are a few reasons why:

- **It makes your code neater**
    - Function definitions act a bit like "labels", and improve readability
- **It allows for code re-use**
    - A function is defined once, but can be invoked many times
- **Smaller functions are easier to debug**
    - Because of "variable scoping" rules (functions cannot reference each
      other's variables), it's much easier to analyze and debug code broken
      down into smaller functions

Any lines of code code can be refactored into a function!



Functions, arguments, & return values
-------------------------------------

- Variables defined in functions are "trapped" there, use arguments/parameters
  to go into other functions, and use "return" to leave functions
- Almost all your variables should be defined within functions (this is good
  Python coding standards)
- Any part of your code can be broken off and placed into a function, while
  keeping behavior identical



Refactoring
-------------------------------------

To refactor any part of your code into a function, here are the steps:

1. Think about the values (e.g. variables) that function needs as INPUT
    * This becomes the parameters / arguments
2. Think about the values the surrounding code needs as OUTPUT
    * This becomes the return value



Input: Values entering a function (arguments)
-------------------------------------------------

Any number of values can "enter" a function via arguments during invocation:

        def my_func(private_a, private_b):
            print(private_a + private_b)

        def my_other_func():
            private_a = 10
            private_b = 20
            my_func(private_a, private_b)

Here, the variables `private_a` and `private_b`, while typically private to
`my_other_func`, can "enter" the function called `my_func` as arguments during the invocation

Note: Technically, it's not the variables are entering the function, but its
the values of the variables (i.e. the contents of the variables), being
assigned to a parameter that happens to have the same name.




Output: Values leaving a function (return)
-------------------------------------------------

Any number of values can "leave" a function via a comma-separated returns:

        def my_func():
            private_a = 10
            private_b = 20
            return private_a, private_b

        def my_other_func():
            private_a, private_b = my_func()
            print(private_a + private_b)

Note: Technically, it's not multiple returns, but returning a single list-like
container type (tuple), that's then "unpacked" at assignment (list assignment).




Full example
-------------------------------------

    def foo(b):
        print('- Starting foo')
        print(b)
        a = 3
        print('- Done with foo')
        return a


    def main():
        print('- Starting main')
        b = 10
        a = foo(b)
        print(a)
        print('- Done with main')

    main()

The result is:


        - Starting main
        - Starting foo
        10
        - Done with foo
        3
        - Done with main


--------------

The idea here is that you can "refactor" any code by thinking about inputs and
outputs. This is an extremely useful skill to have when coding!
