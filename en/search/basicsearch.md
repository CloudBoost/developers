#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important search queries like SearchOn, Phrase and much more. 

In some cases, You need a powerful way to search data and have search boxes in your apps and when the query is executed CloudBoost will return only reveant results from the database. CB.CloudSearch offers different ways to search the data you need. 

The general pattern is to create a CB.CloudSearch object, attach it with CB.SearchQuery and a CB.SearchFilter, write conditions on it, and then retrieve an Array of matching CB.CloudObject using search function / method. 

#Basic Search

Here is an example of a very basic search in CloudBoost

###Step 1

Create a CloudSearch Object. 

==JavaScript==
<span class="js-lines" data-query="create">
```
var cs = new CB.CloudSearch("Student");
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var cs = new CB.CloudSearch("Student");
```
</span>

###Step 2

Attach SearchQuery to CloudSearch Object and write your query in searchOn function / method. 

==JavaScript==
<span class="js-lines" data-query="attach">
```
cs.searchQuery = new CB.SearchQuery();
cs.searchQuery.searchOn('name','John');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="attach">
```
cs.searchQuery = new CB.SearchQuery();
cs.searchQuery.searchOn('name','John');
```
</span>


###Step 3

Search. 

==JavaScript==
<span class="js-lines" data-query="search">
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
</span>

==NodeJS==
<span class="nodejs-lines" data-query="search">
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
</span>

#Search Query and Search Filters

There are two queries in CloudSearch, One is **SearchQuery** and the other is **SearchFilter**. When you run the CloudSearch query, Your data is filtered first by using the FilteredQuery and then, the filtered data is then searched using the SearchQuery and the results are then returned. 

{<1>}![CloudBoost Search Pipeline](/content/images/2015/09/Capture.PNG)

To create a new SearchQuery and SearchFilter you can : 

==JavaScript==
<span class="js-lines" data-query="newquery">
```
var cs = new CB.CloudSearch('TableName');
//
//create a search filter
cs.searchFilter = new CB.SearchFilter();
//
//create a search query
cs.searchQuery = new CB.SearchQuery();
//
cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="newquery">
```
var cs = new CB.CloudSearch('TableName');
//
//create a search filter
cs.searchFilter = new CB.SearchFilter();
//
//create a search query
cs.searchQuery = new CB.SearchQuery();
//
cs.search({
  success: function(list) {
  	//list is an array of relevant CloudObjects
  },
  error: function(error) {
  	//error
  }
});
```
</span>

#Basic Search Query


###Search On

To search on any or a set of columns, you can use SearchOn

==JavaScript==
<span class="js-lines" data-query="searchon">
```
cs.searchQuery.searchOn('name','John');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="searchon">
```
cs.searchQuery.searchOn('name','John');
```
</span>


###Phrase

To search on any set of words that are close to each other like for example (John Smith). You can use phrase.

==JavaScript==
<span class="js-lines" data-query="phrase">
```
cs.searchQuery.phrase('name','John Smith');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="phrase">
```
cs.searchQuery.phrase('name','John Smith');
```
</span>


###Or

To OR a search query you can use the <span class="tut-snippet">or</span> function.

==JavaScript==
<span class="js-lines" data-query="or">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.or(searchQuery1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="or">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.or(searchQuery1);
```
</span>


###And

To AND a search query you can use the <span class="tut-snippet">and</span> function.

==JavaScript==
<span class="js-lines" data-query="and">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.and(searchQuery1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="and">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.and(searchQuery1);
```
</span>

###Not

To NOT a search query you can use the <span class="tut-snippet">not</span> function.

==JavaScript==
<span class="js-lines" data-query="not">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.not(searchQuery1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="not">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.searchOn('name', 'John');
//
//your main searchQuery
cs.searchQuery.not(searchQuery1);
```
</span>


#Basic Search Filters

###Equal To

To have an equalTo constraint over a search filter you can use the <span class="tut-snippet">equalTo</span> function.

==JavaScript==
<span class="js-lines" data-query="equal">
```
cs.searchFilter.equalTo("name","John");
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="equal">
```
cs.searchFilter.equalTo("name","John");
```
</span>

###Not Equal To

To have an notEqualTo constraint over a search filter you can use the <span class="tut-snippet">notEqualTo</span> function.

==JavaScript==
<span class="js-lines" data-query="notequal">
```
cs.searchFilter.notEqualTo("name","John");
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="notequal">
```
cs.searchFilter.notEqualTo("name","John");
```
</span>

###Greater Than

To have an greaterThan constraint over a search filter you can use the <span class="tut-snippet">greaterThan</span> function.

==JavaScript==
<span class="js-lines" data-query="greaterthan">
```
cs.searchFilter.greaterThan("age",10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="greaterthan">
```
cs.searchFilter.greaterThan("age",10);
```
</span>

###Less than

To have an lessThan constraint over a search filter you can use the <span class="tut-snippet">lessThan</span> function.

==JavaScript==
<span class="js-lines" data-query="lessthan">
```
cs.searchFilter.lessThan("age",10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="lessthan">
```
cs.searchFilter.lessThan("age",10);
```
</span>

###Greater Than Or Equal To


To have an greaterThanEqualTo constraint over a search filter you can use the <span class="tut-snippet">greaterThanEqualTo</span> function.

==JavaScript==
<span class="js-lines" data-query="greaterequal">
```
cs.searchFilter.greaterThanEqualTo("age",10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="greaterequal">
```
cs.searchFilter.greaterThanEqualTo("age",10);
```
</span>

###Less Than Or Equal To


To have an lessThanEqualTo constraint over a search filter you can use the <span class="tut-snippet">lessThanEqualTo</span> function.

==JavaScript==
<span class="js-lines" data-query="lessequal">
```
cs.searchFilter.lessThanEqualTo("age",10);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="lessequal">
```
cs.searchFilter.lessThanEqualTo("age",10);
```
</span>

###Exists


To have a constraint over a search filter where a column cannot be null. You can use the <span class="tut-snippet">exists</span> function.

==JavaScript==
<span class="js-lines" data-query="exists">
```
cs.searchFilter.exists("name");
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="exists">
```
cs.searchFilter.exists("name");
```
</span>


###Does not exists

To have a constraint over a search filter where a column is null. You can use the <span class="tut-snippet">doesNotExists</span> function.

==JavaScript==
<span class="js-lines" data-query="notexists">
```
cs.searchFilter.doesNotExists("name");
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="notexists">
```
cs.searchFilter.doesNotExists("name");
```
</span>

###Or

To OR a search filter you can use the <span class="tut-snippet">or</span> function.

==JavaScript==
<span class="js-lines" data-query="filteror">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.or(searchFilter1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="filteror">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.or(searchFilter1);
```
</span>


###And

To AND a search filter you can use the <span class="tut-snippet">and</span> function.

==JavaScript==
<span class="js-lines" data-query="filterand">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.and(searchFilter1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="filterand">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.and(searchFilter1);
```
</span>

###Not

To NOT a search filter you can use the <span class="tut-snippet">not</span> function.

==JavaScript==
<span class="js-lines" data-query="filternot">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.not(searchFilter1);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="filternot">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.equalTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.not(searchFilter1);
```
</span>

#Order By

You can also OrderBy the results by : 

==JavaScript==
<span class="js-lines" data-query="orderby">
```
var cs = new CB.CloudSearch("Student");
//
cs.orderByAsc('age'); 
// OR
cs.orderByDesc('age'); 
//
cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="orderby">
```
var cs = new CB.CloudSearch("Student");
//
cs.orderByAsc('age'); 
// OR
cs.orderByDesc('age'); 
//
cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```
</span>

#Limit and Skip

You can also limit and skip the results by : 

==JavaScript==
<span class="js-lines" data-query="limitskip">
```
var cs = new CB.CloudSearch("Student");
//
cs.limit(10); 
// OR
cs.skip(5); 
//
cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="limitskip">
```
var cs = new CB.CloudSearch("Student");
//
cs.limit(10); 
// OR
cs.skip(5); 
//
cs.search({
  success: function(list){
  	//list is an array of CloudObjects
  },
  error: function(err) {
  	//Error in retrieving the data.
  }
});
```
</span>

#####What's next? 
