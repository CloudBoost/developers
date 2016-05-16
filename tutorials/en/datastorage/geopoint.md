#####In this section

In this section you'll learn about how to add GeoPoints to [CloudObjects]( https://docs.cloudboost.io/#CloudObject) in CloudBoost. You will learn more about [CB.GeoPoint]( https://docs.cloudboost.io/#CloudGeoPoint) queries like Near, Geo Within and more.
#Saving Geopoint

Saving a Geo-point inside of a [CloudObject]( https://docs.cloudboost.io/#CloudObject) is simple.  You create a new Geo-point object, set the longitude and latitude and set that geo-point object to the CloudObject and save the CloudObject.

==JavaScript==
<span class="js-lines" data-query="saving">
```
var location = new CB.CloudGeoPoint(80.3,17.7);
var obj = new CB.CloudObject('Student');
obj.set('location',location);
obj.save({
    success : function(obj){
        //object saved.
    }, error : function(error){
        //error
    }});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="saving">
```
var location = new CB.CloudGeoPoint(80.3,17.7);
var obj = new CB.CloudObject('Student');
obj.set('location',location);
obj.save({
    success : function(obj){
        //object saved.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="saving">
```
CloudGeoPoint location = new CloudGeoPoint(80.3,17.7);
CloudObject obj = new CloudObject("Student");
obj.set("location",location);
obj.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException e)throws CloudException {
		if(e != null)
			//error							
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="saving">
```
var location = new CB.CloudGeoPoint(80.3,17.7);
var obj = new CB.CloudObject("Student");
obj.Set("location", location);
await obj.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="saving">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
        "_type": "custom",
        "expires": null,
        "location": {
            "_type": "point",
            "longitude": 17.7,
            "latitude": 80.3,
            "coordinates": [17.7,
            80.3],
            "_isModified": true
        },
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "location"],
        "_tableName": "data",
        "ACL": {
            "write": {
                "allow": {
                    "role": [],
                    "user": ["all"]
                },
                "deny": {
                    "role": [],
                    "user": []
                }
            },
            "read": {
                "allow": {
                    "role": [],
                    "user": ["all"]
                },
                "deny": {
                    "role": [],
                    "user": []
                }
            }
        },
        "_isModified": true
    }
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
// throws error if latitude and longitude are not valid values
let point = try! CloudGeoPoint(latitude: 17.7, longitude: 18.9)
let locationTest = CloudObject(tableName: "LocationTest")
locationTest.set("location", value: point)
locationTest.save({ response in
    response.log()
})
```
</span>
#Calculating Distance

###In Kilometres

To calculate the distance in KM's

==JavaScript==
<span class="js-lines" data-query="calc-kilo">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInKMs(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-kilo">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInKMs(loc2);
```
</span>

==Java==
<span class="java-lines" data-query="calc-kilo">
```
CloudGeoPoint loc1 = new CloudGeoPoint(80.3,17.7);
CloudGeoPoint loc2 = new CloudGeoPoint(70.3,10.7);
Double distance = loc1.distanceInKMs(loc2);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="calc-kilo">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
double distance = loc1.DistanceInKMs(loc2);
```
</span>

==cURL==
<span class="curl-lines" data-query="calc-kilo">
```
//
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
let point = try! CloudGeoPoint(latitude: 17.7, longitude: 18.9)
let point2 = try! CloudGeoPoint(latitude: 17.7, longitude: 18.3)
point.distanceInKMs(point2)
```
</span>
###In Miles

To calculate the distance in Miles's

==JavaScript==
<span class="js-lines" data-query="calc-miles">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInMiles(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-miles">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInMiles(loc2);
```
</span>

==Java==
<span class="java-lines" data-query="calc-miles">
```
CloudGeoPoint loc1 = new CloudGeoPoint(80.3,17.7);
CloudGeoPoint loc2 = new CloudGeoPoint(70.3,10.7);
Double distance = loc1.distanceInMiles(loc2);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="calc-miles">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
double distance = loc1.DistanceInMiles(loc2);
```
</span>

==cURL==
<span class="curl-lines" data-query="calc-miles">
```
//
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
let point = try! CloudGeoPoint(latitude: 17.7, longitude: 18.9)
let point2 = try! CloudGeoPoint(latitude: 17.7, longitude: 18.3)
point.distanceInMiles(point2)
```
</span>
###In Radians

To calculate the distance in Radians

==JavaScript==
<span class="js-lines" data-query="calc-radians">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInRadians(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-radians">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
var distance = loc1.distanceInRadians(loc2);
```
</span>

==Java==
<span class="java-lines" data-query="calc-radians">
```
CloudGeoPoint loc1 = new CloudGeoPoint(80.3,17.7);
CloudGeoPoint loc2 = new CloudGeoPoint(70.3,10.7);
Double distance = loc1.distanceInRadians(loc2);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="calc-radians">
```
var loc1 = new CB.CloudGeoPoint(80.3,17.7);
var loc2 = new CB.CloudGeoPoint(70.3,10.7);
double distance = loc1.DistanceInRadians(loc2);
```
</span>

==cURL==
<span class="curl-lines" data-query="calc-radians">
```
//
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
let point = try! CloudGeoPoint(latitude: 17.7, longitude: 18.9)
let point2 = try! CloudGeoPoint(latitude: 17.7, longitude: 18.3)
point.distanceInRadius(point2)
```
</span>

#Queries on Geo-points

###Near

Queries for objects which are within range given by the query. It gives result in the order of nearest to farthest. You basically pass in the <span class="tut-snippet">ColumnName</span> as the first parameter, second parameter takes in a <span class="tut-snippet">CB.CloudGeoPoint</span>, and third takes in the radius in meters.

==JavaScript==
<span class="js-lines" data-query="query-near">
```
var loc = new CB.CloudGeoPoint(80.3,17.7);
var query = new CB.CloudQuery('Custom');
//third parameter is the radius to check in meters.
query.near("location", loc, 100000);
query.find({
    success : function(list){
        //list is an array of CloudObjects.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query-near">
```
var loc = new CB.CloudGeoPoint(80.3,17.7);
var query = new CB.CloudQuery('Custom');
//third parameter is the radius to check in meters.
query.near("location", loc, 100000);
query.find({
    success : function(list){
        //list is an array of CloudObjects.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="query-near">
```
CloudGeoPoint loc = new CloudGeoPoint(80.3,17.7);
CloudQuery query = new CloudQuery("Custom");
//third parameter is the radius to check in meters.
query.near("location", loc, 100000,50000);
query.find(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException e)throws CloudException {
		if(e != null)
		//						
		if(x!=null)
		//x is a list of CloudObjects							
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="query-near">
```
var loc = new CB.CloudGeoPoint(80.3,17.7);
var query = new CB.CloudQuery("Custom");
//third parameter is the radius to check in meters.
query.Near("location", loc, 100000);
List<CB.CloudObject> list = await query.Find();
```
</span>

==cURL==
<span class="curl-lines" data-query="query-near">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "limit": 10,
    "sort": {        
    },
    "select": {        
    },
    "query": {
        "$includeList": [],
        "$include": [],
        "location": "{ '$geometry': {coordinates:[17.7,80.3] , type:'Point' }, '$maxDistance': 100000.0, '$minDistance': 50000.0}"
    },
    "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
let query = CloudQuery(tableName: "LocationTest")
let point = try! CloudGeoPoint(latitude: 17.7, longitude: 18.3)
query.near("location", geoPoint: point, maxDistance: 400000, minDistance: 0)
try! query.find({ response in
    response.log()
})
```
</span>

###Geo Within

Gets all the objects if the point specified by column name lie inside of the specified set of points given.

Geo Within at least requires 3 points to be passed to the query.

==JavaScript==
<span class="js-lines" data-query="query-geo">
```
var loc1 = new CB.CloudGeoPoint(78.9,18.4);
var loc2 = new CB.CloudGeoPoint(78.4,17.4);
var loc3 = new CB.CloudGeoPoint(80.4,17.7);
var query = new CB.CloudQuery('Sample');
query.geoWithin("location", [loc1, loc2, loc3]);
query.find({
    success : function(list){
        //list is an array of CloudObjects.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query-geo">
```
var loc1 = new CB.CloudGeoPoint(78.9,18.4);
var loc2 = new CB.CloudGeoPoint(78.4,17.4);
var loc3 = new CB.CloudGeoPoint(80.4,17.7);
var query = new CB.CloudQuery('Sample');
query.geoWithin("location", [loc1, loc2, loc3]);
query.find({
    success : function(list){
        //list is an array of CloudObjects.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="query-geo">
```
CloudGeoPoint loc1 = new CloudGeoPoint(78.9,18.4);
CloudGeoPoint loc2 = new CloudGeoPoint(78.4,17.4);
CloudGeoPoint loc3 = new CloudGeoPoint(80.4,17.7);
CloudQuery query = new CloudQuery("Sample");
query.geoWithin("location", [loc1, loc2, loc3]);
query.find(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException e)throws CloudException {
		if(e != null)
			//error				
		if(x!=null)
			//x is a list of CloudObjects
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="query-geo">
```
var loc1 = new CB.CloudGeoPoint(78.9,18.4);
var loc2 = new CB.CloudGeoPoint(78.4,17.4);
var loc3 = new CB.CloudGeoPoint(80.4,17.7);
var query = new CB.CloudQuery("Sample");
var list = new ArrayList();
query.GeoWithin("location", list);
List<CB.CloudObject> result = await query.Find();
```
</span>

==cURL==
<span class="curl-lines" data-query="query-geo">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "limit": 10,
    "sort": {        
    },
    "select": {        
    },
    "query": {
        "$includeList": [],
        "$include": [],
        "location": "{ '$geometry':{ 'type': 'Polygon', 'coordinates': [18.4,78.9,17.4,78.4,17.7,80.4]} }"
    },
    "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
let query = CloudQuery(tableName: "LocationTest")
let loc1 = try! CloudGeoPoint(latitude: 18.4, longitude: 78.9)
let loc2 = try! CloudGeoPoint(latitude: 17.4, longitude: 78.4)
let loc3 = try! CloudGeoPoint(latitude: 17.7, longitude: 80.4)
query.geoWithin("location", geoPoints: [loc1,loc2,loc3])
try! query.find({ response in
    response.log()
    // received points that fall within the polygon formed by the given points
})
```
</span>
