#####In this section
In this tutorial, we are going to see yet another  simple but common real-time application that you can build on CloudBoost. These days, instant messaging has taken the world by storm. It has become outdated to expect your clients to send you email and wait for hours or even days to get back to them. More especially if the client is new to your webservice or has numerous options to replace you with.
This has made most forward looking service providers embed a simple chat widget in their websites. They then  assemble customer care agents with mobile and web platforms in queue ready to respond to any queries from clients or even passers-by.
We shall embed a chat widget in our website for clients to interact with us and build an android app for us to communicate with them.
<p>&nbsp;</p>
><span class="tut-imp">Important:</span> this is not a production ready example, in the real chat application, you would have to route messages from different site visitors to available agents etc. At the same time, this example covers the barest skeleton of a webchat application.
<p>&nbsp;</p>
><span class="tut-info">Info</span> here you will learn how to use CloudBoost notification queries i.e how to apply a query on real time notifications so that you are only notified of specific events that meet the query criteria.
#Assumptions
I will assume a few things:
<ul>
<li>You have checked out our first java tutorial in this series and know you to set up your environment to develop CloudBoost apps.<li>
<li>You have access to change the code of a website to paste the visitor tracking code. If you don’t, you could just create a free blog on google’s blogger, or on wordpress to make our experience as practical as possible (it takes about 5 minutes to create a blog).</li>
<li>You know android.</li>
<li>You already have an app on cloudboost, and have created a table called <code>chat</code>, with the following columns
<ul>
<li>message, type text</li>
<li>admin, type Boolean, to show if this message is from client or agent</li>
</ul>
</ul>
#Chat widget code
For this case, we shall scale up our javascript and jquery abit. Once again, no worries, we are not here to learn any of that. To keep the focus on android, I just got free code from here and added our custom code for CloudApp initialization and chat.

This is what our code will do:
<ul><li>Link the website to the CloudBoost javascript library, so that we can access CloudBoost functionality.</li>
<li>Link the website to jquery library and a host of other jquery utils.</li>
</ul>
==JavaScript==
<span class="js-lines" data-query="init">
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.js"></script> 
<script src="https://cloudboost.io/js-sdk/cloudboost.js"></script>
<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/base/jquery-ui.css"/> 
<link rel="stylesheet" href="http://magma.cs.uiuc.edu/wenpu1/css/jquery-ui-1.8.2.custom.css" type="text/css" media="screen" /> 
<script type="text/javascript" src="http://magma.cs.uiuc.edu/wenpu1/js/jquery-1.4.2.min.js"></script> 
<script type="text/javascript" src="http://magma.cs.uiuc.edu/wenpu1/js/jquery-ui-1.8.2.custom.min.js"></script> 
<link type="text/css" href="http://magma.cs.uiuc.edu/wenpu1/css/jquery.ui.chatbox.css" rel="stylesheet" /> 
<script type="text/javascript" src="http://magma.cs.uiuc.edu/wenpu1/js/jquery.ui.chatbox.js"></script> 
<script type="text/javascript" src="http://magma.cs.uiuc.edu/wenpu1/chatboxManager.js"></script> 

<div id="buum"  width="200" height="200"></div> 
<script type="text/javascript">
CB.CloudApp.init('bengi','ailFnQf+xxxxxxx==');
var query = new CB.CloudQuery('chat');
query.equalTo('admin',true);
CB.CloudObject.on('chat', 'created',query,function(data){   	
$("#buum").chatbox("option", "boxManager").addMsg("Bengi", data.get("message"));			
});
			
box = $("#buum").chatbox({id:"you", 
                  user:{key : "value"}, 
                  title : "Chat with me", 
                  
                  messageSent : function(id, user, msg) { 
                  $("#log").append(id + " said: " + msg + "<br/>"); 
				  var obj=new CB.CloudObject('chat');
				  obj.set('admin',false);
				  obj.set('message',msg);
				  $("#buum").chatbox("option", "boxManager").addMsg(id, msg);
				  obj.save({
				  success : function(newObj){
			 
			},          
			error : function(error){
			$("#buum").chatbox("option", "boxManager").addMsg("error", error);
			}                        
        });
                  
}
}); 

$(function(){ 
    $(".ui-chatbox") 
        .draggable() 
        .resizable(); 
         
}); 
</script>
```
</span>
#embedding the code
Embed this code into you test website i.e. within the html. If you are using blogger like me, you just open the layout editor, add a new widget and choose the javascript/html option of the dialog that pops out. There must be a similar option with wordpress.
We are done with the little we had to do outside java(android), now we can get back home.
I placed this widget in my blog, checkout how it looks:
<p>&nbsp;</p>
<img class="center-img" alt="Chat widget" src="https://blog.cloudboost.io/content/images/2016/03/chatwidgetreal.PNG">
<p>&nbsp;</p>
#The App
Create a new Android application called WebChat, and create a new package called io.cloudboost.webchat.
#ChatBubbleActivity
Here is our main activity, <span class="tut-snippet">ChatBubbleActivity</span>, it very precise and well documented. This time it extends <span class="tut-snippet">ListActivity</span>. Remember we are keeping out Any Other Code (if that can work like AOB) as little as possible so that we can focus on ##CloudBoost## functionality. Feel free to add meat to the code after it has worked for you.
==Java==
<span class="java-lines" data-query="link">
```
package io.cloudboost.webchat;
import io.cloudboost.CloudApp;
import io.cloudboost.CloudException;
import io.cloudboost.CloudObject;
import io.cloudboost.CloudObjectCallback;
import io.cloudboost.CloudQuery;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.database.DataSetObserver;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.View.OnKeyListener;
import android.widget.AbsListView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

public class ChatBubbleActivity extends Activity {
	private ChatArrayAdapter chatArrayAdapter;
	private ListView listView;
	private EditText chatText;
	private Button buttonSend;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// init the cloudapp
		CloudApp.init("bengi", "ailFnQf+xxxxxxxx==");
		// inflate main view
		setContentView(R.layout.activity_chat);
		// get the sendbutton
		buttonSend = (Button) findViewById(R.id.buttonSend);
		// get the list view that will display the chats
		listView = (ListView) findViewById(R.id.listView1);

		// create an array adapter to supply chats to the listview
		chatArrayAdapter = new ChatArrayAdapter(getApplicationContext(),
				R.layout.activity_chat_singlemessage);

		listView.setAdapter(chatArrayAdapter);

		// get the edittext box where agent will type chats
		chatText = (EditText) findViewById(R.id.chatText);
		// set this editor to listen to enter key press to send message
		chatText.setOnKeyListener(new OnKeyListener() {
			public boolean onKey(View v, int keyCode, KeyEvent event) {
				if ((event.getAction() == KeyEvent.ACTION_DOWN)
						&& (keyCode == KeyEvent.KEYCODE_ENTER)) {
					return sendMessageToClient();
				}
				return false;
			}
		});

		buttonSend.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View arg0) {
				sendMessageToClient();
			}
		});

		listView.setTranscriptMode(AbsListView.TRANSCRIPT_MODE_ALWAYS_SCROLL);
		listView.setAdapter(chatArrayAdapter);

		// to scroll the list view to bottom on data change
		chatArrayAdapter.registerDataSetObserver(new DataSetObserver() {
			@Override
			public void onChanged() {
				super.onChanged();
				listView.setSelection(chatArrayAdapter.getCount() - 1);
			}
		});
		/*
		 * create a query on table chat, remember we use notification queries
		 * for this example, when u send a chat, we just save it as a
		 * CloudObject in the chat table which the chat widget listens to.
		 */
		CloudQuery query = new CloudQuery("chat");
		/*
		 * we also listen to "created" events on table chat, difference is we
		 * query records where admin column is set to false, that means we shall
		 * not be receiving echoes of our own messages The chat widget on the
		 * site has to query messages where admin column is set to true, so that
		 * it only receives notifications on messages from an agent not an echo
		 * of its own client message
		 */
		query.equalTo("admin", false);
		try {
			CloudObject.on("chat", "created", query, new CloudObjectCallback() {

				@Override
				public void done(final CloudObject arg0, CloudException arg1)
						throws CloudException {
					runOnUiThread(new Runnable() {

						@Override
						public void run() {
							receiveMessageFromClient(arg0);

						}
					});

				}
			});
		} catch (CloudException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * this method takes a cloudobject and retrieves 'message' out of it and
	 * adds it to the adapter
	 * 
	 * @param object
	 * @return
	 */
	private boolean receiveMessageFromClient(CloudObject object) {
		String msg = object.getString("message");

		chatArrayAdapter.add(new ChatMessage(true, msg));
		return true;
	}

	/**
	 * runs a background service to send our message
	 * 
	 * @return
	 */
	private boolean sendMessageToClient() {
		new sendMsg().execute(new String[] {});

		return true;
	}

	ProgressDialog pDialog;

	public void runProgressGuy(String msg) {
		pDialog = new ProgressDialog(this);
		pDialog.setMessage(msg);
		pDialog.setIndeterminate(false);
		pDialog.setCancelable(false);
		pDialog.show();
	}

	class sendMsg extends AsyncTask<String, String, String> {

		/**
		 * Before starting background thread Show Progress Dialog
		 * */
		@Override
		protected void onPreExecute() {
			super.onPreExecute();
			runProgressGuy("Sending...");
		}

		/**
		 * send message on a background thread
		 * */
		@Override
		protected String doInBackground(String... args) {
			CloudObject obj = new CloudObject("chat");
			try {
				obj.set("admin", true);
				obj.set("message", chatText.getText().toString());
				obj.save(new CloudObjectCallback() {

					@Override
					public void done(final CloudObject arg0,
							final CloudException arg1) throws CloudException {
						runOnUiThread(new Runnable() {

							@Override
							public void run() {
								if (arg1 != null) {
									chatArrayAdapter.add(new ChatMessage(false,
											arg1.toString()));
									for (Object obj : arg1.getStackTrace()) {
									}
								}
								if (arg0 != null)
									chatArrayAdapter.add(new ChatMessage(false,
											chatText.getText().toString()));

							}
						});

					}
				});
			} catch (CloudException e) {
				e.printStackTrace();
			}
			runOnUiThread(new Runnable() {
				public void run() {
					chatText.setText("");
				}
			});

			return null;
		}

		/**
		 * After completing background task Dismiss the progress dialog
		 * **/
		protected void onPostExecute(String args) {
			pDialog.dismiss();
		}
	}

}
```
</span>
#Adapter
Here is our adapter class that we shall be using to populate our listview
package io.cloudboost.webchat;
==Java==
<span class="java-lines" data-query="link">

```
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class ChatArrayAdapter extends ArrayAdapter<ChatMessage> {

	private TextView chatText;
	private List<ChatMessage> chatMessageList = new ArrayList<>();
	private LinearLayout singleMessageContainer;

	@Override
	public void add(ChatMessage object) {
		chatMessageList.add(object);
		super.add(object);
	}

	public ChatArrayAdapter(Context context, int textViewResourceId) {
		super(context, textViewResourceId);
	}

	public int getCount() {
		return this.chatMessageList.size();
	}

	public ChatMessage getItem(int index) {
		return this.chatMessageList.get(index);
	}

	public View getView(int position, View convertView, ViewGroup parent) {
		View row = convertView;
		Log.d("ChatArrayAdapter", "top of getview");

		if (row == null) {
			LayoutInflater inflater = (LayoutInflater) this.getContext()
					.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			row = inflater.inflate(R.layout.activity_chat_singlemessage,
					parent, false);
		}
		singleMessageContainer = (LinearLayout) row
				.findViewById(R.id.singleMessageContainer);
		ChatMessage chatMessageObj = getItem(position);
		chatText = (TextView) row.findViewById(R.id.singleMessage);
		chatText.setText(chatMessageObj.message);
		chatText.setBackgroundResource(chatMessageObj.left ? R.drawable.bubble_a
				: R.drawable.bubble_b);
		singleMessageContainer.setGravity(chatMessageObj.left ? Gravity.LEFT
				: Gravity.RIGHT);
		return row;
	}

}
```
</span>

#ChatMessage.java
Here is our java object which holds a single chat message
==Java==
<span class="java-lines" data-query="link">
```
package io.cloudboost.webchat;

public class ChatMessage {
	public boolean left;
	public String message;

	public ChatMessage(boolean left, String message) {
		super();
		this.left = left;
		this.message = message;
	}
}
```
</span>
#activity_chat.xml
As we can see above, the ChatBubbleActivity is inflating activity_chat.xml, so we shall also create it inside res/layout folder of the android project
==xml==
<span class="xml-lines" data-query="link">
```
<?xml version="1.0" encoding="utf-8"?><FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" 
    android:id="@+id/chat_frag">

    <ListView
        android:id="@+id/listView1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="40dp"
        android:layout_marginTop="40dp"
        
        
         >
    </ListView>

    <RelativeLayout
        android:id="@+id/form"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_alignParentLeft="true"
        android:orientation="vertical" >

        <EditText
            android:id="@+id/chatText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_alignParentBottom="true"
            android:layout_alignParentLeft="true"
            android:layout_alignParentStart="true"
            android:layout_toLeftOf="@+id/buttonSend"
            android:ems="10"
            android:inputType="textMultiLine" />

        <Button
            android:id="@+id/buttonSend"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_alignBottom="@+id/chatText"
            android:layout_alignParentEnd="true"
            android:layout_alignParentRight="true"
            android:text="Send" />
    </RelativeLayout>


</FrameLayout>
```
</span>
#activity_chat_singlemessage.xml
Every record of chat message in the ListView will be inflated using this layout file
==xml==
<span class="xml-lines" data-query="link">
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content" >

    <LinearLayout
        android:id="@+id/singleMessageContainer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content" >

        <TextView
            android:id="@+id/singleMessage"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:layout_margin="5dip"
            android:background="@drawable/bubble_b"
            android:paddingLeft="10dip"
            android:text="Hello bubbles!"
            android:textColor="@android:color/primary_text_light" />
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
    package="io.cloudboost.webchat"
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
            android:name=".ChatBubbleActivity"
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
<p>&nbsp;</p>
After running in the emulator, this is how the chat app looks before any activity:
<p>&nbsp;</p>
<img class="center-img" alt="Chat app" src="https://blog.cloudboost.io/content/images/2016/03/chatapp.PNG">
<p>&nbsp;</p>
After a little activity, checkout where we are:
<p>&nbsp;</p>
<img class="center-img" alt="Chat app active" src="https://blog.cloudboost.io/content/images/2016/03/chatappactive.PNG">
<p>&nbsp;</p>
<img class="center-img" alt="Chat widget4 active" src="https://blog.cloudboost.io/content/images/2016/03/chatwidgetactive.PNG">
<p>&nbsp;</p>
[full source code](https://github.com/egimaben/web-chat)

