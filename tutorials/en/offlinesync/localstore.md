#####In this section

In this section you'll learn about using offline feature of  [CloudBoost]( https://cloudboost.io/). You will also learn how to save an instance of [CloudObject]( https://docs.cloudboost.io/#CloudObject) and query the local store  and much more.

In many cases, you need a powerful tool to save and query data in your database when your app is not connected to the internet.
[CB.CloudObject ](https://docs.cloudboost.io/#CloudObject) and [CB.CloudQuery ](https://docs.cloudboost.io/#CloudQuery) offers different ways to save and retrieve a list of objects you need in offline mode.

#[CloudObject ](https://docs.cloudboost.io/#CloudObject)

###Save object when app becomes online.

==JavaScript==
<span class="js-lines" data-query="saveEventually">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
obj.saveEventually({
    success : function(obj){
        console.log(obj);//It returns an array of objects that will be saved during CB.CloudObjct.sync().
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
        console.log(obj);//It returns an array of objects that will be saved during CB.CloudObjct.sync().
    },error : function(error){
        //error.  
    }
});
```
</span>

**Note :** obj.saveEventually() also pins the object to the local store

###Pin object to the local store

==JavaScript==
<span class="js-lines" data-query="pin">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
CB.CloudObject.pin(obj,{
    success : function(obj){
        console.log(obj);//It returns an array of objects that are stored in local store of the current table.
    },error : function(error){
        //error.  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="pin">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
CB.CloudObject.pin(obj,{
    success : function(obj){
          console.log(obj);//It returns an array of objects that are stored in local store of the current table.
    },error : function(error){
        //error.  
    }
});
```
</span>

###Pin multiple objects to the local store

==JavaScript==
<span class="js-lines" data-query="pinall">
```
var obj1 = new CB.CloudObject('Table1');
obj1.set('ColumnName', data);
var obj2 = new CB.CloudObject('Table2');
obj2.set('ColumnName', data);
var obj3 = new CB.CloudObject('Table3');
obj3.set('ColumnName', data);
CB.CloudObject.pin([obj1,obj2,obj3],{
    success : function(obj){
        console.log(obj);//It returns an array of objects for Table1,Table2,Table3 tables that are stored in local store
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="pinall">
```
var obj1 = new CB.CloudObject('Table1');
obj1.set('ColumnName', data);
var obj2 = new CB.CloudObject('Table2');
obj2.set('ColumnName', data);
var obj3 = new CB.CloudObject('Table3');
obj3.set('ColumnName', data);
CB.CloudObject.pin([obj1,obj2,obj3],{
    success : function(obj){
        console.log(obj);//It returns an array of objects for Table1,Table2,Table3 tables that are stored in local store
    },error : function(error){
        //error.  
    }
});
```
</span>

###Get objects of particular table from the local store

==JavaScript==
<span class="js-lines" data-query="fetchFromLocalStore">
```
CB.CloudObject.fetchFromLocalStore('TableName',{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="fetchFromLocalStore">
```
CB.CloudObject.fetchFromLocalStore('TableName',{
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

###Remove objects of particular table from the local store

==JavaScript==
<span class="js-lines" data-query="unPin">
```
CB.CloudObject.unPin('TableName',{
    success : function(){
        console.log('Done');
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="unPin">
```
CB.CloudObject.unPin('TableName',{
    success : function(){
        console.log('Done');
    },error : function(error){
        //error.  
    }
});
```
</span>

###Remove objects of all the tables from the local store

==JavaScript==
<span class="js-lines" data-query="unPinAll">
```
CB.CloudObject.unPinAll({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="unPinAll">
```
CB.CloudObject.unPinAll({
    success : function(){
        console.log('Done');
    },error : function(error){
        //error.  
    }
});
```
</span>

###Clear local store

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

**Note :** CB.CloudObject.unPinAll() doesn't clear the objects which will be saved using CB.CloudObject.sync() unlike CB.CloudObject.clearLocalStore()

###Save local objects to server.

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

#[CloudQuery ](https://docs.cloudboost.io/#CloudQuery)

###Query over objects stored in local stored

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
