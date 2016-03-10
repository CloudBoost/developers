#####In this section
In this section, I will be introducing you to realtime functionality of CloudBoost, using the android platform. Much as I have chosen android as a basis, the realtime idea works on any platform, be it web or desktop application.
Creating real time applications on CloudBoost is totally a no-brainer as you will discover shortly.

#Prerequisites
Much as this tutorial is designed to be as simple as possible, it still requires one to have basic understanding in the following areas:
<ul>
<li><span class="tut-snippet">Java</span> programming language</li>
<li><span class="tut-snippet">Android</span> programming i.e can create an <span class="tut-snippet">Android</span> project in the IDE, an <span class="tut-snippet">Activity</span> and run the project on an emulator</li>
<li>##CloudBoost quickstart:## it's really straightforward, learn to create your first app [here](https://tutorials.cloudboost.io/en/gettingstarted/yourfirstapp)</li>
</ul>
#Create the table
After creating your first-app, create a table called <span class="tut-snippet">REAL_TIME</span> for this tutorial. Create two columns <span class="tut-snippet">user_name</span> and <span class="tut-snippet">comment</span>, all of type <span class="tut-snippet">text</span>

#Tools used
<ul>
<li>MyEclipse 2014 with ADT plugin</li>
<li>Java sdk for CloudBoost version 1.0.1</li>
<li>socket.io-client for java, get it [here](https://github.com/egimaben/socket.io-client)</li>
<li>[okhttp-2.4.0](http://mvnrepository.com/artifact/com.squareup.okhttp/okhttp/2.4.0)</li>
<li>[okhttp-ws-2.4.0](http://grepcode.com/snapshot/repo1.maven.org/maven2/com.squareup.okhttp/okhttp-ws/2.4.0/)</li>
<li>[okio-1.4.0](http://grepcode.com/snapshot/repo1.maven.org/maven2/com.squareup.okio/okio/1.4.0/)</li>
</ul>
#The app
Create a new <span class="tut-snippet">Android</span> project called <span class="tut-snippet">RealTime</span> and import all the above jars

Basically what this app is going to do is to listen to <span class="tut-snippet">created</span> events on  table <span class="tut-snippet">REAL_TIME</span>. When any record is added to this table (created either from another app or from the dashboard), we will be receiving a realtime notification.

How we choose to process this notification is upon us. We just receive a <span class="tut-snippet">CloudObject</span> representing the <span class="tut-snippet">Record</span> added.
This can be applied to a chat application, an online ordering system or any other realtime application.
So having dealt with the fundamentals, we can write some real code now:

Create Your <span class="tut-snippet">MainActivity</span> which should extend <span class="tut-snippet">ListActivity</span>

#Main Layout
Create <span class="tut-snippet">main_layout</span> inside <span class="tut-snippet">res/layout</span> folder, we shall inflate it from <span class="tut-snippet">MainActivity</span>.
==xml==
<span class="xml-lines" data-query="main_layout">
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
        android:text="My Feeds" />

    <ListView
        android:id="@android:id/list"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/controls"
        android:background="#aaaaaa" />

    <TextView
        android:id="@android:id/empty"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/controls"
        android:text="There is no data"
        android:textStyle="bold" />

</RelativeLayout>

```
</span>
Remember we are using a <span class="tut-snippet">ListActivity</span>, so it comes with a <span class="tut-snippet">ListView</span> ready for us to use.  We don’t actually need to explicitely create the <span class="tut-snippet">ListView</span> in the layout file. But we do this to arrange are widgets on the Screen, and the last <span class="tut-snippet">TextView</span>  will be displayed incase the <span class="tut-snippet">ListView</span> has no records to show.
#ListView row layout

Create <span class="tut-snippet">row.xml</span>  as the <span class="tut-snippet">ListView</span> row layout to simply display user_name and comment, like so
==xml==
<span class="xml-lines" data-query="row_layout">
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_gravity="center"
    android:orientation="vertical" >

    <TextView
        android:id="@+id/user_name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#000000" />

    <TextView
        android:id="@+id/comment"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#000000"
        android:textSize="12sp" />

</LinearLayout>

```
</span>

#The adapter
Create a simple <span class="tut-snippet">ArrayAdapter</span> to supply the <span class="tut-snippet">ListView</span> with <span class="tut-snippet">CloudObject</span>s as rows we will be receiving in real time.
==Java==
<span class="java-lines" data-query="adapter">
```
package io.cloudboost.realtime;

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
        TextView name=(TextView) row.findViewById(R.id.user_name);
        TextView comment=(TextView) row.findViewById(R.id.comment);
        CloudObject object = getItem(position);
        name.setText(object.getString("user_name"));
        comment.setText(object.getString("comment"));       
        return row;
    }
}

```
</span>

#MainActivity
We want as little boiler plate code as possible, because we want to focus on CloudBoost realtime functionality. So all we have is just a <span class="tut-snippet">ListActivity</span> to display our realtime data. As you can see, the <span class="tut-snippet">ArrayAdapter</span> is also pretty basic as well.
We can now bring it all together in the <span class="tut-snippet">MainActivity</span> class.
 
Here is our <span class="tut-snippet">MainActivity.java</span>
==Java==
<span class="java-lines" data-query="link">
```
package io.cloudboost.realtime;

import io.cloudboost.CloudApp;
import io.cloudboost.CloudException;
import io.cloudboost.CloudObject;
import io.cloudboost.CloudObjectCallback;
import android.app.ListActivity;
import android.os.Bundle;

public class MainActivity extends ListActivity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//inflate the main layout
		setContentView(R.layout.main_layout);
		//create adapter object and pass the row layout for listview rows
		final Adapter adapter = new Adapter(this, R.layout.row);
		//set adapter to listview
		setListAdapter(adapter);
		//initialize you cloudboost app, the first parameter is app id 
		//and the second is the client key. please replace accordingly
		CloudApp.init("bengi123", "mLiJB380x9fhPRCjCGmGRg==");
		try {
			//start listening to "created" events on REAL_TIME table. the other 
			//2 othertypes of events are "updated" and "deleted"
			CloudObject.on("REAL_TIME", "created", new CloudObjectCallback() {

				@Override
				public void done(final CloudObject x, CloudException t)
						throws CloudException {
					//remember this callback runs on a background thread
					//not the ui thread, so to update our adapter with the
					//received cloudobject, we run the code on ui thread
					runOnUiThread(new Runnable() {
						public void run() {
							adapter.add(x);
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
#Bringing it all together
Compare your code with the original sources downloadable from this page. With everything in place, you can now run the application on the emulator or a device.

<img class="center-img" alt="App" src="https://blog.cloudboost.io/content/images/2016/03/initialscreen.PNG">

If this screen gets loaded, that means all went well.
Login to your cloudboost dashboard and create a record in the <span class="tut-snippet">REAL_TIME</span> table

<img class="full-length-img" alt="Your CloudBoost Dashboard" src="https://blog.cloudboost.io/content/images/2016/03/dashboardcreate.PNG">

After saving that record, you can take a look at your emulator screen
<img class="center-img" alt="App" src="https://blog.cloudboost.io/content/images/2016/03/emulatorconfirm.png">
Voila, that is it for our small demo of real time functionality.





