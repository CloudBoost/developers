#####In this section

In this section you'll learn about how to query CloudObjects from the database. You will also learn few important queries like Distinct, queries on Geo-points and much more. 

In many cases, You need a powerful way to query data in your database and specify which objects you want to retrieve. CB.CloudQuery offers different ways to retrieve a list of objects you need. 

The general pattern is to create a CB.CloudQuery, put conditions on it, and then retrieve an Array of matching CB.CloudObject using find. 

#Basic Query Constraints

###Equal To

==JavaScript==
<span class="js-lines" data-query="basic">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name','John');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="basic">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name','John');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Not Equal To

==JavaScript==
<span class="js-lines" data-query="notequal">
```
var query = new CB.CloudQuery("Student");
query.notEqualTo('name','John');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="notequal">
```
var query = new CB.CloudQuery("Student");
query.notEqualTo('name','John');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Greater Than

==JavaScript==
<span class="js-lines" data-query="greaterthan">
```
var query = new CB.CloudQuery("Student");
query.greaterThan('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="greaterthan">
```
var query = new CB.CloudQuery("Student");
query.greaterThan('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Less Than

==JavaScript==
<span class="js-lines" data-query="lessthan">
```
var query = new CB.CloudQuery("Student");
query.lessThan('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="lessthan">
```
var query = new CB.CloudQuery("Student");
query.lessThan('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Greater Than and Equal To

==JavaScript==
<span class="js-lines" data-query="greaterequal">
```
var query = new CB.CloudQuery("Student");
query.greaterThanEqualTo('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="greaterequal">
```
var query = new CB.CloudQuery("Student");
query.greaterThanEqualTo('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Less Than and Equal To

==JavaScript==
<span class="js-lines" data-query="lessequal">
```
var query = new CB.CloudQuery("Student");
query.lessThanEqualTo('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="lessequal">
```
var query = new CB.CloudQuery("Student");
query.lessThanEqualTo('age',15);
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

###Starts With

>Info: Starts with only works with <span class="tut-snippet">Text</span> type. 

==JavaScript==
<span class="js-lines" data-query="startwith">
```
var query = new CB.CloudQuery("Student");
query.startsWith('name','J');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="startwith">
```
var query = new CB.CloudQuery("Student");
query.startsWith('name','J');
query.find({
  success: function(list) {
  	//list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

#Queries on Lists

###Contained In

==JavaScript==
<span class="js-lines" data-query="containedin">
```
var query = new CB.CloudQuery("Student");
//find Students who are in JavaScript OR C# course
query.containedIn('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="containedin">
```
var query = new CB.CloudQuery("Student");
//find Students who are in JavaScript OR C# course
query.containedIn('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

###Does not contain

==JavaScript==
<span class="js-lines" data-query="notcontained">
```
var query = new CB.CloudQuery("Student");
//find Students who are in NOT in JavaScript AND C# course
query.notContainedIn('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="notcontained">
```
var query = new CB.CloudQuery("Student");
//find Students who are in NOT in JavaScript AND C# course
query.notContainedIn('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

###Contains All

==JavaScript==
<span class="js-lines" data-query="containsall">
```
var query = new CB.CloudQuery("Student");
//find Students who are in JavaScript AND C# course
query.containsAll('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="containsall">
```
var query = new CB.CloudQuery("Student");
//find Students who are in JavaScript AND C# course
query.containsAll('courses', ['JavaScript', 'C#']);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

#AND and OR

By adding two or more constraints on a single query object will AND it by default. For example : 

==JavaScript==
<span class="js-lines" data-query="and">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name', 'John');
query.greaterThan('age', 10);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="and">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name', 'John');
query.greaterThan('age', 10);
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

If you want to **OR** a query, You can : 

==JavaScript==
<span class="js-lines" data-query="or">
```
var query1 = new CB.CloudQuery("Student");
query1.equalTo('name', 'John');
var query2 = new CB.CloudQuery("Student");
query2.greaterThan('age', 10);
var query = CB.CloudQuery.or(query1,query2); //OR it. 
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="or">
```
var query1 = new CB.CloudQuery("Student");
query1.equalTo('name', 'John');
var query2 = new CB.CloudQuery("Student");
query2.greaterThan('age', 10);
var query = CB.CloudQuery.or(query1,query2); //OR it. 
query.find({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(error) {
  	//Error in retrieving the data.
  }
});
```
</span>

#Order By

==JavaScript==
<span class="js-lines" data-query="orderby">
```
//order by Ascending
query.orderByAsc('name');
//You can also order by Desending
query.orderByDesc('name');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="orderby">
```
//order by Ascending
query.orderByAsc('name');
//You can also order by Desending
query.orderByDesc('name');
```
</span>

#Limit & Skip

Limit returns only the specified number of objects from the database. Skip inturn skips the specified number of objects from the database and returns the rest of the objects. 

==JavaScript==
<span class="js-lines" data-query="limitskip">
```
//limit
query.limit(10);
//skip
query.skip(10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="limitskip">
```
//limit
query.limit(10);
//skip
query.skip(10);
```
</span>

#Select Column

You can return only the specified column data in an object by using <span class="tut-snippet">selectColumn</span> function. You can also choose NOT to return the data from that column by using the <span class="tut-snippet">doNotSelectColumn</span> function.

==JavaScript==
<span class="js-lines" data-query="selectcol">
```
//select
query.selectColumn('name');
//do not select
query.doNotSelectColumn('age');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="selectcol">
```
//select
query.selectColumn('name');
//do not select
query.doNotSelectColumn('age');
```
</span>

#Find, Find one, Find by ID. 

Find returns all the objects that are matched by the query. It returns an array of CloudObjects / CloudUser / CloudRole, and only returns 10 documents by default. You can change this limit by using the limit fucntion of the CloudQuery. 

==JavaScript==
<span class="js-lines" data-query="query">
```
query.find({
	success : function(list){
    	//list is an array of CloudObjects
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query">
```
query.find({
	success : function(list){
    	//list is an array of CloudObjects
    }, error : function(error){
    	//error
    }
});
```
</span>

FindOne only returns the top object thatis matched by the query. It returns a CloudObjects / CloudUser / CloudRole.

==JavaScript==
<span class="js-lines" data-query="findone">
```
query.findOne({
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="findone">
```
query.findOne({
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
</span>

FindById return the object by its objectId.

==JavaScript==
<span class="js-lines" data-query="findid">
```
query.findById('id', {
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="findid">
```
query.findById('id', {
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
</span>

#Count

Counts the number of object that satisfies the query.

==JavaScript==
<span class="js-lines" data-query="count">
```
query.count({
	success : function(number){
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="count">
```
query.count({
	success : function(number){
    }, error : function(error){
    	//error
    }
});
```
</span>

#Distinct

Distinct query returns the distinct values of a specified column. 

==JavaScript==
<span class="js-lines" data-query="distinct">
```
query.distinct('age',{
	success : function(list){
    	//list is an array of CloudObjects.
        //list has all the objects with distinct age. 
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="distinct">
```
query.distinct('age',{
	success : function(list){
    	//list is an array of CloudObjects.
        //list has all the objects with distinct age. 
    }, error : function(error){
    	//error
    }
});
```
</span>

#Joins

###Simple Joins

When CloudObjects are related by the Relation or List of Relations data type and you query those CloudObject from the database,. By default, the data of related CloudObject will not return in the results. 

For example, If a Student table has a column called courses which is a relation to Course table then, 

If you query students and get the course property,

**The Problem :**

==JavaScript==
<span class="js-lines" data-query="simplejoin">
```
var query = new CB.CloudQuery('Student');
query.find({
	success : function(list){
    	//list is an array of CloudObjects.
        var student = list[0];
        var course = student.get('course');
		var courseName = course.get('name'); //this will be null.
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="simplejoin">
```
var query = new CB.CloudQuery('Student');
query.find({
	success : function(list){
    	//list is an array of CloudObjects.
        var student = list[0];
        var course = student.get('course');
		var courseName = course.get('name'); //this will be null.
    }, error : function(error){
    	//error
    }
});
```
</span>

**Solution :**

To solve this, you need to call the <span class="tut-snippet">include</span> function of CB.CloudQuery Object and pass in the ColumnName. 

==JavaScript==
<span class="js-lines" data-query="include">
```
var query = new CB.CloudQuery('Student');
query.include('course');
query.find({
	success : function(list){
    	//list is an array of CloudObjects.
        var student = list[0];
        var course = student.get('course');
		var courseName = course.get('name'); // you will get the related object and all the data
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="include">
```
var query = new CB.CloudQuery('Student');
query.include('course');
query.find({
	success : function(list){
    	//list is an array of CloudObjects.
        var student = list[0];
        var course = student.get('course');
		var courseName = course.get('name'); // you will get the related object and all the data
    }, error : function(error){
    	//error
    }
});
```
</span>

###Multi level joins

You can also do multi-level join on your CloudObject. 

For example :

==JavaScript==
<span class="js-lines" data-query="multijoin">
```
query.include('course.teacher'); 
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="multijoin">
```
query.include('course.teacher'); 
```
</span>

#Queries on Geo-points

###Near

Queries for objects which are within range given by the query.It gives result in the order of nearest to farthest. You basically pass in the <span class="tut-snippet">ColumnName</span> to the first parameter, second parameter takes in a <span class="tut-snippet">CB.CloudGeoPoint</span>, and third takes in the radius in meters. 

==JavaScript==
<span class="js-lines" data-query="near">
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
<span class="nodejs-lines" data-query="near">
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
<span class="js-lines" data-query="geowithin">
```
var loc1 = new CB.CloudGeoPoint(18.4,78.9);
var loc2 = new CB.CloudGeoPoint(17.4,78.4);
var loc3 = new CB.CloudGeoPoint(17.7,80.4);
//
var query = new CB.CloudQuery('Sample');
//
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
<span class="nodejs-lines" data-query="geowithin">
```
var loc1 = new CB.CloudGeoPoint(18.4,78.9);
var loc2 = new CB.CloudGeoPoint(17.4,78.4);
var loc3 = new CB.CloudGeoPoint(17.7,80.4);
//
var query = new CB.CloudQuery('Sample');
//
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

#####What's next? 

In the next section you'll learn about how to query on relations and explore the graph / advanced relational features of CloudBoost and how you can leverage them in your queries to mak quering data in CloudBoost even easier. 
