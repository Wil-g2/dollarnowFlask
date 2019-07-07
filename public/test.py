import requests,json

req = requests.get('https://economia.awesomeapi.com.br/USD-BRL/')
data = req.json()
print(data[0]['ask'])