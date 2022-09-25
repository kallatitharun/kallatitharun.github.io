from flask import Flask, request, jsonify, make_response, render_template
import requests

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)


# google maps API key AIzaSyAOrHBGg4_-fcqwZJdRDAi0ASke8xJBvaM
# ipinfo token 1bbc38aae32625
@app.route('/')
def dum():
    return render_template('index.html')


@app.route('/index', methods=["GET"])
def index():
    url = 'https://api.yelp.com/v3/businesses/search?'
    radius = int(request.args.get('Distance'))
    url += "term=" + request.args.get('Keyword') + "&" + "location=" + request.args.get(
        'Location') + "&" + "radius=" + radius + "&" + "categories=" + request.args.get('Category') + "/"
    print(url)

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
