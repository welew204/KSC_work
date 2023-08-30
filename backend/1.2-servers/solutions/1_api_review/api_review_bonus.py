import json
data = json.load(open('oakland_newspapers.json'))
papers = data['items']

# Bonus Challenge #1:
valid_papers = [
    paper for paper in papers
    if paper['county'][0] == 'Alameda' and paper['end_year'] != 9999
]

total = sum(paper['end_year'] - paper['start_year'] for paper in valid_papers)
average = total / len(valid_papers)
print('Average lifespan of newspapers:', average)

print('----------')
# Bonus Challenge #2:
start_years = [paper['start_year'] for paper in valid_papers]
most_common_year = max(start_years, key=start_years.count)
print('Most popular year:', most_common_year)

# Bonus Challenge #3:
import statistics
life_spans = [paper['end_year'] - paper['start_year'] for paper in valid_papers]
#print('Average life-span:', statistics.mean(life_spans))
#print('Median life-span:', statistics.median(life_spans))
#print('Standard deviation life-span:', statistics.stdev(life_spans))
#print('Population standard deviation life-span:', statistics.pstdev(life_spans))
#print('Highest life-span:', max(life_spans))
#print('Shortest life-span:', min(life_spans))

def print_statistics(label, data):
    print('--------------------------------------')
    print('Average', label + ':', statistics.mean(data))
    print('Median', label + ':', statistics.median(data))
    print('Standard deviation', label + ':', statistics.stdev(data))
    print('Population std dev', label + ':', statistics.pstdev(data))
    print('Max', label + ':', max(data))
    print('Min', label + ':', min(data))

print_statistics('life-span', life_spans)
print_statistics('start year', start_years)




