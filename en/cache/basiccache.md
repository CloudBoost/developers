#####In this section

In this section you'll learn about how to use caching on cloudboost.

#Create a new Cache

Before you put and get data from the cache. You need to create a cache instance which can be done by calling create method of the <span class="tut-snippet">CB.CloudCache</span> instance. create method takes no parameters and returns an empty CB.CloudCache instance.

==JavaScript==
<span class="js-lines" data-query="create">
```
var cache = new CB.CloudCache('CacheName');
``  cache.create({
    success : function(cache){
        //cache is an empty the object of the CB.CloudCache instance.
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
})
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var cache = new CB.CloudCache('CacheName');
``  cache.create({
    success : function(cache){
        //cache is an empty the object of the CB.CloudCache instance.
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
})
```
</span>

#Adding an item into the Cache

To add an item into the Cache, you need to call the put method of the <span class="tut-snippet">CB.CloudCache</span> instance. <span class="tut-snippet">put</span> function takes in a key as the first parameter and an item of any datatype as the second parameter for example a user object.

==JavaScript==
<span class="js-lines" data-query="put">
```
var cache = new CB.CloudCache('CacheName');
cache.put('sample',{'name':'John Doe', 'age':24, 'sex':'MALE'}, {
    success : function(cache){
        //cache is the object that you added to the cache.
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="put">
```
var cache = new CB.CloudCache('CacheName');
cache.put('sample',{'name':'John Doe', 'age':24, 'sex':'MALE'}, {
    success : function(cache){
        //cache is the object that you added to the cache.
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Getting an item from the cache

To get an item from the Cache, you need to call the get method of the <span class="tut-snippet">CB.CloudCache</span> instance with the parameter of the item key.

==JavaScript==
<span class="js-lines" data-query="get">
```
cache.get('sample',{
    success : function(cache){
        //cache is the object that you added to the cache..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="get">
```
cache.get('sample',{
    success : function(cache){
        //cache is the object that you added to the cache..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Getting all the cache items

To get all the Cache items, you need to call the getAll method of the <span class="tut-snippet">CB.CloudCache</span> instance with no parameters.

getAll method returns an array of all the items stored in the cache.

==JavaScript==
<span class="js-lines" data-query="getall">
```
cache.getAll({
    success : function(cacheItems){
        //cacheItems is an array of all the items stored in that cache instance..
        console.log(cacheItems);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getall">
```
cache.getAll({
    success : function(cacheItems){
        //cacheItems is an array of all the items stored in that cache instance..
        console.log(cacheItems);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Getting cache items count

To get the number of items stored in the cache, you need to call the getItemsCount method of the <span class="tut-snippet">CB.CloudCache</span> instance with no parameters.

getItemsCount method returns the number of items stored in the cache.

==JavaScript==
<span class="js-lines" data-query="getitemscount">
```
cache.getItemsCount({
    success : function(noOfCacheItems){
        //noOfCacheItems is the number of items stored in the cache instance..
        console.log(noOfCacheItems);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getitemscount">
```
cache.getItemsCount({
    success : function(noOfCacheItems){
        //noOfCacheItems is the number of items stored in the cache instance..
        console.log(noOfCacheItems);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Getting the size of the cache

To get the size of the  cache, you need to call the getInfo method of the <span class="tut-snippet">CB.CloudCache</span> instance with no parameters.

getInfo method returns the size of the cache in kilobytes(kb).

==JavaScript==
<span class="js-lines" data-query="getinfo">
```
cache.getInfo({
    success : function(cacheSize){
        //cacheSize is the size of the cache..
        console.log(cacheSize);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getinfo">
```
cache.getInfo({
    success : function(cacheSize){
        //cacheSize is the size of the cache..
        console.log(cacheSize);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>



#Clearing an instance of the cache

To clear an instance of the cache, you need to call the clear method of the <span class="tut-snippet">CB.CloudCache</span> instance with no parameters.

clear method returns an empty cache object which is an instance of the CB.CloudCache.
the object is of the following format.
 { _type : 'cache', name: 'cacheName', size : '0kb' };

==JavaScript==
<span class="js-lines" data-query="clear">
```
cache.clear({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="clear">
```
cache.clear({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Deleting an instance of the cache

To delete an instance of the cache, you need to call the delete method of the <span class="tut-snippet">CB.CloudCache</span> instance with no parameters.

delete method returns an empty cache object which is an instance of the CB.CloudCache.
the object is of the following format.
 { _type : 'cache', name: 'cacheName', size : '0kb' };

==JavaScript==
<span class="js-lines" data-query="delete">
```
cache.delete({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="delete">
```
cache.delete({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Getting all the app caches

To get all the app caches, you need to call the getAll method a static method of the <span class="tut-snippet">CB.CloudCache</span>  with no parameters.

getAll method returns a cache object which  contains all the caches of the app.
the object is of the following format.
 { _type : 'cache', name: 'cacheName', size : 'sizeOfAppCache', items: [] };

==JavaScript==
<span class="js-lines" data-query="getallappcache">
```
CB.CloudCache.getAll({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getallappcache">
```
CB.CloudCache.getAll({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Deleting all the app caches

To delete all the app caches, you need to call the deleteAll method a static method of the <span class="tut-snippet">CB.CloudCache</span>  with no parameters.

deleteAll method returns an empty cache object.
the object is of the following format.
 { _type : 'cache', name: 'cacheName', size : 'sizeOfAppCache', items: [] };

==JavaScript==
<span class="js-lines" data-query="deleteallappcache">
```
CB.CloudCache.deleteAll({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="deleteallappcache">
```
CB.CloudCache.deleteAll({
    success : function(cache){
        //cache is the an empty instance of CB.CloudCache ..
        console.log(cache);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

#Name

To get name of the cache, you need to call the name property on the <span class="tut-snippet">CB.CloudCache</span> .

name property returns the name of the cache .

==JavaScript==
<span class="js-lines" data-query="name">
``var cache = new CB.CloudCache('sample');
  var cacheName = cache.name;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="name">
```
var cache = new CB.CloudCache('sample');
  var cacheName = cache.name;
```
</span>


#Size

To get size of the cache, you need to call the size property on the <span class="tut-snippet">CB.CloudCache</span> .

size property returns the size of the cache in kilobytes(kb).

==JavaScript==
<span class="js-lines" data-query="size">
``var cache = new CB.CloudCache('sample');
  var cacheSize = cache.size;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="size">
```
var cache = new CB.CloudCache('sample');
  var cacheSize = cache.size;
```
</span>

#Items

To get the array of items stored in the cache, you need to call the items property on the <span class="tut-snippet">CB.CloudCache</span> .

items property returns an array of items in the cache .

==JavaScript==
<span class="js-lines" data-query="items">
``var cache = new CB.CloudCache('sample');
  var cacheItems = cache.items;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="items">
```
var cache = new CB.CloudCache('sample');
  var cacheItems = cache.items;
```
</span>


