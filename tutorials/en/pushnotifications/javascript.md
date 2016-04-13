#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an app because it enables seamless communication from your server to your app even when your app is not in use by the user. 

#Setup

Note that **CloudBoost** uses

* [Google Cloud Messaging](https://developers.google.com/cloud-messaging) for Android Notifications.
* [Windows app store](https://developer.microsoft.com/en-us/windows) for Windows Notifications.
* iOS Notifications (Coming soon)

#Add Settings
Go to the App Settings page in [CloudBoost Dashboard](https://dashboard.cloudboost.io) and add the push notificaiton credentials to enable pushes in your app.

<img class="full-length-img" alt="Add App Settings" src="https://blog.cloudboost.io/content/images/2016/04/appSettings-1.jpg">

#Add device

Every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation of your app on your users devices). CloudBoost SDK automatically adds devices when the app is being installed and launched for th first time. To learn more, check out the platform guides below : 

Refer

* [Android Push notifications](/en/pushnotifications/android)
* [Windows Push notifications](/en/pushnotifications/windows)



#Push message

After correct set up, you can send push messages to all your clients with <span class="tut-snippet">CB.CloudPush.send()</span> function. Parameters

* Json data object as first parameter
	* message (required) : Message of your push notifications.
	* title   (optional) : Title of your push notifications.
	* icon    (optional) : Icon of your push notifications, only aplicable for Android and iOS.

* CloudQuery or Channels Array or Single Channel string (optional)	
* Callback function / Promise


==JavaScript==
<span class="js-lines" data-query="simplesend">
```
CB.CloudPush.send({message:"my first notifications"},{
    success:function(){
        //Success 
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Channels

Sometimes you would like to further modify the effect of your push operation. Particularly, you may want the message to be pushed to only devices that have subscribed to specific channels. You can do this by passing Channel Name.

==JavaScript==
<span class="js-lines" data-query="stringsend">
```
var channel="hackers";
//
CB.CloudPush.send({message:"my first notifications"},channel,{
    success:function(){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Multiple Channels

Alternatively, you could specify an array of channels to push the message to.
 
==JavaScript==
<span class="js-lines" data-query="arraysend">
```
var channels=["pirates","hackers"];
//
CB.CloudPush.send({message:"my first notifications"},channels,{
    success:function(){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Query on Push Notifications

Or, You can make queries on Device Table by using a **CloudQuery**.

==JavaScript==
<span class="js-lines" data-query="querysend">
```
var query = new CB.CloudQuery("Device");
query.containedIn('channels', "hackers");
//
CB.CloudPush.send({message:"my first notifications"},query,{
    success:function(){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

