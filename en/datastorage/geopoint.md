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
