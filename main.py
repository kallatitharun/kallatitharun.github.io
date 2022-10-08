from flask import Flask, request, jsonify, make_response, render_template, send_from_directory
import requests
import json

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__,static_url_path='')


# google maps API key AIzaSyAOrHBGg4_-fcqwZJdRDAi0ASke8xJBvaM
# google maps API key AIzaSyAbrNJUStEQRsiD9LnXcjvctLQpNdVwjtk

# ipinfo token 1bbc38aae32625
@app.route('/')
def dum():
    return app.send_static_file("index.html")


@app.route('/lookup/', methods=["GET"])
def lookup():
    print(request.args.get('address'))
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + request.args.get(
        'address') + "&key=AIzaSyAbrNJUStEQRsiD9LnXcjvctLQpNdVwjtk"
    print(url)
    r = requests.get(url)
    res = r.json()
    return res


@app.route('/index/', methods=["GET"])
def index():
    print(request.args.get('lat'), request.args.get('l'))
    print(request.args.get('Keyword'), request.args.get('lat'),request.args.get('lng'), request.args.get('Distance'),
          request.args.get('Category'), type(request.args.get('Distance')))
    # url ="https://api.yelp.com/v3/businesses/search?"+ "term=" + str(request.args.get('Keyword'))+ "&" + "location=" + str(request.args.get('Location')) + "&" + "radius=" + request.args.get('Distance') + "&" + "categories=" + str(request.args.get('Category')) + "/"
    url = "https://api.yelp.com/v3/businesses/search?" + "term=" + str(
        request.args.get('Keyword')) + "&" + "latitude=" + request.args.get(
        'lat') + "&" + "longitude=" + request.args.get('lng') + "&" + "radius=" + request.args.get(
        'Distance') + "&" + "categories=" + str(request.args.get('Category')) + "/"

    print(url)

    api_key = '33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
    headers = {'Authorization': 'Bearer {}'.format(api_key)}
    r = requests.get(url, headers=headers)
    res = r.json()
    print(type(res))
    print(res, type(res))
    business_responses = []
    for i in range(len(res['businesses'])):
        temp = {}
        temp['idie'] = res['businesses'][i]['id']
        temp['Image'] = res['businesses'][i]['image_url']
        temp['BusinessName'] = res['businesses'][i]['name']
        temp['Rating'] = res['businesses'][i]['rating']
        temp['Distance'] = res['businesses'][i]['distance']
        business_responses.append(temp)
    print(business_responses)
    k = json.dumps(business_responses)
    print(k)
    print(type(k))
    return k


@app.route('/businesssearch/', methods=['GET'])
def businesssearch():
    api_key = '33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
    print(request.args.get('idie'))
    url = "https://api.yelp.com/v3/businesses/" + str(request.args.get('idie'))
    print(url)
    headers = {'Authorization': 'Bearer {}'.format(api_key)}
    r = requests.get(url, headers=headers)
    # res=r.json()
    print(r.json())
    return r.json()


if __name__ == '__main__':
    app.run()
