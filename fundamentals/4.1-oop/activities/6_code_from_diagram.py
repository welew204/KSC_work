# Challenge #1: Discussion
import datetime
#
# Can you explain in your own words how the Employee and Position class code
# below corresponds to the diagram in "solution_diagrams"?


class Employee:
    def __init__(self, name, boss):
        self.name = name
        self.boss = boss
        self.position = None

    def print_info(self):
        print('---- Employee ----')
        print('Name: ', self.name)

        if self.boss:
            print('Boss: ', self.boss.name)
        else:
            print('Boss: None (Yay!)')

        if self.position:
            print('Position: ', self.position.name)
        else:
            print('Position: None (What do I even do here?)')


class Position:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        self.is_filled = False

    def fill_with_employee(self, employee):
        self.is_filled = True
        employee.position = self


bossman = Employee('Bill Lumbergh', None)
devops = Position('DevOps Engineer', 160000)
frontend = Position('Web Developer', 125000)

joanna = Employee('Joanna', bossman)
peter = Employee('Peter', bossman)

devops.fill_with_employee(joanna)
frontend.fill_with_employee(peter)

joanna.print_info()
peter.print_info()


# Challenge #2: Implementation
# Now, write code to correspond to each of the other diagrams you find in
# "solution_diagrams" in real code.

# - The way we have the diagrams could have a few interpretations, so there
#   isn't "one true answer" to diagram them.
# - Don't worry about functionality of methods or the classes. Focus on
#   figuring out which properties and which methods you should write.
# - Feel free to "stub" out the methods (leave them unfinished) by just
#   including the keyword "pass" as a placeholder in lieu of real code.

# GitHub!!
class User():
    def __init__(self) -> None:
        self.repos = [*Repo]
        pass

    def add_repo(self):
        date = datetime.datetime.today()
        new_repo = Repo(self, date)
        self.repos.append(new_repo)


class Repo():
    def __init__(self, owner, date, name) -> None:
        self.name = name
        self.init_date = date
        self.owner = owner
        self.code_base = {}
        pass

    def update_repo(commit):
        self.code_base[commit.tag]


class Commit():
    def __init__(self, repo, branch, changes) -> None:
        self.date = datetime.datetime.now()
        self.repo[branch].update_branch(changes)
        pass


class Pull_Request():
    def __init__(self, repo, branch) -> None:
        self.pull_approved = False
        pass

    def approve_pull(self):
        self.pull_approved = True
        pass


class Branch():
    def __init__(self, repo) -> None:
        self.repo = repo
        pass

    def update_branch(changes):
        # write to update code in this branch
        pass

# woof, went deep on Github, not doing Netflix :)
# strikes me that there are so many ways of doing this, even within a Python pattern
