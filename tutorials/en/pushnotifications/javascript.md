#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an app because it enables seamless communication from your server to your app. In this case your server will be **CloudBoost** Push notification server.

#Setup

Note that **CloudBoost** server uses

* [Google Cloud Messaging](https://developers.google.com/cloud-messaging) for android notifications.
* [Windows app store](https://developer.microsoft.com/en-us/windows) for windows notifications.

Create a project for your app on respective developer console and obtained credentials.

#Add Settings
Go to the App Settings page in [CloudBoost Dashboard](https://dashboard.cloudboost.io) and add the credentials for respective platform which you want enable push notifications.

<img class="full-length-img" alt="Add App Settings" src="https://blog.cloudboost.io/content/images/2016/04/appSettings-1.jpg">

#Add device

Every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation on your devices). Adding Devices can be done through respective platform sdks. 
Refer

* [Android Push notifications](/en/pushnotifications/android)
* [Windows Push notifications](/en/pushnotifications/windows)



#Push message

After correct set up, you can send push messages to all your clients with <span class="tut-snippet">CB.CloudPush.send()</span> function. It takes following params

* Json data object as first parameter
	* message (required) : Message of your push notifications.
	*   title (optional) : Title of your push notifications.
	*     icon (optional) : Icon of your push notifications, only aplicable for android and IOS.


* cloudQuery or Channels Array or Single Channel string (optional)	
* callback function


==JavaScript==
<span class="js-lines" data-query="simplesend">
```
CB.CloudPush.send({message:"my first notifications"},{
    success:function(data){
        //Success message
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Channel String on push

Sometimes you would like to further modify the effect of your push operation. Particularly, you may want the message to be pushed to only devices that have subscribed to specific channels. You can do this by passing Channel Name.

==JavaScript==
<span class="js-lines" data-query="stringsend">
```
var channelString="hackers";
//
CB.CloudPush.send({message:"my first notifications"},channelString,{
    success:function(data){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Channel array on push

Alternatively, you could specify an array of channels to push the message to.
 
==JavaScript==
<span class="js-lines" data-query="arraysend">
```
var channelArray=["pirates","hackers"];
//
CB.CloudPush.send({message:"my first notifications"},channelArray,{
    success:function(data){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

#Query on push

Or, You can make queries on Device by wrapping the command inside a **CloudQuery**.

==JavaScript==
<span class="js-lines" data-query="querysend">
```
var query = new CB.CloudQuery("Device");
query.containedIn('channels', "hackers");
//
CB.CloudPush.send({message:"my first notifications"},query,{
    success:function(data){
        //Success
    },
    error:function(error){
        //Error
    }
});
```
</span>

