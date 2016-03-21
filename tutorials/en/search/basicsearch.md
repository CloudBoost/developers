#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important search queries like SearchOn, Phrase and much more. 

In some cases, you need a powerful way to search data and have search boxes in your apps and when the query is executed CloudBoost will return only relevant results from the database. CB.CloudSearch offers different ways to search the data you need. 

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

==Java==
<span class="java-lines" data-query="create">
```
CloudSearch cs = new CloudSearch("Student");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="create">
```
var cs = new CB.CloudSearch("Student");
```
</span>

==cURL==
<span class="curl-lines" data-query="create">
```
//
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

==Java==
<span class="java-lines" data-query="attach">
```
SearchQuery searchQuery = new SearchQuery();
searchQuery.searchOn("name","John",null,null,null,null);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="attach">
```
var searchQuery = new CB.SearchQuery();
searchQuery.SearchOn("name","John",null,null,null,null);
```
</span>

==cURL==
<span class="curl-lines" data-query="attach">
```
//
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

==Java==
<span class="java-lines" data-query="search">
```
cs.search(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException e)	throws CloudException {
		if( e != null){
		}
		if(x!=null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="search">
```
List<CB.CloudObject> list = await cs.Search();
```
</span>

==cURL==
<span class="curl-lines" data-query="search">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
        "bool": {
          "must_not": [],
          "should": [{
            "match": {
              "name": {
                "query": "[\"egima\",\"bengi\"]"
              }
            }
          }],
          "must": []
        }
      },
      "filter": {        
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

#Search Query and Search Filters

There are two queries in CloudSearch, One is **SearchQuery** and the other is **SearchFilter**. When you run the CloudSearch query, Your data is filtered first by using the FilteredQuery and then, the filtered data is then searched using the SearchQuery and the results are then returned. 

<img src="https://blog.cloudboost.io/content/images/2015/09/Capture.PNG" alt="CloudBoost Search Pipeline" class="full-length-img">

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

==Java==
<span class="java-lines" data-query="newquery">
```
//create a search filter
SearchFilter searchFilter = new SearchFilter();
//
//create a search query
SearchQuery searchQuery = new SearchQuery();
//construct your CloudSearch object
CloudSearch cs = new CloudSearch("TableName",searchQuery,searchFilter);
//
cs.search(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException t)	throws CloudException {
		if( t != null){
		}
		if(x!=null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="newquery">
```
var cs = new CB.CloudSearch("TableName");
cs.searchQuery = new CB.SearchQuery();
cs.searchFilter = new CB.SearchFilter();
List<CB.CloudObject> list = await cs.Search();
```
</span>

==cURL==
<span class="curl-lines" data-query="newquery">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {        
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="searchon">
```
searchQuery.searchOn("name","John");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="searchon">
```
cs.searchQuery.SearchOn("name","John");
```
</span>

==cURL==
<span class="curl-lines" data-query="searchon">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
        "bool": {
          "must_not": [],
          "should": [{
            "match": {
              "name": {
                "query": "[\"egima\",\"bengi\"]"
              }
            }
          }],
          "must": []
        }
      },
      "filter": {        
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="phrase">
```
searchQuery.phrase("name","John Smith");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="pharse">
```
cs.searchQuery.Phrase("name","John");
```
</span>

==cURL==
<span class="curl-lines" data-query="phrase">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
        "bool": {
          "must_not": [],
          "should": [{
            "match": {
              "name": {
                "query": "egima",
                "slop": null,
                "type": "phrase"
              }
            }
          }],
          "must": []
        }
      },
      "filter": {        
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="or">
```
SearchQuery searchQuery1 = new SearchQuery();
searchQuery1.searchOn("name", "John",null,null,null,null);
//
//OR with your main searchQuery
searchQuery.or(searchQuery1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="or">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.SearchOn("name","John", null, null, null, null);
cs.searchQuery.Or(searchQuery1);
```
</span>

==cURL==
<span class="curl-lines" data-query="or">
```
//search for Students either called Adam or smith
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "term": {
              "name": "Adam"
            }
          },
          {
            "term": {
              "name": "smith"
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="and">
```
SearchQuery searchQuery1 = new SearchQuery();
searchQuery1.searchOn("name", "John",null,null,null,null);
//
//AND with your main searchQuery
searchQuery.and(searchQuery1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="and">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.SearchOn("name","John", null, null, null, null);
cs.searchQuery.And(searchQuery1);
```
</span>

==cURL==
<span class="curl-lines" data-query="and">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
        "bool": {
          "must_not": [],
          "should": [{
            "match": {
              "age": {
                "query": "10"
              }
            }
          }],
          "must": [{
            "must_not": [],
            "match": {
              "name": {
                "query": "John"
              }
            },
            "bool": {
              "must_not": [],
              "should": [{
                "match": {
                  "name": {
                    "query": "John"
                  }
                }
              }],
              "must": []
            },
            "should": [{
              "match": {
                "name": {
                  "query": "John"
                }
              }
            }],
            "must": []
          }]
        }
      },
      "filter": {
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="not">
```
SearchQuery searchQuery1 = new SearchQuery();
searchQuery1.searchOn("name", "John",null,null,null,null);
//
//your main searchQuery
searchQuery.not(searchQuery1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="not">
```
var searchQuery1 = new CB.SearchQuery();
searchQuery1.SearchOn("name","John", null, null, null, null);
cs.searchQuery.not(searchQuery1);
```
</span>

==cURL==
<span class="curl-lines" data-query="not">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
        "bool": {
          "must_not": [{
            "must_not": [],
            "match": {
              "name": {
                "query": "John"
              }
            },
            "bool": {
              "must_not": [],
              "should": [{
                "match": {
                  "name": {
                    "query": "John"
                  }
                }
              }],
              "must": []
            },
            "should": [{
              "match": {
                "name": {
                  "query": "John"
                }
              }
            }],
            "must": []
          }],
          "should": [{
            "match": {
              "age": {
                "query": "10"
              }
            }
          }],
          "must": []
        }
      },
      "filter": {
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="equal">
```
searchFilter.equalTo("name","John");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="equal">
```
searchFilter.EqualTo("name","John");
```
</span>

==cURL==
<span class="curl-lines" data-query="equal">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "term": {
              "name": "John"
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

###Not Equal To

To have a notEqualTo constraint over a search filter you can use the <span class="tut-snippet">notEqualTo</span> function.

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

==Java==
<span class="java-lines" data-query="notequal">
```
searchFilter.notEqualTo("name","John");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="notequal">
```
searchFilter.NotEqualTo("name","John");
```
</span>

==cURL==
<span class="curl-lines" data-query="notequal">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [{
            "term": {
              "name": "bengi"
            }
          }],
          "should": [],
          "must": []
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

###Greater Than

To have a greaterThan constraint over a search filter you can use the <span class="tut-snippet">greaterThan</span> function.

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

==Java==
<span class="java-lines" data-query="greaterthan">
```
searchFilter.greaterThan("age",10);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="greaterthan">
```
searchFilter.GreaterThan("age", 10);
```
</span>

==cURL==
<span class="curl-lines" data-query="greaterthan">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "range": {
              "age": {
                "gt": 10
              }
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

###Less than

To have a lessThan constraint over a search filter you can use the <span class="tut-snippet">lessThan</span> function.

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

==Java==
<span class="java-lines" data-query="lessthan">
```
searchFilter.lessThan("age",10);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="lessthan">
```
searchFilter.LessThan("age", 10);
```
</span>

==cURL==
<span class="curl-lines" data-query="lessthan">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "range": {
              "age": {
                "lt": 10
              }
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

###Greater Than Or Equal To


To have a greaterThanEqualTo constraint over a search filter you can use the <span class="tut-snippet">greaterThanEqualTo</span> function.

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

==Java==
<span class="java-lines" data-query="greaterequal">
```
searchFilter.greaterThanEqualTo("age",10);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="greaterequal">
```
searchFilter.GreaterThanEqualTo("age", 10);
```
</span>

==cURL==
<span class="curl-lines" data-query="greaterequal">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "range": {
              "age": {
                "gte": 10
              }
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>

###Less Than Or Equal To


To have a lessThanEqualTo constraint over a search filter you can use the <span class="tut-snippet">lessThanEqualTo</span> function.

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

==Java==
<span class="java-lines" data-query="lessequal">
```
searchFilter.lessThanEqualTo("age",10);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="lessequal">
```
searchFilter.LessThanEqual("age", 10);
```
</span>

==cURL==
<span class="curl-lines" data-query="lessequal">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
        "bool": {
          "must_not": [],
          "should": [],
          "must": [{
            "range": {
              "age": {
                "lte": 10
              }
            }
          }]
        }
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="exists">
```
searchFilter.exists("name");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="exists">
```
searchFilter.Exists("name");
```
</span>

==cURL==
<span class="curl-lines" data-query="exists">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
    "query": {
  "filtered": {
    "query": {      
    },
    "filter": {
      "bool": {
        "must_not": [],
        "should": [],
        "must": [{
          "exists": {
            "field": "name"
          }
        }]
      }
    }
  }
},
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="notexists">
```
searchFilter.doesNotExists("name");
```
</span>

==.NET==
<span class="dotnet-lines" data-query="notexists">
```
searchFilter.DoesNotExists("name");
```
</span>

==cURL==
<span class="curl-lines" data-query="notexists">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
    "query": {
  "filtered": {
    "query": {      
    },
    "filter": {
      "bool": {
        "must_not": [],
        "should": [],
        "must": [{
            "missing": {
              "field": "name"
            }
          }]
      }
    }
  }
},
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="filteror">
```
SearchFilter searchFilter1 = new SearchFilter();
searchFilter1.equalTo("name", "John");
//
//your main searchQuery
searchFilter.or(searchFilter1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="filteror">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.EqualTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.Or(searchFilter1);
```
</span>

==cURL==
<span class="curl-lines" data-query="filteror">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
    "query": {
  "filtered": {
    "query": {      
    },
    "filter": {
      "bool": {
        "must_not": [],
        "should": [{            
          }],
          "must": [{
            "term": {
              "name": "John"
            }
          }]
        }
    }
  }
},
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="filterand">
```
SearchFilter searchFilter1 = new SearchFilter();
searchFilter1.equalTo("name", 'John');
//
//your main searchQuery
cs.searchFilter.and(searchFilter1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="filterand">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.EqualTo('name', 'John');
//
//your main searchQuery
cs.searchFilter.And(searchFilter1);
```
</span>

==cURL==
<span class="curl-lines" data-query="filterand">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
    "query": {
  "filtered": {
    "query": {      
    },
    "filter": {
      "bool": {
        "must_not": [],
        "should": [{            
          }],
          "must": [{
            "term": {
              "name": "John"
            }
          }]
        }
    }
  }
},
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="filternot">
```
SearchFilter searchFilter1 = new SearchFilter();
searchFilter1.equalTo("name", "John");
//
//your main searchQuery
searchFilter.not(searchFilter1);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="filternot">
```
var searchFilter1 = new CB.SearchFilter();
searchFilter1.EqualTo("name", "John");
//
//your main searchQuery
cs.searchFilter.Not(searchFilter1);
```
</span>

==cURL==
<span class="curl-lines" data-query="filternot">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [],
    "query": {
  "filtered": {
    "query": {      
    },
    "filter": {
      "bool": {
        "must_not": [],
        "should": [{            
          }],
          "must": [{
            "term": {
              "name": "John"
            }
          }]
        }
    }
  }
},
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="orderby">
```
CloudSearch cs = new CloudSearch("Student",null,null);
//
cs.orderByAsc('age'); 
// OR
cs.orderByDesc('age'); 
//
cs.search(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException t)	throws CloudException {
		if( t != null){
		}
		if(x.length <0){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="orderby">
```
var cs = new CB.CloudSearch("Student");
cs.OrderByAsc("age"); 
cs.OrderByDesc("age");
```
</span>

==cURL==
<span class="curl-lines" data-query="orderby">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 10,
  "sort": [{
    "name": {
      "order": "asc"
    }
  }],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
      }
    }
  },
  "skip": 0,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
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

==Java==
<span class="java-lines" data-query="limitskip">
```
CloudSearch cs = new CloudSearch("Student",null,null);
//
cs.limit(10); 
// OR
cs.skip(5); 
//
cs.search(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException t)	throws CloudException {
		if( t != null){
		}
		if(x!=null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="limitskip">
```
var cs = new CB.CloudSearch("Student");
cs.Limit = 10; 
cs.Skip = 5;
```
</span>

==cURL==
<span class="curl-lines" data-query="limitskip">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "limit": 5,
  "sort": [],
  "query": {
    "filtered": {
      "query": {        
      },
      "filter": {
      }
    }
  },
  "skip": 10,
  "collectionName": ${table_name}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/search'
```
</span>
