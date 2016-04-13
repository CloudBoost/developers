#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an android app because it enables seamless communication from your server to your app. In this case your server will be **CloudBoost** Push notification server. One big problem with smart phones is excessive battery consumption due to constant activity by the many apps installed. An app which has push notification feature may reduce this problem because it does not have to keep polling the server for new information.

Note that **CloudBoost** server uses [Google Cloud Messaging](https://developers.google.com/cloud-messaging) to reach your app. So before you start using this feature, ensure that you have created a project for your app on google developer console and obtained credentials like senderID/Project_number and ApiKey.

Also ensure that you have installed these credentials on your **CloudApp** settings from the CloudBoost dashboard.
Additionally, before any device running your app can receive any push notifications, it must register itself with GCM using the **instanceID** API and obtain a **registrationID**. After the launch of push notifications, every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation on android devices). So **registrationID** is stored as **deviceToken** in this table.

So as your app is loading for the first time, it must call the <span class="tut-snippet">CloudPush.addDevice</span> API after getting credentials from GCM instanceID API to register itself with your **CloudApp**, otherwise, it cannot receive any direct messages.

Check [this tutorial](http://egima.blogspot.ug/2016/03/androidcloudboost-push-notifications.html) that covers all the above set up in a demo app.

#Add device

Call this API as your Android application is loading for the first time in order to register itself to **CloudApp** to receive push notifications.

==Java==
<span class="java-lines" data-query="adddevice">
```
String[] channels={"hackers","crackers"};
CloudPush.addDevice([xxxxxxxdeviceToken],[Timezone as String], channels,new CloudObjectCallback() {
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Subscribe to channel

In case you would like to subscribe a device to a given channel, use this API

==Java==
<span class="java-lines" data-query="subscribesinglechannel">
```
CloudPush.subscribe("movers", "deviceToken", new CloudObjectCallback() {	
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

Alternatively, you could specify an array of channels to subscribe to

==Java==
<span class="java-lines" data-query="subscribechannelarray">
```
String[] channels={"movers","shakers"};
CloudPush.subscribe(channels, "xxxxxxxxxxxx", new CloudObjectCallback() {	
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
		//
	}
});
```
</span>
		
#Unsubscribe from channel

In case you would like to stop receiving push messages from a certain channel, call this API

==Java==
<span class="java-lines" data-query="unsubscribesinglechannel">
```
CloudPush.unSubscribe("movers", "xxxxxxxxxxxx", new CloudObjectCallback() {	
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

Alternatively, you could specify an array of channels to unsubscribe from

==Java==
<span class="java-lines" data-query="unsubscribechannelarray">
```
String[] channels={"movers","shakers"};
CloudPush.unSubscribe(channels, "xxxxxxxxxxxx", new CloudObjectCallback() {	
	@Override
	public void done(CloudObject x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Push message

After correct set up, you can send push messages to all your clients with this API. One option is to encapsulate all attributes of the push message in a PushData object.

==Java==
<span class="java-lines" data-query="sendmessage">
```
PushData data=new PushData();
data.setTitle("title");
data.setMessage("message");
data.setIcon("icon_name");
CloudPush.send(data, [channels], new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Push only title

Or you could specify only a title.

==Java==
<span class="java-lines" data-query="sendtitle">
```
String[] channels={"movers","shakers"};
CloudPush.send("title", channels, new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Push only message

Or you could specify only a title and message.

==Java==
<span class="java-lines" data-query="sendtitleandmessage">
```
String[] channels={"movers","shakers"};
CloudPush.send("title","message", channels, new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Query on push

Sometimes you would like to further modify the effect of your push operation. Particularly, you may want the message to be pushed to only devices that have subscribed to specific channels. You can do this by wrapping the command inside a **CloudQuery**.

==Java==
<span class="java-lines" data-query="sendquery">
```
String[] channels={"movers","shakers"};
CloudQuery query=new CloudQuery("Device");
query.containedIn("channels", channels);
CloudPush.send(new PushData("title", "my message"), query, new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Channel on push

Alternatively, you could just specify a single channel during the push operation, instead of using a CloudQuery.

==Java==
<span class="java-lines" data-query="sendchannel">
```
CloudPush.send(new PushData("title", "my message"), "movers", new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>

#Channel array on push

Or you could specify an array of channels to push the message to.

==Java==
<span class="java-lines" data-query="sendchannelarray">
```
String[] channels={"movers","shakers"};
CloudPush.send(new PushData("title", "my message"), channels, new CloudPushCallback() {
	@Override
	public void done(Object x, CloudException t) throws CloudException {
		//
	}
});
```
</span>


