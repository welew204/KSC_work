print('Challenge 1 -------------')
print('Welcome to week 3!')




print('Challenge 2 -------------')
home_team = 'Golden State Warriors'
rival_team = 'Cleveland Cavaliers'
home_score = 246
rival_score = 12



print('Challenge 3 -------------')
print("The most anticipated game today: ", home_team, "vs", rival_team)
print(home_team, "won against", rival_team)
print(home_team, "managed to score", home_score, "points")
print("The pathetic", rival_team, "only scored", rival_score, "points")








print('Challenge 4 -------------')
story = (
    "The most anticipated game today: " + home_team + " vs " + rival_team + "\n" +
    home_team + " won against " + rival_team + "\n" +
    home_team + " managed to score " + str(home_score) + " points.\n" +
    "The pathetic " + rival_team + " only scored " + str(rival_score) + " points\n"
)
open('sports_story.txt', 'w+').write(story)



######################
# Advanced Bonus Challenge:
text = open('sports_story.txt').read()
html_text = '<p>' + text.replace('\n', '</p>\n<p>') + '</p>'
open('sports_story.html', 'w+').write(html_text)

# Instructions found after Googling at:
# https://stackoverflow.com/questions/22004498/webbrowser-open-in-python
import webbrowser, os
webbrowser.open('file://' + os.path.realpath('sports_story.html'))


