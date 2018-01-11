#####In this section

In this section you'll learn about how to query [CloudObjects]( https://docs.cloudboost.io/#CloudObject) from the database. You will also learn few important queries like Distinct, queries on Geo-points and much more.

In many cases, you need a powerful way to query data in your database and specify which objects you want to retrieve. [CB.CloudQuery](https://docs.cloudboost.io/#CloudQuery) offers different ways to retrieve a list of objects you need.

The general pattern is to create a [CB.CloudQuery](https://docs.cloudboost.io/#CloudQuery), put conditions on it, and then retrieve an Array of matching [CB.CloudObject]( https://docs.cloudboost.io/#CloudObject) using find.

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

==cURL==
<span class="curl-lines" data-query="basic">
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
    "name": "john"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="notequal">
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
    "name": {
      "$ne": "adam"
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="greaterthan">
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
    "age": {
      "$gt": 30
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==curl==
<span class="curl-lines" data-query="lessthan">
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
    "age": {
      "$lt": 30
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="greaterequal">
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
    "age": {
      "$gte": 30
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="lessequal">
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
    "age": {
      "$lte": 30
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="startwith">
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
    "name": {
      "$options": "im",
      "$regex": "^b"
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

###Substring

Substring returns all the `CloudObject` which contains the given string.

Params

* Column Name (String)
* Value (String)
* isCaseInsensitive (Boolean)

>Info: Substring only works with <span class="tut-snippet">Text</span> type.

==JavaScript==
<span class="js-lines" data-query="Substring">
```
var query = new CB.CloudQuery("Student");
query.substring('name','on');
//OR also works with an array.
query.substring('name',['on','hn'], false);
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
<span class="nodejs-lines" data-query="Substring">
```
var query = new CB.CloudQuery("Student");
query.substring('name','on');
//OR also works with an array.
query.substring('name',['on','hn']);
query.find({
  success: function(list) {
    //list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==curl==
<span class="curl-lines" data-query="Substring">
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
		"name": {
			"$regex": ".*on.*"
		}
	},
	"skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
//
//OR, alternatively use array
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
		"$or": [{
			"name": {
				"$regex": ".*on.*"
			}
		},
		{
			"name": {
				"$regex": ".*hn.*"
			}
		}]
	},
	"skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

###Regex

Returns all the `CloudObject` which matches the regex.

>Info: Regex with only works with <span class="tut-snippet">Text</span> type.

==JavaScript==
<span class="js-lines" data-query="regex">
```
var query = new CB.CloudQuery("Student");
query.regex('name','^/*.on*./');
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
<span class="nodejs-lines" data-query="regex">
```
var query = new CB.CloudQuery("Student");
query.regex('name','^/*.on*./');
query.find({
  success: function(list) {
    //list is an array of CloudObjects
  },
  error: function(error) {
  }
});
```
</span>

==curl==
<span class="curl-lines" data-query="regex">
```
//
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
	"query": {
		"$include": [],
		"$includeList": [],
		"name": {
			"$regex": "^/*.on*./"
		}
	},
	"select": {		
	},
	"sort": {		
	},
	"limit": 10,
	"skip": 0
}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="containedin">
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
    "name": {
      "$nin": [],
      "$in": ["adam",
      "bengi"]
    },
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="notcontained">
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
    "name": {
      "$nin": ["ben"]
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="containsall">
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
    "name": {
      "$all": ["adam","bengi"]
    },
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#AND and OR

By adding two or more constraints on a single query object will AND it by default. For example:

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

==cURL==
<span class="curl-lines" data-query="and">
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
    "name": "bengi",
    "age": {
      "$gt": 30
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

###OR Query

You can perform **OR** query among 2 query objects by passing as two params or pass Array of query objects as one param.

Params

* Query1/ Array of Queries
* Query2

>Info: In case of Array of queries, pass it as one param.

==JavaScript==
<span class="js-lines" data-query="or">
```
//Two Query Objects
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
//
//Array of Query Objects
var query1 = new CB.CloudQuery("Student");
query1.equalTo('name', 'John');
var query2 = new CB.CloudQuery("Student");
query2.greaterThan('age', 10);
var query3 = new CB.CloudQuery("Student");
query3.equalTo('lastname', "Snow");
var query = CB.CloudQuery.or([query1,query2,query3]); //OR it.
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

==cURL==
<span class="curl-lines" data-query="or">
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
    "$or": [{
      "$includeList": [],
      "$include": [],
      "age": {
        "$gt": 30
      }
    },
    {
      "$includeList": [],
      "$include": [],
      "age": {
        "$lt": 60
      }
    }]
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="orderby">
```
//order by ascending
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
    "age": 1
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
//
//order by descending
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
    "age": -1
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Limit & Skip

Limit returns only the specified number of objects from the database. Skip in turn skips the specified number of objects from the database and returns the rest of the objects.

**Important :** Default limit is set to 10.


==JavaScript==
<span class="js-lines" data-query="limitskip">
```
//limit
query.setLimit(10);
//skip
query.setSkip(10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="limitskip">
```
//limit
query.setLimit(10);
//skip
query.setSkip(10);
```
</span>

==cURL==
<span class="curl-lines" data-query="limitskip">
```
//limit
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 5,
  "sort": {
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
//
//
//skip
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 5
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Paginate

Paginate returns only the specified number of objects from the database. It takes in the current page number and total items in page as parameters and returns list of objects,count,total number of pages.

==JavaScript==
<span class="js-lines" data-query="paginate">
```
var currentPageNo=2; //Current Page number
var totalItemsInPage=10; //total items in page
//
query.paginate(currentPageNo,totalItemsInPage,{
  success : function(objectsList,count,totalPages){
      //objectsList
      //count
      //totalPages
    }, error : function(error){
      //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="paginate">
```
//paginate
query.paginate(2,10,{
  success : function(objectsList,count,totalPages){
      //objectsList
      //count
      //totalPages
    }, error : function(error){
      //error
    }
});
```
</span>

==cURL==
<span class="curl-lines" data-query="paginate">
```
//paginate
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": ${total_items_per_page},
  "sort": {
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": ${(page_no*total_items_per_page)-total_items_per_page}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Select Column

You can return only the specified column data in an object by using <span class="tut-snippet">SelectColumn</span> function. You can also choose NOT to return the data from that column by using the <span class="tut-snippet">DoNotSelectColumn</span> function.

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

==cURL==
<span class="curl-lines" data-query="selectcol">
```
//select
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {
    "updatedAt": 1,
    "_type": 1,
    "_id": 1,
    "createdAt": 1,
    "age": 1,
    "name": 1,
    "_tableName": 1,
    "ACL": 1
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
//
//do not select
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {
    "name": 0
  },
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Find, Find one, Find by ID

Find returns all the objects that are matched by the query. It returns an array of CloudObjects / CloudUser / CloudRole, and only **returns 10 documents by default.** You can change this limit by using the limit function of the CloudQuery.

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

==curl==
<span class="curl-lines" data-query="query">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": []
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

FindOne only returns the top object that is matched by the query. It returns a CloudObjects / CloudUser / CloudRole.

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

==cURL==
<span class="curl-lines" data-query="findone">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "ben": {
      "$exists": false
    }
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/findOne'
```
</span>

FindById return the object by its objectId

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

==cURL==
<span class="curl-lines" data-query="findid">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "_id": "id"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Delete

Delete all the objects that satisfies the query.


==JavaScript==
<span class="js-lines" data-query="delete">
```
query.delete({
  success : function(obj){
    }, error : function(error){
      //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="delete">
```
query.delete({
  success : function(obj){
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

==cURL==
<span class="curl-lines" data-query="count">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "_id": "id"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/count'
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

==cURL==
<span class="curl-lines" data-query="distinct">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "name": "id"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/distinct'
```
</span>

#Joins

###Simple Joins

When CloudObjects are related by the Relation or List of Relations data type and you query those CloudObject from the database,. By default, the data of related CloudObject will not return in the results.

For example, if a Student table has a column called courses which is a relation to Course table then,

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

==cURL==
<span class="curl-lines" data-query="simplejoin">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="include">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": ["course"],
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
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

==cURL==
<span class="curl-lines" data-query="multijoin">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": ["course.teacher"],
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

#Queries on Geo-points

###Near

Queries for objects which are within range given by the query. It gives result in the order of nearest to farthest. You basically pass in the <span class="tut-snippet">ColumnName</span> to the first parameter, second parameter takes in a <span class="tut-snippet">CB.CloudGeoPoint</span>, and third takes in the radius in meters.

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

==cURL==
<span class="curl-lines" data-query="near">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "location": "{ '$geometry': {coordinates:[80.3,17.7] , type:'Point' }, '$maxDistance': 100000.0, '$minDistance': 0.0}"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

###Geo Within

Gets all the objects if the point specified by column name lie inside of the specified set of points given.

Geo Within at least requires 3 points to be passed to the query.

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

==cURL==
<span class="curl-lines" data-query="geowithin">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": {
  },
  "select": {},
  "query": {
    "$includeList": [],
    "$include": [],
    "location": "{ '$geometry':{ 'type': 'Polygon', 'coordinates': [78.9,18.4,78.4,17.4,80.4,17.7]} }"
  },
  "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>
