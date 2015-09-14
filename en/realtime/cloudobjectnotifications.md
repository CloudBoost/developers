#####In this section

In the previous section we've learnt how to build real-time apps on your own custom notifications, create channels and publish messages to those channels. 

Just to recap, CloudBoost.io supports two types of real-time notifications which will make your life as a developer a lot easier :

* Custom Realtime Notification which we have seen in the [previous]() section.
* CloudObject Notifications which we will see here.

#CloudObject Notifications

Real-time database notification happens when you want to listen to a specific event from the database. For example : If you're building a social networking app, you might want the feeds to be appear on your page when your friends posts something. In this case, if we have an object that is created and inserted into that table, we want listen to that particular event and auto update the page when that notification happens

==JavaScript==
```
CB.CloudObject.on('TableName', 'created', function(obj){ 
});
```
==NodeJS==
```
CB.CloudObject.on('TableName', 'created', function(obj){ 
});
```

Event can be of three types : **created**, **updated** and **deleted**. You can listen to any or all of the events on any table you like. 

You can even add events as an array. For example : 

==JavaScript==
```
CB.CloudObject.on('TableName', ['created','updated'], function(obj){ 
});
```
==NodeJS==
```
CB.CloudObject.on('TableName', ['created','updated'], function(obj){ 
});
```

>Info: CloudObject Notifications are only fired when that particular client has a read access to that object. Please read a section on [ACL]() for more information. 


#Queries over notifications 

You also can have queries over notifications, and can listen to obly those objects which satisfy that query. 

For example : 

==JavaScript==
```
var query = new CB.CloudQuery('Student');
query.equalTo('age',10);

CB.CloudObject.on('Student', 'created', query, function(obj){ 
	//only fires when age is equalTo 10.
});
```
==NodeJS==
```
var query = new CB.CloudQuery('Student');
query.equalTo('age',10);

CB.CloudObject.on('Student', 'created', query, function(obj){ 
	//only fires when age is equalTo 10.
});
```

#Stop listening

To stop lisening. You can call the `off` method/function of CloudObject class and pass the event as a second parameter which you want to stop listening to. 

For example : 

==JavaScript==
```
CB.CloudObject.off('Student', 'created');
```
==NodeJS==
```
CB.CloudObject.off('Student', 'created');
```

#####What's next? 

These are two very simple but different and useful strategies of working with Real-time Notifications with CloudBoost.io which will help you build much richer apps saving you a ton of time. 

In the next section we will see how to create tables dynamically using the SDK. 
