import requests
import datetime

api_key = '0de82b6b4ba5d843dac44bbee4d02543'

# Assemble URL based on API key and query
base_url = "http://api.openweathermap.org/data/2.5/weather"
#query = input('Enter a city?')
query = 'Oakland'
url = f'{base_url}?appid={api_key}&q={query}'

response = requests.get(url)
data = response.json()
print(data)

print('---- Weather for:', query, '----')
print('Weather:', data['weather'][0]['description'])
print('Temp:', int(data['main']['temp'] - 273), 'C')
timestamp_sunrise = data['sys']['sunrise']
time = datetime.datetime.fromtimestamp(timestamp_sunrise)
print('Sunrise:', time)
timestamp_sunset = data['sys']['sunset']
time = datetime.datetime.fromtimestamp(timestamp_sunset)
print('Sunset:', time)

