# Bonus Challenge:
# Install the "figlet" application on your Linux package manager or
# Homebrew for macOS.  Write a stand-alone Python script that uses
# "time" to delay displaying a "Time's Up!" message in a large font.
# Further customize it to make it a useful commandline timer.

import time
import sys

length = len(sys.argv)
if length < 2:
    print('Error: Specify number for seconds to time.')
    sys.exit(1)

how_much_time_string = sys.argv[1]
how_much_time = int(how_much_time_string)
time.sleep(how_much_time)
try:
    subprocess.run('figlet Time is up'.split())
except:
    print("Error: Figlet is not installed? Couldn't run: figlet Time is up")
