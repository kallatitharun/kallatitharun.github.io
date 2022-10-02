from flask import request
import requests
import  json

def lookup():
    # print(request.args.get('address'))
    # url="https://maps.googleapis.com/maps/api/geocode/json?address="+"Milpitas"+"&key=AIzaSyAbrNJUStEQRsiD9LnXcjvctLQpNdVwjtk"
    # print(url)
    # # r=requests.get(url)
    # res=r.json()
    # # print(type(r))
    # # print(res)
    # # print(res,type(json.loads(res)))
    # return res['results'][0]['geometry']['location']
    api_key = '33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
    url = "https://api.yelp.com/v3/businesses/" + str("wZKqXKig-tvX8VSqbqSUjg")
    print(url)
    headers = {'Authorization': 'Bearer {}'.format(api_key)}

    print(headers)
    r = requests.get(url, headers=headers)
    # res=r.json()
    print(r.json())
lookup()