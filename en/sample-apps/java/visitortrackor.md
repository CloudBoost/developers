#####In this section
In this tutorial, we are going to see a simple but common real-time application that you can build on CloudBoost. These days, web analytics is a major driving force in growing your online presence. Talk about your own blog, an e-commerce site, a company website etc., they all need to keep track of visitors to their site. So the higher the number of visitors, the better you are doing. Meanwhile, then your visitor count per day or month is dropping, then you start re-strategizing to see how you can get the numbers back up.
We try to keep our tutorials as practical as possible. Infact, with 1 or 2 tweaks, you could use the project created here to track the visitors to your site in realtime.

#Assumptions
I will assume that :
<ul>

<li>You have checked out our first java tutorial in this series and know you to set up your environment to develop CloudBoost apps.</li>
<li>You have access to change the code of a website to paste the visitor tracking code. If you don’t, you could just create a free blog on google’s blogger, or on wordpress to make our experience as practical as possible (it takes about 5 minutes to create a blog)</li>
<li>You know android.</li>
<li>You already have an app on cloudboost, and have created a table called <code>visitors</code>, even if it has no custom columns</li>
</ul>
#Tracking Code
We are going to write a little Javascript to track the site visits and update our CloudApp. Don’t worry , it won’t get in our way, just a simple 7-liner.
This is what our code will do:
<ul>
<li>Link the website to the CloudBoost javascript library, so that we can access CloudBoost functionality.</li>
<li>Create a function to run everytime the site is loaded, the function will do the following:
<ul>
<li>Initialize our app with appid and client-key</li>
<li>Create a CloudObject for visitors table</li>
<li>Save this CloudObject</li>
<li>Don’t forget to call the above method.</li>
</ul>
</li>
</ul>


That’s it, and now our script:
==Javascript==
<span class="js-lines" data-query="main_layout">
```
<script src="https://cloudboost.io/js-sdk/cloudboost.js"></script>
<script>
function notifyMe(){
CB.CloudApp.init('bengi','ailFnQf+xxxxxxxxxx==');
var obj=new CB.CloudObject('visitors');
obj.save({
            success : function(newObj){},          
		error : function(error){}                        
        });
}
notifyMe()
</script>
```
</span>

#embedding the code
Embed this code into you test website i.e. within the html. If you are using blogger like me, you just open the layout editor, add a new widget and choose the javascript/html option of the dialog that pops out. There must be a similar option with wordpress.
We are done with the little we had to do outside java(android), now we can get back home.

#The App
Create a new Android application called VisitorCounter, and create a new package called <span class="tut-snippet">io.cloudboost.visitorcounter</span>
#MainActivity
Here is our only activity, MainActivity, it's very precise and documented. Remember we are keeping Any Other Code (if that can work like AOB) as little as possible so that we can focus on CloudBoost functionality. Feel free to add meat to the code after it has worked for you.
==Java==
<span class="java-lines" data-query="main_layout">
```
package io.cloudboost.visitorcounter;

import io.cloudboost.CloudApp;
import io.cloudboost.CloudException;
import io.cloudboost.CloudObject;
import io.cloudboost.CloudObjectCallback;
import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// inflate the main layout
		setContentView(R.layout.main_layout);

		final TextView count = (TextView) findViewById(R.id.count);
		/*
		 * initialize you cloudboost app, the first parameter is app idand the
		 * second is the client key. please replace accordingly
		 */
		CloudApp.init("xxxxxxx", "xxxxxxxxxx");
		try {
			/*
			 * start listening to "created" events on visitors table. the other
			 * 2 types of events are "updated" and "deleted"
			 */

			CloudObject.on("visitors", "created", new CloudObjectCallback() {

				@Override
				public void done(final CloudObject x, CloudException t)
						throws CloudException {
					/*
					 * remember this callback runs on a background threadnot the
					 * ui thread, so to update our adapter with thereceived
					 * cloudobject, we run the code on ui thread *
					 */

					runOnUiThread(new Runnable() {
						public void run() {
							// get the previous count in the view
							int prevCount = Integer.parseInt((String) count
									.getText());
							// increment it by 1 and set new value
							count.setText("" + (++prevCount));
						}
					});

				}
			});
		} catch (CloudException e) {
			e.printStackTrace();
		}

	}

}
```
</span>
#main_layout.xml
As we can see above, the MainActivity is inflating main_layout.xml, so we shall also create it inside res/layout folder of the android project
==xml==
<span class="xml-lines" data-query="main_layout">
```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity" >

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="40dip"
        android:gravity="center"
        android:orientation="horizontal"
        android:textStyle="bold" >

        <TextView
            android:id="@+id/heading"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_gravity="center"
            android:text="VISITOR COUNT"
            android:textColor="#00ff00"
            android:textStyle="bold" />
    </LinearLayout>

    <TextView
        android:id="@+id/count"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_gravity="center"
        android:text="0"
        android:textColor="#ff0000"
        android:textSize="40sp"
        android:textStyle="bold" />

</LinearLayout>
```
</span>
#AndroidManifest.xml
Here too, is the manifest file for our project, don’t forget to request internet permission, otherwise we shall run into errors.
==xml==
<span class="xml-lines" data-query="main_layout">
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.cloudboost.visitorcounter"
    android:versionCode="1"
    android:versionName="1.0" >

    <uses-permission android:name="android.permission.INTERNET" />

    <uses-sdk
        android:minSdkVersion="8"
        android:targetSdkVersion="21" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".MainActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>

```
</span>
So when you launch in the emulator, the screen should launch a counter set to 0. Any hits on your site should increment this counter accordingly.
<p>&nbsp;</p>
<img class="center-img" alt="App" src="https://blog.cloudboost.io/content/images/2016/03/counter_display.PNG">
<p>&nbsp;</p>
[full source code](https://github.com/egimaben/visitor_tracker)