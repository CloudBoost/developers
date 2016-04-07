#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an android app because it enables seamless communication from your server to your app. In this case your server will be **CloudBoost** Push notification server. One big problem with smart phones is excessive battery consumption due to constant activity by the many apps installed. An app which has push notification feature may reduce this problem because it does not have to keep polling the server for new information.

Not that **CloudBoost** server uses [Google Cloud Messaging](https://developers.google.com/cloud-messaging) to reach your app. So before you start using this feature, ensure that you have created a project for your app on google developer console and obtained credentials like senderID/Project_number and ApiKey. 

Also ensure that you have installed these credentials on your **CloudApp** settings from the CloudBoost dashboard.
Additionally, before any device running your app can receive any push notifications, it must register itself with GCM using the **instanceID** API and obtain a **registrationID**. After the launch of push notifications, every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation on android devices). So **registrationID** is stored as **deviceToken** in this table.

So as your app is loading for the first time, it must call the <span class="tut-snippet">CloudPush.addDevice</span> API after getting credentials from GCM instanceID API to register itself with your **CloudApp**, otherwise, it cannot receive any direct messages.

Check [this tutorial](http://egima.blogspot.ug/2016/03/androidcloudboost-push-notifications.html) that covers all the above set up in a demo app.

#Add device

Call this API as your Android application is loading for the first time in order to register itself to **CloudApp** to receive push notifications.

==Java==
<span class="java-lines" data-query="adddevice">
```
CloudPush push=new CloudPush();
String[] channels={"hackers","crackers"};
push.addDevice([xxxxxxxdeviceToken],[Timezone as String], channels, [appname], new CloudObjectCallback() {	
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
			//		
	}
});
```
</span>

#Add settings

Before your **CloudApp** is able to send any push notifications through GCM server, it should be able to authenticate itself to GCM. GCM will need your **CloudApp** to present it's requests with ApiKey and an Array of deviceTokens or a topic/channel.

==Java==
<span class="java-lines" data-query="addsettings">
```
CloudPush push=new CloudPush();
push.addSettings([senderId], [apikey], new ObjectCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//object is a json object with _id, _tableName
	}
});
```
</span>

#Push message

After correct set up, you can send push messages to all your clients with this API

==Java==
<span class="java-lines" data-query="sendmessage">
```
CloudPush push=new CloudPush();
push.send(new PushData("title", "my message"), [channels], new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>





