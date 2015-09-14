#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important search queries like SearchOn, Phrase and much more. 

#Saving Geopoint

Saving a Geo-point inside of a CloudObject is simple.  You create a new Geo-point object, set the latitude and longitude and set that geo-point object to the CloudObject and save the CloudObject. 

==JavaScript==
<span class="js-lines" data-query="saving">
```
var location = new CB.CloudGeoPoint(17.7,80.3);
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
</span>

#Calculating Distance 

###In Kilometers

To calculate the distance in KM's

==JavaScript==
<span class="js-lines" data-query="calc-kilo">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInKMs(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-kilo">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInKMs(loc2);
```
</span>

###In Miles

To calculate the distance in Miles's

==JavaScript==
<span class="js-lines" data-query="calc-miles">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInMiles(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-miles">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInMiles(loc2);
```
</span>

###In Radians

To calculate the distance in Radians

==JavaScript==
<span class="js-lines" data-query="calc-radians">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInRadians(loc2);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="calc-radians">
```
var loc1 = new CB.CloudGeoPoint(17.7,80.3);
var loc2 = new CB.CloudGeoPoint(10.7,70.3);
var distance = loc1.distanceInRadians(loc2);
```
</span>

#Queries on Geo-points

###Near

Queries for objects which are within range given by the query.It gives result in the order of nearest to farthest. You basically pass in the <span class="tut-snippet">ColumnName</span> to the first parameter, second parameter takes in a <span class="tut-snippet">CB.CloudGeoPoint</span>, and third takes in the radius in meters. 

==JavaScript==
<span class="js-lines" data-query="query-near">
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
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query-near">
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
</span>

###Geo Within

Gets all the objects if the point specified by column name lie inside of the specied set of points given. 

Geo Within atleast requires 3 points to be passed to the query. 

==JavaScript==
<span class="js-lines" data-query="query-geo">
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
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query-geo">
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
</span>
