import json
r={
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "Washington",
               "short_name" : "WA",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Washington, USA",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 49.0024442,
                  "lng" : -116.91558
               },
               "southwest" : {
                  "lat" : 45.543541,
                  "lng" : -124.8489739
               }
            },
            "location" : {
               "lat" : 47.7510741,
               "lng" : -120.7401385
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 49.0024442,
                  "lng" : -116.91558
               },
               "southwest" : {
                  "lat" : 45.543541,
                  "lng" : -124.8489739
               }
            }
         },
         "place_id" : "ChIJ-bDD5__lhVQRuvNfbGh4QpQ",
         "types" : [ "administrative_area_level_1", "political" ]
      }
   ],
   "status" : "OK"
}
# y=json.loads(r)
print(r['results'][0]['geometry']['location'])
print(r['results'][0]['geometry']['location']['lng'])
