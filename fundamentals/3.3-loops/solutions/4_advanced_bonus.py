text = open('./4_project/wonderland.txt').read()

words = text.split()
word_counts = {}
for word in words:
    # clean up word with extraneous characters
    cleaned_word = word.strip().strip('!@#$%^&*(){};"\',.<>‘')
    cleaned_word_lower = cleaned_word.lower()

    if cleaned_word_lower in word_counts:
        word_counts[cleaned_word_lower] += 1
    else:
        word_counts[cleaned_word_lower] = 1

word_counts_as_pairs = list(word_counts.items())

# Sort by 2nd item, e.g. the number
word_counts_as_pairs.sort(key=lambda pair: pair[1])
word_counts_as_pairs.reverse()

# Only get top 100 pairs
top_100_pairs = word_counts_as_pairs[:100]

# The top 100, printing them
for word, count in top_100_pairs:
    print(word.rjust(10), count)

