#####In this section

In the [previous section](?lang=en&category=realtime&subcategory=customnotifications) we've learnt how to build real-time apps on your own custom notifications, create channels and publish messages to those channels.

Just to recap, CloudBoost.io supports two types of real-time notifications which will make your life as a developer a lot easier:

* Custom Realtime Notification which we have seen in the [previous](?lang=en&category=realtime&subcategory=customnotifications) section.
* CloudObject Notifications which we will see here.

#CloudObject Notifications

Real-time database notification happens when you want to listen to a specific event from the database. For example: If you're building a social networking app, you might want the feeds to be appear on your page when your friends posts something. In this case, if we have an object that is created and inserted into that table, we want listen to that particular event and auto update the page when that notification happens

==JavaScript==
<span class="js-lines" data-query="create">
```
CB.CloudObject.on('TableName', 'created', function(obj){
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
CB.CloudObject.on('TableName', 'created', function(obj){
});
```
</span>

==cURL==
<span class="curl-lines" data-query="create">
```
//
```
</span>

Event can be of three types: **created**, **updated** and **deleted**. You can listen to any or all of the events on any table you like.

You can even add events as an array. For example:

==JavaScript==
<span class="js-lines" data-query="createupdate">
```
CB.CloudObject.on('TableName', ['created','updated'], function(obj){
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="createupdate">
```
CB.CloudObject.on('TableName', ['created','updated'], function(obj){
});
```
</span>

==cURL==
<span class="curl-lines" data-query="createupdate">
```
//
```
</span>

>Info: CloudObject Notifications are only fired when that particular client has a read access to that object. Please read a section on [ACL](?lang=en&category=security&subcategory=acl) for more information.


#Queries over notifications

You also can have queries over notifications, and can listen to only those objects which satisfy that query.

For example:

==JavaScript==
<span class="js-lines" data-query="query">
```
var query = new CB.CloudQuery('Student');
query.equalTo('age',10);
//
CB.CloudObject.on('Student', 'created', query, function(obj){
	//only fires when age is equalTo 10.
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query">
```
var query = new CB.CloudQuery('Student');
query.equalTo('age',10);
//
CB.CloudObject.on('Student', 'created', query, function(obj){
	//only fires when age is equalTo 10.
});
```
</span>

==curl==
<span class="curl-lines" data-query="query">
```
//
```
</span>

#Stop listening

To stop listening. You can call the <span class="tut-snippet"> off</span> method/function of CloudObject class and pass the event as a second parameter which you want to stop listening to.

For example:

==JavaScript==
<span class="js-lines" data-query="off">
```
CB.CloudObject.off('Student', 'created');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="off">
```
CB.CloudObject.off('Student', 'created');
```
</span>

==cURL==
<span class="curl-lines" data-query="off">
```
//
```
</span>

#####What's next?

These are two very simple but different and useful strategies of working with Real-time Notifications with CloudBoost.io which will help you build much richer apps saving you a ton of time.

In the [next section](?lang=en&category=schema&subcategory=cloudtables) we will see how to create tables dynamically using the SDK.
