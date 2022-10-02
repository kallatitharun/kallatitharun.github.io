from flask import  request
import requests
import json
def index():
    # print(request.args.get('Keyword'),request.args.get('Location'),request.args.get('Distance'),request.args.get('Category'),type(request.args.get('Distance')))
    url ="https://api.yelp.com/v3/businesses/search?"+ "term=" + "Repairs"+ "&" + "location=" + "Milpitas" + "&" + "radius=" + '40000' + "&" + "categories=" + 'Motorcycle Repairs' + "/"
    print(url)

    weather_data = []
    # for city in cities:
    api_key = '33WBQVJnWSwjw0ZjehahyTJrMNYXI_48T9m4ghBkI1FCl-XEN5LeDKaSIXlGkWpwPKJCcCeZvPrauUgjIwVJlwaT2CCZ1XF2an6I8LoP4WQIniTeGK7BFsxM0vwsY3Yx'
    headers = {'Authorization': 'Bearer {}'.format(api_key)}
    r = requests.get(url, headers=headers)
    res = r.json()
    print(type(res))
    print(res,type(res))
    business_responses=[]
    for i in range(len(res['businesses'])):
        temp={}
        temp['id']=res['businesses'][i]['id']
        temp['Image']=res['businesses'][i]['image_url']
        temp['Business Name']=res['businesses'][i]['name']
        temp['Rating']=res['businesses'][i]['rating']
        temp['Distance(miles)']=res['businesses'][i]['distance']
        business_responses.append(temp)
    print(business_responses)
    k=json.dumps(business_responses)
    print(k)
    print(type(k))
    return k
index()