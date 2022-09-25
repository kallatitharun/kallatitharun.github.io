from flask import Flask, request, jsonify, make_response, render_template
import requests

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)


@app.route('/')
def dum():
    return render_template('index.html')


@app.route('/index', methods=["GET"])
def index():
    url = 'https://api.yelp.com/v3/businesses/search?term=food&location=New York City/'
    weather_data = []
    # for city in cities:
    api_key = '33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
    headers = {'Authorization': 'Bearer {}'.format(api_key)}
    r = requests.get(url, headers=headers)
    res = r.json()
    print("hello")
    return res


if __name__ == '__main__':
    app.run()

# if __name__ == '__main__':
#     # This is used when running locally only. When deploying to Google App
#     # Engine, a webserver process such as Gunicorn will serve the app. You
#     # can configure startup instructions by adding `entrypoint` to app.yaml.
#     app.run(host='127.0.0.1', port=8080, debug=True)
# # [END gae_python3_app]
# # [END gae_python38_app]
#
#
# from flask import Flask, render_template, request
# # from flask_sqlalchemy import SQLAlchemy
#
# app = Flask(__name__)
# # app.config['DEBUG'] = True
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///weather.db'
#
# # db = SQLAlchemy(app)
#
#
# # class City(db.Model):
# #     id = db.Column(db.Integer, primary_key=True)
# #     name = db.Column(db.String(50), nullable=False)
#

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     url = 'https://api.yelp.com/v3/businesses/search?term=food&location=New York City/'
#     weather_data = []
#
#     # for city in cities:
#     api_key='33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
#     headers = {'Authorization': 'Bearer {}'.format(api_key)}
#     url_base='https://api.yelp.com/v3/businesses/search?term=food&location=NewYorkCity/'
#     r = requests.get(url_base,headers=headers)
#         # weather = {
#         #     'city': city.name,
#         #     'temperature': r['main']['temp'],
#         #     'description': r['weather'][0]['description'],
#         #     'icon': r['weather'][0]['icon'],
#         # }
#         #
#         # weather_data.append(weather)
#     print(r.json())
#     # return render_template('weather.html', weather_data=weather_data)
