#####In this section

In this section you'll learn about using offline features of [CloudBoost]( https://cloudboost.io/). You will also learn how to save an instance of [CloudObject]( https://docs.cloudboost.io/#CloudObject) and query it from your local store and a lot more.

[CloudObject](https://docs.cloudboost.io/#CloudObject) is a powerful class which has functions to save data in your local store when your app is not connected to the internet.
[CloudObject](https://docs.cloudboost.io/#CloudObject) and [CB.CloudQuery ](https://docs.cloudboost.io/#CloudQuery) offers different ways to save and retrieve a list of objects you need when your app is in offline mode.

#Save Eventually

When your app is offline save eventually will add your object to the save queue locally and will wait until your app is connected to the server. As soon as your app connects to the internet, your object will be saved.

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

#Disable Sync

Disabling the sync would dequeue the object from saving. If you've queued the object with save eventually and want to undo or dequeue it. You can use disable sync.

==JavaScript==
<span class="js-lines" data-query="disableSync">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
obj.disableSync({
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="disableSync">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
obj.disableSync({
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

#Pin an Object

Pinning an object will save an object in your local store which you can query when your app is offline.

==JavaScript==
<span class="js-lines" data-query="pin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
obj.pin({
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
obj.pin({
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error.  
    }
});
```
</span>

#Pin multiple objects

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


#Unpin an object.

Unpin removes a pinned object from your local store.

==JavaScript==
<span class="js-lines" data-query="unPin">
```
//obj is an instance of CloudObject, CloudUser, or CloudRole.
obj.unPin({
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
obj.unPin({
    success : function(obj){
        console.log(obj);
    },error : function(error){
        //error  
    }
});
```
</span>

#Unpin multiple objects

Unpin also take in an array of objects which removes them from your local store.

==JavaScript==
<span class="js-lines" data-query="unPinAll">
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
<span class="nodejs-lines" data-query="unPinAll">
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


#Clear local store

Clear everything from your apps local store.

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

#Sync Manually.

When your app is connected to the internet. Your data will be syned automatically. If you want to do a manual sync, you can do so by calling a `sync` function on `CloudObject`

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

#Query Objects

You can query local pinned objects on your local store by using `findFromLocalStore` function of the `CloudQuery` class.

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


#Connection methods

###`_isConnected`

You can check whether your app is connected to the internet or not.

==JavaScript==
<span class="js-lines" data-query="isConnected">
```
if(CB.CloudApp._isConnected)
{
  console.log('Hurray! I am feeling connected.');
}
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="isConnected">
```
if(CB.CloudApp._isConnected)
{
  console.log('Hurray! I am feeling connected.');
}
```
</span>

###connect()

You can manually connect your app to the internet.

==JavaScript==
<span class="js-lines" data-query="connect">
```
CB.CloudApp.connect();
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="connect">
```
CB.CloudApp.connect();
```
</span>

###disconnect()

You can manually disconnect your app to the internet.

==JavaScript==
<span class="js-lines" data-query="disconnect">
```
CB.CloudApp.disconnect();
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="disconnect">
```
CB.CloudApp.disconnect();
```
</span>

###onConnect()

You can pass a function which fires when your app is connected to the internet.

==JavaScript==
<span class="js-lines" data-query="onConnect">
```
CB.CloudApp.onConnect(function(){
  console.log('App connected.');
  });
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="onConnect">
```
CB.CloudApp.onConnect(function(){
  console.log('App connected.');
  });
```
</span>

###onDisconnect()

You can pass a function which fires when your app is disconnected from the internet.

==JavaScript==
<span class="js-lines" data-query="onDisconnect">
```
CB.CloudApp.onDisconnect(function(){
  console.log('App disconnected.');
  });
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="onDisconnect">
```
CB.CloudApp.onDisconnect(function(){
  console.log('App disconnected.');
  });
```
</span>
