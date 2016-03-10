#####In this section
In this tutorial, we are going to see yet another  simple but common real-time application that you can build on CloudBoost. With markets being very segmented, web analytics is incomplete if it cannot tell you  about regional distribution of your clients. Some regions may need more marketing to boost sales while others may be just doing fine. This way, resources are allocated strategically. We can only strategize well if we can track our customer activity by geographical region. 
We shall embed another visitor tracker on our website and follow customer activity from the android app.
You will get introduced to ##CloudGeoPoint## object, we shall need its powerful application later in the series.

#Assumptions
I will assume that :
<ul>
<li>You have checked out our first java tutorial in this series and know you to set up your environment to develop CloudBoost apps.</li>
<li>You have access to change the code of a website to paste the visitor tracking code. If you don’t, you could just create a free blog on google’s blogger, or on wordpress to make our experience as practical as possible (it takes about 5 minutes to create a blog).</li>
<li>You know android.</li>
<li>You already have an app on cloudboost, and have created a table called <code>visitor_detail</code>, with the following columns
<ul>
<li>city, type text</li>
<li>region, type text</li>
<li>ip, type text</li>
<li>country, type text</li>
</li>geopoint, type geopoint</li>
</ul>
</li>
</ul>
#Tracking Code
For this case, we shall use an external [Geo](http://www.freegeoip.net ) service to get details of our visitors. We shall also make an ajax call from jQuery to get this information and forward it to our app. Don’t focus so much on this javascript code, just copy and paste it and may be change the ##appid## and ##client-key##.

This is what our code will do:
<ul>
<li>Link the website to the CloudBoost javascript library, so that we can access CloudBoost functionality.</li>
<li>Link the website to jquery library, to allow us to make the ajax call.</li>
<li>Create a function to run everytime the site is loaded, the function will do the following:
<ul>
<li>Initialize our app with appid and client-key</li>
<li>Create a CloudObject for visitor_detail  table</li>
<li>Make an ajax call to freegeoip.net to fetch visitor’s location details</li>
<li>Save this CloudObject</li>
<li>Don’t forget to call the above method.</li>
</ul>
</li>
</ul>
==JavaScript==
<span class="js-lines" data-query="link">
```
<script src="https://cloudboost.io/js-sdk/cloudboost.js"></script>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
function notifyMe(){
CB.CloudApp.init('bengi','ailFnQf+q102UpB86ZZBKg==');
var obj=new CB.CloudObject('visitor_detail');
jQuery.ajax( { 
  url: '//freegeoip.net/json/', 
  type: 'POST', 
  dataType: 'jsonp',
  success: function(location) {
	  obj.set('city',location.city);
	  obj.set('region',location.region_name);
	  obj.set('ip',location.ip);
	  obj.set('country',location.country_name);
	  var geo=new CB.CloudGeoPoint(location.longitude,location.latitude);
	  obj.set('geopoint',geo);
	  obj.save({
            success : function(newObj){},          
			error : function(error){}                        
        });
    // example where I update content on the page.
  }
} );

}
notifyMe()
</script>
```
</span>

#embedding the code
Embed this code into you test website i.e. within the html. If you are using blogger like me, you just open the layout editor, add a new widget and choose the javascript/html option of the dialog that pops out. There must be a similar option with wordpress.
We are done with the little we had to do outside java(android), now we can get back home.

#The App
Create a new Android application called VisitorDetail, and create a new package called <span class="tut-snippet">io.cloudboost.visitordetail</span>.
#MainActivity
Here is our only activity, MainActivity, it very precise and documented. This time it extends ListActivity. Remember we are keeping out Any Other Code (if that can work like AOB) as little as possible so that we can focus on CloudBoost functionality. Feel free to add meat to the code after it has worked for you.
==Java==
<span class="java-lines" data-query="link">
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
		 * initialize you cloudboost app, 
		 * the first parameter is app id and the
		 * second is the client key.
		 * please replace accordingly
		 */
		CloudApp.init("bengi", "ailFnQf+q102UpB86ZZBKg==");
		try {
			/*
			 * start listening to "created" 
			 * events on visitors table. the other
			 * 2 types of events are 
			 * "updated" and "deleted"
			 */

			CloudObject.on("visitors", "created", new CloudObjectCallback() {

				@Override
				public void done(final CloudObject x, CloudException t)
						throws CloudException {
					/*
					 * remember this callback 
					 * runs on a background thread not 
					 * the ui thread, so to update our adapter 
					 * with the received
					 * cloudobject, we run the code on ui thread 
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
#Adapter
Here is our adapter class that we shall be using to populate our listview
==Java==
<span class="java-lines" data-query="link">
```
package io.cloudboost.visitordetail;
import io.cloudboost.CloudObject;
import java.util.ArrayList;
import java.util.List;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;
public class Adapter  extends ArrayAdapter<CloudObject> {
    private List<CloudObject> objectList = new ArrayList<>();
    public Adapter(Context context, int textViewResourceId) {
        super(context, textViewResourceId);
    }
    @Override
    public void add(CloudObject object) {
    	objectList.add(object);
        super.add(object);
    }

    @Override
    public int getCount() {
        return this.objectList.size();
    }
    @Override
    public CloudObject getItem(int index) {
        return this.objectList.get(index);
    }
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View row = convertView;  
        if (row == null) {
            LayoutInflater inflater = (LayoutInflater) this.getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            row = inflater.inflate(R.layout.row, parent, false);
        } 
        TextView region=(TextView) row.findViewById(R.id.region);
        TextView country=(TextView) row.findViewById(R.id.country);
        TextView city=(TextView) row.findViewById(R.id.city);
        TextView ip=(TextView) row.findViewById(R.id.ip);
        CloudObject object = getItem(position);
        region.setText(object.getString("region"));
        country.setText(object.getString("country"));    
        city.setText(object.getString("city"));   
        ip.setText(object.getString("ip"));   
        return row;
    }
}
```
</span>
#main_layout.xml
As we can see above, the MainActivity is inflating main_layout.xml, so we shall also create it inside res/layout folder of the android project
==xml==
<span class="xml-lines" data-query="link">
```
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity" >

    <TextView
        android:id="@+id/mainText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Current Visitor details" />

    <ListView
        android:id="@android:id/list"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/mainText"
        android:background="#aaaaaa" />

    <TextView
        android:id="@android:id/empty"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/mainText"
        android:text="No visitors on line"
        android:textStyle="bold" />

</RelativeLayout>
```
</span>
#row.xml
Every record of visitor in the ListView will be inflated using this layout file
==xml==
<span class="xml-lines" data-query="link">
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:orientation="vertical" >

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal" >

        <TextView
            android:id="@+id/region"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textColor="#000000"
            android:textStyle="bold" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="--"
            android:textColor="#000000" />

        <TextView
            android:id="@+id/country"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textColor="#00ff00" />
    </LinearLayout>
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal" >
    <TextView
        android:id="@+id/city_name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="CITY"
        android:textColor="#000000"
        android:textStyle="bold" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="-"
        android:textColor="#000000" />

    <TextView
        android:id="@+id/city"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#ff0000" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="  "
        android:textColor="#000000" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="IP:"
        android:textColor="#000000"
        android:textStyle="bold" />

    <TextView
        android:id="@+id/ip"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#0000ff" />
    </LinearLayout>
</LinearLayout>
```
</span>
#AndroidManifest.xml
Here too, is the manifest file for our project, don’t forget to request internet permission, otherwise we shall run into errors.
==xml==
<span class="xml-lines" data-query="link">
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.cloudboost.visitordetail"
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

When i ran the app in the emulator, this is what i got:

<img class="center-img" alt="No visitors" src="https://blog.cloudboost.io/content/images/2016/03/novisitorsonline.PNG">

So I hit the site abit and even called a friend in the states to check it out and this is what I have:
<img class="center-img" alt="No visitors" src="https://blog.cloudboost.io/content/images/2016/03/visitor_locatiosn.PNG">