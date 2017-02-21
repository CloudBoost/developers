#####In this section

In this section you'll learn about using offline features of[CloudBoost]( https://cloudboost.io/). You will also learn how to save an instance of [CloudObject]( https://docs.cloudboost.io/#CloudObject) and query it from your local store and much more.

[CloudObject](https://docs.cloudboost.io/#CloudObject) is a powerful class which has functions to save data in your local store when your app is not connected to the internet.
[CloudObject](https://docs.cloudboost.io/#CloudObject) and [CB.CloudQuery ](https://docs.cloudboost.io/#CloudQuery) offers different ways to save and retrieve a list of objects you need when your app is in offline mode.

#Save

###Save object when app becomes online.

Saving a CloudObject eventually will save an object automatically when your app is connected to the internet.

==JavaScript==
<span class="js-lines" data-query="saveEventually">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
obj.saveEventually({
    success : function(obj){
        console.log(obj); 
    },error : function(error){
        //error.  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="saveEventually">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
obj.saveEventually({
    success : function(obj){
        console.log(obj); 
    },error : function(error){
        //error.  
    }
});
```
</span>

**Note :** obj.saveEventually() also pins the object to the local store.

###Pin an Object to the local store

Pinning an object will save an object in your local store which you can query when your app is offline. 

==JavaScript==
<span class="js-lines" data-query="pin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.pin(obj,{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="pin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.pin(obj,{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

###Pin multiple objects to the local store

Pinning multiple objects will save them in your local store which you can query when your app is offline. 

==JavaScript==
<span class="js-lines" data-query="pinall">
```
//obj1, obj2 and obj3 are instances of CloudObject, CloudUser, or CloudRole class. 
CB.CloudObject.pin([obj1,obj2,obj3],{
    success : function(list){
        console.log(list);
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="pinall">
```
//obj1, obj2 and obj3 are instances of CloudObject, CloudUser, or CloudRole class. 
CB.CloudObject.pin([obj1,obj2,obj3],{
    success : function(list){
        console.log(list);
    },error : function(error){
        //error  
    }
});
```
</span>


###Remove object from the local store

Unpin removes a saved object from your local store. 

==JavaScript==
<span class="js-lines" data-query="unPin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.unPin(obj,{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="unPin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.unPin(obj,{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error  
    }
});
```
</span>

###Remove multiple object from the local store

Unpin also removes multiple saved objects from your local store. 

==JavaScript==
<span class="js-lines" data-query="unPin">
```
//obj1,obj2,obj3 is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.unPin([obj1,obj2,obj3],{
    success : function(list){
        console.log(list);
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="unPin">
```
//obj1, obj2, obj3 is an instance of CloudObject, CloudUser, or CloudRole.
CB.CloudObject.unPin([obj1,obj2,obj3],{
    success : function(list){
        console.log(list);
    },error : function(error){
        //error  
    }
});
```
</span>


###Clear local store

Clear everything from local store

==JavaScript==
<span class="js-lines" data-query="clearLocalStore">
```
CB.CloudObject.clearLocalStore({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="clearLocalStore">
```
CB.CloudObject.clearLocalStore({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error.  
    }
});
```
</span>

###Save local objects to server.

Save local changes on objects to the server. 

==JavaScript==
<span class="js-lines" data-query="sync">
```
CB.CloudObject.sync({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="sync">
```
CB.CloudObject.sync({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error.  
    }
});
```
</span>

#Query

###Query objects stored in local store

==JavaScript==
<span class="js-lines" data-query="findFromLocalStore">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name', 'John');
query.greaterThan('age', 10);
query.findFromLocalStore({
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
<span class="nodejs-lines" data-query="findFromLocalStore">
```
var query = new CB.CloudQuery("Student");
query.equalTo('name', 'John');
query.greaterThan('age', 10);
query.findFromLocalStore({
  success: function(list){
    //list is an array of CloudObjects
  },
  error: function(error) {
    //Error in retrieving the data.
  }
});
```
</span>
