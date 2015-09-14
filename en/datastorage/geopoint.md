#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important search queries like SearchOn, Phrase and much more. 

#Saving Geopoint

Saving a Geo-point inside of a CloudObject is simple.  You create a new Geo-point object, set the latitude and longitude and set that geo-point object to the CloudObject and save the CloudObject. 

==JavaScript==
```
var location = new CB.CloudGeoPoint(17.7,80.3);

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
==NodeJS==
```
var location = new CB.CloudGeoPoint(17.7,80.3);

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

#Calculating Distance 

###In Kilometers

To calculate the distance in KM's

==JavaScript==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInKMs(loc2);
```
==NodeJS==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInKMs(loc2);
```

###In Miles

To calculate the distance in Miles's

==JavaScript==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInMiles(loc2);
```
==NodeJS==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInMiles(loc2);
```

###In Radians

To calculate the distance in Radians

==JavaScript==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInRadians(loc2);
```
==NodeJS==
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInRadians(loc2);
```

#Queries on Geo-points

###Near

Queries for objects which are within range given by the query.It gives result in the order of nearest to farthest. You basically pass in the `ColumnName` to the first parameter, second parameter takes in a `CB.CloudGeoPoint`, and third takes in the radius in meters. 

==JavaScript==
```
var loc = new CB.CloudGeoPoint(17.7,80.3);
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
==NodeJS==
```
var loc = new CB.CloudGeoPoint(17.7,80.3);
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

###Geo Within

Gets all the objects if the point specified by column name lie inside of the specied set of points given. 

Geo Within atleast requires 3 points to be passed to the query. 

==JavaScript==
```
var loc1 = new CB.CloudGeoPoint(18.4,78.9);
var loc2 = new CB.CloudGeoPoint(17.4,78.4);
var loc3 = new CB.CloudGeoPoint(17.7,80.4);

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
==NodeJS==
```
var loc1 = new CB.CloudGeoPoint(18.4,78.9);
var loc2 = new CB.CloudGeoPoint(17.4,78.4);
var loc3 = new CB.CloudGeoPoint(17.7,80.4);

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
