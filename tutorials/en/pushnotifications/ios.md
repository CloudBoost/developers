#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an android app because it enables seamless communication from your server to your app. In this case your server will be **CloudBoost** Push notification server.

**CloudBoost** server uses Apple Push Notification Services(APNS) to reach your app. So before you start using this feature, ensure that you have a developer's account with Apple and you have acquired a push notifications certificate for your application. From the certificate, acquire a .p12 file without a passphrase

Also ensure that you have uploaded the .p12 file on your **CloudApp** settings from the CloudBoost dashboard. You particularly do this by opening your app in the dashboard and going to settings:
<p>&nbsp;</p>
<img class="full-length-img" alt="GCM Credentials" src="https://blog.cloudboost.io/content/images/2016/04/appSettings-1.jpg">
<p>&nbsp;</p>

Additionally, before any device running your app can receive any push notifications, it must register itself with APNS and acquire a deviceToken. After the launch of push notifications, every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation on iOS devices).

So as your app is loading for the first time, it must call the <span class="tut-snippet">CloudPush.addDevice</span> API after getting credentials from APNS to register itself with your **CloudApp**, otherwise, it cannot receive any direct messages.


#Add device

Call this API as your iOS application is loading for the first time in order to register itself to **CloudApp** to receive push notifications.

==Swift==
<span class="ios-lines" data-query="adddevice">
```
let obj = CloudObject(tableName: "Device")
obj.set("deviceToken", value: "YOUR-DEVICE-TOKEN")
obj.set("deviceOS", value: "iOS")
obj.set("timezone", value: "chile")
obj.set("channels", value: ["pirates","hackers"])

obj.save() { response in
  if response.success{
    // device created, save the device object ID or the device Token to query for your device
  }
}
```
</span>

#Subscribe to channel

In case you would like to subscribe a device to a given channel, use this API. Otherwise, by default, all devices are subscribed to the <span class="tut-snippet">global</span> channel, which you can use to send bulk push to all your app instances.

==Swift==
<span class="ios-lines" data-query="singlesubscribe">
```
obj.set("channels", value: "pirates")
obj.save(){ response in
  // subscribed to the channels
}
```
</span>

Alternatively, you could specify an array of channels to subscribe to

==Swift==
<span class="ios-lines" data-query="arraysubscribe">
```
obj.set("channels", value: ["pirates","hackers","movers"])
obj.save(){ response in
  // subscribed to the channels
}
```
</span>


#PushData send

After correct set up, you can send push messages to all your clients with this API. One option is to encapsulate all attributes of the push message in a PushData object.

==Swift==
<span class="ios-lines" data-query="sendmessage">
```
// notification message
let pushData = ["title":"RT Bathula", "message":"check this, from iOS"]

try! CloudPush.send(pushData, callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>

#Push message

Or you could specify only a message.

==Swift==
<span class="ios-lines" data-query="simplesend">
```
// notification message
let pushData = ["message":"check this, from iOS"]

try! CloudPush.send(pushData, callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>

#Push title and message

Or you could specify only a title and message.

==Swift==
<span class="ios-lines" data-query="sendtitleandmessage">
```
// notification message
let pushData = ["title":"RT Bathula", "message":"check this, from iOS"]

try! CloudPush.send(pushData, callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>

#Channel

Alternatively, you could just specify a single channel during the push operation, instead of using a CloudQuery.

==Swift==
<span class="ios-lines" data-query="stringsend">
```
// notification message
let pushData = ["title":"RT Bathula", "message":"check this, from iOS"]

try! CloudPush.send(pushData, channel: "hackers", callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>

#Multiple channels

Or you could specify an array of channels to push the message to.

==Swift==
<span class="ios-lines" data-query="arraysend">
```
// notification message
let pushData = ["title":"RT Bathula", "message":"check this, from iOS"]

try! CloudPush.send(pushData, channels: ["hackers","pirates"], callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>

#Query on push

Sometimes you would like to further modify the effect of your push operation. Particularly, you may want the message to be pushed to only devices that have subscribed to specific channels. You can do this by wrapping the command inside a **CloudQuery**.

==Swift==
<span class="ios-lines" data-query="querysend">
```
// notification message
let pushData = ["title":"RT Bathula", "message":"check this, from iOS"]
// query the devices to push the message to
let query = CloudQuery(tableName: "Device")
try! query.containedIn("channels", data: ["hackers"])

try! CloudPush.send(pushData, query: query, callback: { response in
  if response.success {
    // successfully pushed the notification
  }
})
```
</span>
