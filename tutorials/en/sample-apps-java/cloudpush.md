#####In this section
In this section, I will discuss using a demo app how to use push notifications in your CloudBoost app using the JavaSDK. Since over 90% of our Java developer clients are using android, we have added some features in <span class="tut-snippet">JavaSDK-1.2</span> that make life easier for android developers. It goes without saying that from this version onwards, the JavaSDK will only work in the android environment. 
><span class="tut-imp">Important:</span> For developers using other Java environments, all versions prior to 1.2 are still valid and we shall maintain support for them as we have been doing till further notice.

#CloudPush API
The push notification API of CloudBoost has been improved tremendously. For all those currently using the JavaSDK, no worries, you will not have to make more than 1 modification in your app before you start sending push messages to your clients.

#Push set up
Before going through this demo tutorial, endeavour to curl up on the official [tutorials page](http://tutorials.cloudboost.io/en/pushnotifications/android) which breaks down the whole process of setting up CloudPush. The tutorials page further describes all the API's you will be using from <span class="tut-snippet">CloudPush</span>. There are customisations you can make to further modify the behaviour of <span class="tut-snippet">CloudPush</span> in your app:
<ul>
<li>Subclass <span class="tut-snippet">CloudInstanceIDListenerService</span> and override <span class="tut-snippet">onTokenRefresh</span> method to add code that runs whenever InstanceID API initiates a token refresh perhaps due to a security breach, otherwise handled automatically by <span class="tut-snippet">CloudPush</span> without your users losing any messages</li>
<li>Subclass <span class="tut-snippet">CloudListenerService</span> and override <span class="tut-snippet">onMessageReceived</span> method to apply any logic to the message received, otherwise CloudPush does nothing with this message. You may choose to store it locally or send a notification to the status bar.</li>
</ul>

#Demo app
Create an android app called <span class="tut-snippet">CloudQuickStart</span>. Create a package called <span class="tut-snippet">io.cloudboost.quickstart</span> in the src folder. This is a very simple android application whose purpose is to show configuration and reception of push messages. It has only 3 classes; 
<ul>
<li>MainActivity.java, the main and only activity</li> 
<li>Listener.java, a subclass of CloudListenerService</li>
<li>MyInstanceIDListenerService, a subclass of CloudInstanceIDListenerService</li>
</ul>

#Main activity
To command <span class="tut-snippet">JavaSDK</span> to automatically register every device on startup, use the overloaded version. Notice how there are 4 parameters compared to the original version of <span class="tut-snippet">CloudApp.init()</span>. The <span class="tut-snippet">gcm_sender_id</span> must correspond with that configured in your app from the dashboard.

==Java==
<span class="java-lines" data-query="initwithpush">
```
package io.cloudboost.quickstart;
import io.cloudboost.CloudApp;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;
public class MainActivity extends AppCompatActivity {
    private TextView mInformationTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        CloudApp.init("app_id", "client_key",this,"gcm_sender_id");
        mInformationTextView = (TextView) findViewById(R.id.informationTextView);
        mInformationTextView.setText("performing autoregistration....");
    }
}
```
</span>

#Main layout

Create activity_main.xml layout file inside res/layout folder of the app

==xml==
<span class="xml-lines" data-query="quick_layout">
```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent"
    android:layout_height="match_parent" 
    android:orientation="vertical" 
    tools:context=".MainActivity">
    <TextView android:text="@string/registering_message" 
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/informationTextView"
        android:textAppearance="?android:attr/textAppearanceMedium" />
</LinearLayout>
```
</span>

#Listener class
We override the <span class="tut-snippet">onMessageReceived method</span>, play a notification tone and show a notification icon on status bar along with title and message.

==Java==
<span class="java-lines" data-query="listener">
```
import io.cloudboost.push.CloudListenerService;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
public class Listener extends CloudListenerService {
	@Override
	public void onMessageReceived(String from, Bundle data) {
		super.onMessageReceived(from, data);
		/*
		 * retrieve our message bundle from data bundle argument under
		 * "notification" key.
		 */
		Bundle bundle = data.getBundle("notification");
		String title = bundle.getString("title");
		String body = bundle.getString("body");
		String icon = bundle.getString("icon");
		/*
		 * alert user of device
		 */
		sendNotification(title, body, icon);
	}
	private void sendNotification(String title, String body, String icon) {
		Intent intent = new Intent(this, MainActivity.class);
		intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
		PendingIntent pendingIntent = PendingIntent.getActivity(this, 0,
				intent, PendingIntent.FLAG_ONE_SHOT);
		Uri defaultSoundUri = RingtoneManager
				.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
		/*
		 * We want to use the icon you specify in the message sent as the
		 * notification icon. But it comes as a string of the image name. We
		 * shall assume its inside the "drawable" directory and obtain its
		 * resourceId from the supplied name, if this image is not found, the
		 * notification sound will play but nothing shows on status bar.
		 */
		Resources resources = getResources();
		int resourceId = resources.getIdentifier(icon, "drawable",
				getPackageName());
		NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(
				this).setSmallIcon(resourceId).setContentTitle(title)
				.setContentText(body).setAutoCancel(true)
				.setSound(defaultSoundUri).setContentIntent(pendingIntent);
		NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
		notificationManager.notify(0 /* ID of notification */,
				notificationBuilder.build());
	}
}
```
</span>

#Manifest file
Make changes to <span class="tut-snippet">androidmanifest.xml</span> as shown below.

==xml==
<span class="xml-lines" data-query="android_manifest">
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.cloudboost.quickstart" >
    <uses-sdk android:minSdkVersion="10" />
    <!--
     needed for older devices -
     used to check app background / foreground status
    -->
    <uses-permission android:name="android.permission.GET_TASKS" />
    <permission
        android:name="io.cloudboost.quickstart.gcm.permission.C2D_MESSAGE"
        android:protectionLevel="signature" />
    <uses-permission android:name="io.cloudboost.quickstart.gcm.permission.C2D_MESSAGE" />
    <!-- [START gcm_permission] -->
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.INTERNET" />
    <!-- [END gcm_permission] -->
    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <meta-data
            android:name="com.google.android.gms.version"
            android:value="@integer/google_play_services_version" />
        <activity
            android:name=".MainActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <!-- [START gcm_receiver] -->
        <receiver
            android:name="com.google.android.gms.gcm.GcmReceiver"
            android:exported="true"
            android:permission="com.google.android.c2dm.permission.SEND" >
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
                <category android:name="gcm.play.android.samples.com.gcmquickstart" />
            </intent-filter>
        </receiver>
        <!-- [END gcm_receiver] -->
        <!-- [START CloudPushlistener] -->
        <service
            android:name=".Listener"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
            </intent-filter>
        </service>
        <!-- [END CloudPushlistener] -->
        <!-- [START instanceId_listener] -->
        <service
            android:name=".MyInstanceIDListenerService"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.google.android.gms.iid.InstanceID" />
            </intent-filter>
        </service>
        <!-- [END instanceId_listener] -->
        <!-- [START register JavaSDKs registration service] -->
        <service
            android:name="io.cloudboost.push.CloudRegistrationService"
            android:exported="false" >
        </service>
    </application>
</manifest>
```
</span>

After the above steps, you can already actually install this app on your emulator or device. Even if you don't open the activity, try sending a push notificiation as in the next step. If all has been set up well, you should see the notification.

#Sending push message
Create a test Java project with void main and place this code there. When you run it, you should see a notification on your device if all goes well.

==Java==
<span class="java-lines" data-query="send">
```
public static void main(String[] args) throws CloudException {
	CloudApp.init("app_id", "client_key");
	CloudPush.send(new PushData("good news", "CloudBoost push notifications are perfect now"),"global", new CloudPushCallback() {
		@Override
		public void done(Object x, CloudException t) throws CloudException {
			if(t!=null){
				/*
				 *you could get no devices found, this means you did not supply any channel
				 */
			}
			else if(x!=null){
				/*if you get success here but no push on device, your registration token could have been
				 *expired by GCM, clear app data from settings and run app, it will re-register device.
				 */
			}
		}
	});
}
```
</span>

Notice we have a single channel "global" as the third argument. Every device is subscribed to this channel by default. You can create another feature in your app that can subscribe users to other channels with appropriate API.
So if you need to push a marketing campaign to all users, just push to global channel.

#Token refresh
Its not a must to create subclass <span class="tut-snippet">CloudInstanceIDListenerService</span> and override <span class="tut-snippet">onTokenRefresh</span> method. However, you can do so if you know what you are doing. Here you can code what must happen incase a token refresh is initiated by InstanceID API. 

Otherwise, JavaSDK takes care of this for you.

==Java==
<span class="java-lines" data-query="tokenrefresh">
```
import io.cloudboost.push.CloudInstanceIDListenerService;
public class MyInstanceIDListenerService extends CloudInstanceIDListenerService {
	@Override
	public void onTokenRefresh() {
		super.onTokenRefresh();
		//perform custom action here
	}
}
```
</span>

[full source code](https://github.com/egimaben/GCM-CloudBoost-push-notifications)




