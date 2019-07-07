from flask import Flask,request,json, render_template
import requests

app = Flask(__name__, static_folder="public")

''''@app.route('/', methods = ['GET'])
def index():
    return app.send_static_file("base.html")'''

@app.route('/')
@app.route('/dolar', methods = ['GET','POST'])
def dolar():
    req = requests.get('https://economia.awesomeapi.com.br/USD-BRL/');
    data = req.json()
    return render_template('base.html', dolar = data[0]['ask'], moeda = 'dolar')

@app.route('/euro', methods = ['GET','POST'])
def euro():
    req = requests.get('https://economia.awesomeapi.com.br/EUR-BRL/');
    data = req.json()
    return render_template('base.html', dolar = data[0]['ask'], moeda = 'euro')

if __name__ == '__main__':
   app.run(debug = True)