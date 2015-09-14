#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important search queries like SearchOn, Phrase and much more. 

In some cases, You need a powerful way to search data and have search boxes in your apps and when the query is executed CloudBoost will return only reveant results from the database. CB.CloudSearch offers different ways to search the data you need. 

The general pattern is to create a CB.CloudSearch object, attach it with CB.SearchQuery and a CB.SearchFilter, write conditions on it, and then retrieve an Array of matching CB.CloudObject using search function / method. 

#Basic Search

Here is an example of a very basic search in CloudBoost

###Step 1

Create a CloudSearch Object. 

==JavaScript==
```
var cs = new CB.CloudSearch("Student");
```

==NodeJS==
```
var cs = new CB.CloudSearch("Student");
```

###Step 2

Attach SearchQuery to CloudSearch Object and write your query in searchOn function / method. 

==JavaScript==
```
cs.searchQuery = new CB.SearchQuery();
cs.searchQuery.searchOn('name','John');
```

==NodeJS==
```
cs.searchQuery = new CB.SearchQuery();
cs.searchQuery.searchOn('name','John');
```

###Step 3

Search. 

==JavaScript==
```
cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```

==NodeJS==
```
cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```

#Search Query and Search Filters

There are two queries in CloudSearch, One is **SearchQuery** and the other is **SearchFilter**. When you run the CloudSearch query, Your data is filtered first by using the FilteredQuery and then, the filtered data is then searched using the SearchQuery and the results are then returned. 

{<1>}![CloudBoost Search Pipeline](/content/images/2015/09/Capture.PNG)

To create a new SearchQuery and SearchFilter you can : 

==JavaScript==
```
var cs = new CB.CloudSearch('TableName');

//create a search filter
cs.searchFilter = new CB.SearchFilter();

//create a search query
cs.searchQuery = new CB.SearchQuery();

cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```

==NodeJS==
```
var cs = new CB.CloudSearch('TableName');

//create a search filter
cs.searchFilter = new CB.SearchFilter();

//create a search query
cs.searchQuery = new CB.SearchQuery();

cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```

#Basic Search Query


###Search On

To search on any or a set of columns, you can use SearchOn

==NodeJS==
```
cs.searchQuery.searchOn('name','John');
```

==JavaScript==
```
cs.searchQuery.searchOn('name','John');
```



###Phrase

To search on any set of words that are close to each other like for example (John Smith). You can use phrase.

==NodeJS==
```
cs.searchQuery.phrase('name','John Smith');
```

==JavaScript==
```
cs.searchQuery.phrase('name','John Smith');
```

###Or

To OR a search query you can use the `or` function.

==NodeJS==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.or(searchQuery1);
```

==JavaScript==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.or(searchQuery1);
```

###And

To AND a search query you can use the `and` function.

==NodeJS==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.and(searchQuery1);
```

==JavaScript==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.and(searchQuery1);
```

###Not

To NOT a search query you can use the `not` function.

==NodeJS==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.not(searchQuery1);
```

==JavaScript==
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');

//your main searchQuery
cs.searchQuery.not(searchQuery1);
```

#Basic Search Filters

###Equal To

To have an equalTo constraint over a search filter you can use the `equalTo` function.

==JavaScript==
```
cs.searchFilter.equalTo("name","John");
```

==NodeJS==
```
cs.searchFilter.equalTo("name","John");
```


###Not Equal To

To have an notEqualTo constraint over a search filter you can use the `notEqualTo` function.

==NodeJS==
```
cs.searchFilter.notEqualTo("name","John");
```

==JavaScript==
```
cs.searchFilter.notEqualTo("name","John");
```

###Greater Than

To have an greaterThan constraint over a search filter you can use the `greaterThan` function.

==JavaScript==
```
cs.searchFilter.greaterThan("age",10);
```

==NodeJS==
```
cs.searchFilter.greaterThan("age",10);
```

###Less than

To have an lessThan constraint over a search filter you can use the `lessThan` function.

==JavaScript==
```
cs.searchFilter.lessThan("age",10);
```

==NodeJS==
```
cs.searchFilter.lessThan("age",10);
```

###Greater Than Or Equal To


To have an greaterThanEqualTo constraint over a search filter you can use the `greaterThanEqualTo` function.

==JavaScript==
```
cs.searchFilter.greaterThanEqualTo("age",10);
```

==NodeJS==
```
cs.searchFilter.greaterThanEqualTo("age",10);
```

###Less Than Or Equal To


To have an lessThanEqualTo constraint over a search filter you can use the `lessThanEqualTo` function.

==JavaScript==
```
cs.searchFilter.lessThanEqualTo("age",10);
```

==NodeJS==
```
cs.searchFilter.lessThanEqualTo("age",10);
```

###Exists


To have a constraint over a search filter where a column cannot be null. You can use the `exists` function.

==JavaScript==
```
cs.searchFilter.exists("name");
```

==NodeJS==
```
cs.searchFilter.exists("name");
```


###Does not exists

To have a constraint over a search filter where a column is null. You can use the `doesNotExists` function.

==JavaScript==
```
cs.searchFilter.doesNotExists("name");
```

==NodeJS==
```
cs.searchFilter.doesNotExists("name");
```

###Or

To OR a search filter you can use the `or` function.

==NodeJS==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.or(searchFilter1);
```

==JavaScript==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.or(searchFilter1);
```

###And

To AND a search filter you can use the `and` function.

==NodeJS==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.and(searchFilter1);
```

==JavaScript==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.and(searchFilter1);
```

###Not

To NOT a search filter you can use the `not` function.

==NodeJS==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.not(searchFilter1);
```

==JavaScript==
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');

//your main searchQuery
cs.searchFilter.not(searchFilter1);
```

#Order By

You can also OrderBy the results by : 

==JavaScript==
```
var cs = new CB.CloudSearch("Student");

cs.orderByAsc('age'); 
// OR
cs.orderByDesc('age'); 

cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```

==NodeJS==
```
var cs = new CB.CloudSearch("Student");

cs.orderByAsc('age'); 
// OR
cs.orderByDesc('age'); 

cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```

#Limit and Skip

You can also limit and skip the results by : 

==JavaScript==
```
var cs = new CB.CloudSearch("Student");

cs.limit(10); 
// OR
cs.skip(5); 

cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```

==NodeJS==
```
var cs = new CB.CloudSearch("Student");

cs.limit(10); 
// OR
cs.skip(5); 

cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```

#####What's next? 