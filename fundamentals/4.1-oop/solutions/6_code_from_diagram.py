# NOTE: These example classes might differ slightly from the diagrams. The
# diagrams are kind of "rough outlines", the goal being to give you an idea of
# how to think structurally about classes, methods, properties and so forth.


import datetime # NOTE: this is how you can get the current date!
#############################################
##### Twitter


class User:
    def __init__(self, username, bio):
        self.username = username
        self.bio = bio
        self.following = []
        self.followers = []
        self.tweets = []

    def follow(self, user):
        self.following.append(user)
        user.followers.append(self)

    def tweet(self, message):
        print('@' + self.username, message)
        new_tweet = Tweet(message)
        self.tweets.append(new_tweet)
        for follower in self.followers:
            print(follower.username, 'was notified')


class Tweet:
    def __init__(self, text, hashtags=[]):
        self.text = text
        self.hashtags = hashtags



janeq = User('janeqhacker', 'Jane Q Hacker enjoys coding')
jessiem = User('JessieTheMessy', 'kinda a mess')
dril = User('dril', 'ANGEL of posts')
janeq.follow(jessiem)
janeq.follow(dril)
jessiem.follow(dril)
dril.tweet('1/29/18:  i do not want to think about or look at the word "Tater Tots"')
dril.tweet('as far as im concerned. "fidget spinners" is DEAD IN THE WATER')


#############################################
##### GitHub

class User:
    def __init__(self, username, bio):
        self.username = username
        self.bio = bio
        self.repos = []

    def create_repo(self, name):
        new_repo = Repo(name)
        self.repos.append(new_repo)
        return new_repo


class Repo:
    def __init__(self, name):
        self.name = name
        self.created_on = datetime.date.today()
        self.branches = []

    def branch(self, name):
        new_branch = Branch(name, self)
        self.branches.append(new_branch)
        return new_branch


class Branch:
    def __init__(self, name, repo):
        self.name = name
        self.repo = repo
        self.pull_requests = []

    def new_pull_request(self, description, user):
        new_pull_request = PullRequest(description, user, self)
        self.pull_requests.append(new_pull_request)
        return new_pull_request


class PullRequest:
    def __init__(self, description, author, branch):
        self.description = description
        self.author = author
        self.branch = branch

    def merge(self):
        # Remove self from the pull requests lists,
        # to "delete" the pull request
        self.branch.pull_requests.remove(self)

        # Remove the branch from the repo's list of
        # branches, to "delete" the branch
        self.branch.repo.branches.remove(self.branch)

        # TODO: Do actual Git merge here!
        print('Merging ', self.branch.name)


user = User('janeqhacker', 'coding up a storm')
site_repo = user.create_repo('personalsite')
python_branch = site_repo.branch('ssg-python')
pr = python_branch.new_pull_request('Fixing some Python code...', user)
pr.merge()


#############################################
##### NetFlix

class User:
    def __init__(self, name, subscription_plan):
        self.name = name
        self.subscription_plan = subscription_plan
        self.watch_list = []

class Video:
    def __init__(self, name, runtime):
        self.name = name
        self.runtime = runtime

    def watch(self, user):
        print(user.name, 'watches', self.name, 'for', self.runtime, 'minutes')
        user.watch_list.append(self)

class TelevisionSeries:
    def __init__(self, name):
        self.name = name
        self.episodes = []

class TelevisionEpisode(Video):
    def __init__(self, name, runtime, series):
        super().__init__(name, runtime)
        self.series = series
        self.series.episodes.append(self)

class Movie(Video):
    # Movie requires no more additions to the base Video class, so we can just
    # "pass" after extending it
    pass

janeq = User('janeqhacker', '4k Unlimited')
got = TelevisionSeries('Game of Thrones')
s6e9 = TelevisionEpisode('Battle of the Bastards', 60, got)
s6e9.watch(janeq)

mov = Movie('Office Space', 89)
mov.watch(janeq)


