#####In this section

CloudBoost makes it a lot easier to build real-time apps, and gives you features out of the box that helps you implement web-socket notifications to make your apps real time and feature rich. 

CloudBoost.io supports two types of real-time notifications which will make your life as a developer a lot easier: 

* Custom Realtime Notification which we will see here. 
* CloudObject Notifications which we will see in the [next](?lang=en&category=realtime&subcategory=cloudobjectnotifications) section.

#Custom Real-time Notifications 

Custom Real time Notifications will be useful if you're sending any custom data. For example: You're building a chat application where user can chat with one another in which they're sending custom messages. This is a perfect example of this type of scenario.  

To build this you we need two things

* Listen to the channels from one end. 
* Publish messages to those channels. 

##Listening to channels

Data is delivered to you in something we call as channels. Channels are basically a pathway where you send and receive the data. Data that is published to For example, Channel *X* will be sent to client who actively listen to Channel *X*

To listen to a channel, you basically need to attach a callback to the "on" function of CloudNotification object. 

==JavaScript==
<span class="js-lines" data-query="on">
```
CB.CloudNotification.on('ChannelName',function(data){
		//data can be anything you publish to a channel. Can be a string, number, object etc. 
}});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="on">
```
CB.CloudNotification.on('ChannelName',function(data){
		//data can be anything you publish to a channel. Can be a string, number, object etc. 
}});
```
</span>

==Java==
<span class="java-lines" data-query="on">
```
CloudNotification.on('ChannelName',new CloudNotificationCallback(){
		//data can be anything you publish to a channel. Can be a string, number, object etc. 
}});
```
</span>

##Publishing messages to channels

Now as we're listening to channel form one side and we can publish messages to those channels to fire the callback which was attached to the event. 

==JavaScript==
<span class="js-lines" data-query="publish">
```
CB.CloudNotification.publish('ChannelName','data');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="publish">
```
CB.CloudNotification.publish('ChannelName','data');
```
</span>

==Java==
<span class="java-lines" data-query="publish">
```
CloudNotification.publish('ChannelName','data');
```
</span>

##Stop listening

To stop listening to notifications from Channels you need to call the <span class="tut-snippet"> off</span> method/function of CloudNotifications class.

==JavaScript==
<span class="js-lines" data-query="off">
```
CB.CloudNotification.off('ChannelName');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="off">
```
CB.CloudNotification.off('ChannelName');
```
</span>

==Java==
<span class="java-lines" data-query="off">
```
CloudNotification.off('ChannelName');
```
</span>

#####What's next?

In the [next section](?lang=en&category=realtime&subcategory=cloudobjectnotifications) we will basically fire event notifications when the CloudObject is created, updated or deleted. We can also have queries over notifications which will help you add extra level of flexibility to your code.
