#####In this section

In this section you'll learn about how to query CloudObjects from the database. You will also learn few important queries like Distinct, queries on Geo-points and much more. 

In many cases, You need a powerful way to query data in your database and specify which objects you want to retrieve. CB.CloudQuery offers different ways to retrieve a list of objects you need. 

The general pattern is to create a CB.CloudQuery, put conditions on it, and then retrieve an Array of matching CB.CloudObject using find. 

#Basic Query Constraints

###Equal To

==JavaScript==
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

==NodeJS==
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

###Not Equal To

==JavaScript==
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

==NodeJS==
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

###Greater Than

==JavaScript==
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

==NodeJS==
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

###Less Than

==JavaScript==
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

==NodeJS==
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

###Greater Than and Equal To

==JavaScript==
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

==NodeJS==
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

###Less Than and Equal To

==JavaScript==
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

==NodeJS==
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

###Starts With

>Info: Starts with only works with `Text` type. 

==JavaScript==
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

==NodeJS==
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

#Queries on Lists

###Contained In

==JavaScript==
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
==NodeJS==
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

###Does not contain

==JavaScript==
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
==NodeJS==
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

###Contains All
==JavaScript==
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
==NodeJS==
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

#AND and OR

By adding two or more constraints on a single query object will AND it by default. For example : 

==JavaScript==
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
==NodeJS==
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

If you want to **OR** a query, You can : 

==JavaScript==
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
==NodeJS==
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

#Order By

==JavaScript==
```
//order by Ascending
query.orderByAsc('name');

//You can also order by Desending
query.orderByDesc('name');
```
==NodeJS==
```
//order by Ascending
query.orderByAsc('name');

//You can also order by Desending
query.orderByDesc('name');
```

#Limit & Skip

Limit returns only the specified number of objects from the database. Skip inturn skips the specified number of objects from the database and returns the rest of the objects. 

==JavaScript==
```
//limit
query.limit(10);

//skip
query.skip(10);
```
==NodeJS==
```
//limit
query.limit(10);

//skip
query.skip(10);
```

#Select Column

You can return only the specified column data in an object by using `selectColumn` function. You can also choose NOT to return the data from that column by using the `doNotSelectColumn` function.

==JavaScript==
```
//select
query.selectColumn('name');

//do not select
query.doNotSelectColumn('age');
```
==NodeJS==
```
//select
query.selectColumn('name');

//do not select
query.doNotSelectColumn('age');
```

#Find, Find one, Find by ID. 

Find returns all the objects that are matched by the query. It returns an array of CloudObjects / CloudUser / CloudRole, and only returns 10 documents by default. You can change this limit by using the limit fucntion of the CloudQuery. 

==JavaScript==
```
query.find({
	success : function(list){
    	//list is an array of CloudObjects
    }, error : function(error){
    	//error
    }
});
```
==NodeJS==
```
query.find({
	success : function(list){
    	//list is an array of CloudObjects
    }, error : function(error){
    	//error
    }
});
```

FindOne only returns the top object thatis matched by the query. It returns a CloudObjects / CloudUser / CloudRole.

==JavaScript==
```
query.findOne({
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
==NodeJS==
```
query.findOne({
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```

FindById return the object by its objectId.

==JavaScript==
```
query.findById('id', {
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```
==NodeJS==
```
query.findById('id', {
	success : function(obj){
    	//obj is CloudObject
    }, error : function(error){
    	//error
    }
});
```

#Count

Counts the number of object that satisfies the query.

==JavaScript==
```
query.count({
	success : function(number){
    	
    }, error : function(error){
    	//error
    }
});
```
==NodeJS==
```
query.count({
	success : function(number){
    	
    }, error : function(error){
    	//error
    }
});
```

#Distinct

Distinct query returns the distinct values of a specified column. 

==JavaScript==
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
==NodeJS==
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

#Joins

###Simple Joins

When CloudObjects are related by the Relation or List of Relations data type and you query those CloudObject from the database,. By default, the data of related CloudObject will not return in the results. 

For example, If a Student table has a column called courses which is a relation to Course table then, 

If you query students and get the course property,

**The Problem :**

==JavaScript==
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

==NodeJS==
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

**Solution :**

To solve this, you need to call the `include` function of CB.CloudQuery Object and pass in the ColumnName. 

==JavaScript==
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

==NodeJS==
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

###Multi level joins

You can also do multi-level join on your CloudObject. 

For example :

==JavaScript==
```
query.include('course.teacher'); 
```

==NodeJS==
```
query.include('course.teacher'); 
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

#####What's next? 

In the next section you'll learn about how to query on relations and explore the graph / advanced relational features of CloudBoost and how you can leverage them in your queries to mak quering data in CloudBoost even easier. 