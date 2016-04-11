#####In this section

In this section, you will learn about using push notifications in your apps with **CloudBoost**. Push notifications are a very important feature in an windows app because it enables seamless communication from your server to your app. In this case your server will be **CloudBoost** Push notification server. One big problem with smart phones is excessive battery consumption due to constant activity by the many apps installed. An app which has push notification feature may reduce this problem because it does not have to keep polling the server for new information.

Not that **CloudBoost** server uses [Windows Notification Service](https://msdn.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-windows-push-notification-services--wns--overview) to reach your app. So before you start using this feature, ensure that you have created a project for your app on [windows app store](https://developer.microsoft.com/en-us/windows) and obtained credentials like package SID/client secret and ApiKey.

Also ensure that you have installed these credentials on your **CloudApp** settings from the CloudBoost [dashboard](https://dashboard.cloudboost.io/).
Additionally, before any device running your app can receive any push notifications, it must register itself with Windows App Store using the **PushNotificationManager** library and obtain a **channel Uri**. After the launch of push notifications, every new **CloudApp** comes with a table called **Device**. This table stores details of all instances of your app (i.e. every running installation on windows devices). So **channel Uri** is stored as **deviceToken** in this table.

So as your app is loading for the first time, it must call the <span class="tut-snippet">CloudPush.InitAsync</span> API after getting credentials from GCM instanceID API to register itself with your **CloudApp**, otherwise, it cannot receive any direct messages.

#Initialize device

Call this API as your Windows application is loading for the first time in order to register itself to **CloudApp** to receive push notifications.

==.NET==
<span class="dotnet-lines" data-query="adddevice">
```
var push = new CB.CloudPush();
var list = new ArrayList();
list.add("hackers");
list.add("crackers");
push.Channel = list;
await push.InitAsync();
```
</span>

#Push message

After correct set up, you can send push messages to all your clients with this API

==.NET==
<span class="dotnet-lines" data-query="sendmessage">
```
var push = new CB.CloudPush();
await push.InitAsync();
var message = new Dictionary<string, object>();
message["text1"] = "Hello";
message["text2"] = "How are you?";
push.Message = message;
push.Type = 'toast'; //other valid options 'badge', 'tile', 'raw'
await push.SendAsync();
```
</span>

#Receive Message

To recive a push notification, you can use this method.

==.NET==
<span class="dotnet-lines" data-query="receivemessage">
```
CB.CloudPush.CBPushNotificationReceived(new Callback(action));
void action(PushNotificationChannel sender, PushNotificationReceivedEventArgs args){
  switch (args.NotificationType)
  {
      case PushNotificationType.Badge:
          //args.BadgeNotification.Content.GetXml();
          break;

      case PushNotificationType.Tile:
          //args.TileNotification.Content.GetXml();
          break;

      case PushNotificationType.Toast:
          //args.ToastNotification.Content.GetXml();
          break;

      case PushNotificationType.Raw:
          //args.RawNotification.Content;
          break;
  }
}
```
</span>
