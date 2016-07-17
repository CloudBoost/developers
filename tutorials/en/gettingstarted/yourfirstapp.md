#####In this section

In this section you'll learn how to create your new App (we call it [CloudApp]( https://docs.cloudboost.io/#CloudApp)) and create your first Table ([CloudTable]( https://docs.cloudboost.io/#CloudTable)).  You'll learn to add CloudBoost SDK to your project, save simple objects ([CloudObjects]( https://docs.cloudboost.io/#CloudObject)) in the table and query it with a simple query ([CloudQuery]( https://docs.cloudboost.io/#CloudQuery)).

#Create your first App

If you haven't signed up for [CloudBoost](https://www.cloudboost.io) yet, this is the right time for you to create your new account and get started. CloudBoost gives you a ton of free tier (check [Pricing](https://www.cloudboost.io/pricing)) so you can build your apps and launch it for free. Once you have signed up, you will then be able to create a new app by entering <span class="tut-snippet">App Name</span>.

<img class="center-img" alt="Create a new app" src="https://blog.cloudboost.io/content/images/2016/03/app.png">

![Your App Created](https://blog.cloudboost.io/content/images/2016/03/sampleapp.png)

After you enter `App Name`, your new `CloudApp` is created. Next step : Create a new table to store your data.

#Creating a new table

To create a new table click on <span class="tut-snippet">Manage App</span>. Now you'll be redirected to tables screen. Click on <span class="tut-snippet">Add new table</span>.

![Manage App Button](https://blog.cloudboost.io/content/images/2016/03/tables.png)

![Add New Table](https://blog.cloudboost.io/content/images/2015/09/Capture-2.PNG)

><span class="tut-info">Info</span> User, Role and Device tables are added by default to every app in CloudBoost. These tables are cannot be deleted. It's okay not to use these tables if you don’t need them. We'll talk more about User,Role and Device tables later in the documentation. Basically, User and Roles are used to build Authentication and Devices are used for Push Notifications.

<p>&nbsp;</p>
><span class="tut-info">Info</span> Table name cannot start with a number and cannot contain any special characters. Table name should be **unique**.

After you create a new table. Click on it which will take you to a Data Browser screen where you can create new columns.

#Create Columns

To create a new columns click on <span class="tut-snippet">+</span> button and then enter your column name with the data type. Also select <span class="tut-snippet">unique</span> if the data in the column is supposed to be unique for every object that is saved, and select <span class="tut-snippet">required</span> if you don’t want <span class="tut-snippet">null</span> values to be saved in that column.

<img class="full-length-img" alt="Your New Table" src="https://blog.cloudboost.io/content/images/2016/03/datab.png">

><span class="tut-imp">Important:</span> Column names cannot start with a number and cannot contain any special characters. Column name should be unique.

After you create a new column. You can begin integrating CloudBoost with your app. In this example, we created a column called <span class="tut-snippet">name</span> which is of type <span class="tut-snippet">text</span>. (To check other out CloudBoost Data Types, Click [here]( ?lang=en&category=datastorage&subcategory=objects#Data-types).)

#Initialize your app

Before you initialize your app, you need to import or link the CloudBoost SDK in your project.

==JavaScript==
<span class="js-lines" data-query="link">
```
<script src="https://cloudboost.io/js-sdk/cloudboost.js"/>
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="link">
```
//On Terminal
npm install cloudboost --save
//In server.js / app.js file.
var CB = require('cloudboost');
```
</span>

==Java==
<span class="java-lines" data-query="link">
```
//Install CloudBoost from Maven :
//http://mvnrepository.com/artifact/io.cloudboost
import io.cloudboost.*;
```
</span>

==iOS==
<span class="ios-lines" data-query="link">
```
// install pod, "pod CloudBoost"
import CloudBoost
```
</span>

==.NET==
<span class="dotnet-lines" data-query="link">
```
//Nuget Package Manager
Install-Package cloudboost
```
</span>

==cURL==
<span class="curl-lines" data-query="link">
```
//No step required.
```
</span>

Once you have imported CloudBoost SDK to your project. You need to initialize your new CloudApp.

To initialize your new CloudApp, You need to go back to your CloudBoost App Page, and then click on *App Keys*

![App Keys](https://blog.cloudboost.io/content/images/2016/03/appkeys.png)

![App ID, Master Key and Client Key](https://blog.cloudboost.io/content/images/2015/09/Capture-1.PNG)

You will see two **keys** : **Master Key** and **Client Key**

><span class="tut-info">Info</span> **Master Key** : Master key is the most important key and it is essential that you keep it **private** all the times. Master key will help you ignore all the security rules which CloudBoost sets for you by default. Please see Security for more information. Master Key will also help you to dynamically Create, Edit, Delete Tables and Columns from the SDK. We recommend you to **Never expose your master key in any of your clients, but ONLY use master key only on your server**

<p>&nbsp;</p>
><span class="tut-info">Info</span> **Client Key** : Client key is the public key and can be used in your apps. Client key can be exposed to your apps, but you need to make sure you set the CloudBoost Security parameters. Check the section on Security to read about this more.  Client Key will respect all the Security Rules.

><span class="tut-imp">Important:</span> Never expose your master key in your apps. Master key can only be used on the server.

Now you know your App ID and Keys, You can now proceed to initialize your App.


==JavaScript==
<span class="js-lines" data-query="init">
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="init">
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```
</span>

==Java==
<span class="java-lines" data-query="init">
```
CloudApp.init("YOUR APP ID", "YOUR APP KEY");
```
</span>

==iOS==
<span class="ios-lines" data-query="init">
```
let app = CloudApp.init(appID: "YOUR APP ID", appKey: "YOUR APP KEY")
```
</span>

==.NET==
<span class="dotnet-lines" data-query="init">
```
CB.CloudApp.Init('YOUR APP ID', 'YOUR APP KEY');
```
</span>

==cURL==
<span class="curl-lines" data-query="init">
```
//You dont need to initialize the app for REST.
```
</span>

After your app is initialized. You can write code to save and query data.

#Saving data

To save new records (we call it objects, more specifically CloudObjects) in your tables. You first need to create a new <span class="tut-snippet">CloudObject</span>, add data to it and call save.

==JavaScript==
<span class="js-lines" data-query="save">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
obj.save({
    success : function(obj){
        //obj saved.
    },error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="save">
```
var obj = new CB.CloudObject('TableName');
obj.set('ColumnName', data);
obj.save({
    success : function(obj){
        //obj saved.
    },error : fucntion(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="save">
```
CloudObject obj = new CloudObject("TableName");
obj.set("ColumnName", data);
obj.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException t) {
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

==iOS==
<span class="ios-lines" data-query="save">
```
let obj = CloudObject(tableName: "TableName")
obj.set("ColumnName", value: data)
obj.save({ resp in
    if(resp.success){
      // successfully saved
    }
})
```
</span>

==.NET==
<span class="dotnet-lines" data-query="save">
```
var obj = new CB.CloudObject("TableName");
obj.Set("ColumnName", data);
CB.CloudObject savedObj = await obj.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="save">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${appKey},
  "document": {     "_type": "custom",
        "expires": null,
        ${column_name}: ${column_value},
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "name"],
        "_tableName": "TableName",
        "ACL": {
            "write": {
                "allow": {
                    "role": [],
                    "user": ["all"]
                },
                "deny": {
                    "role": [],
                    "user": []
                }
            },
            "read": {
                "allow": {
                    "role": [],
                    "user": ["all"]
                },
                "deny": {
                    "role": [],
                    "user": []
                }
            }
        },
        "_isModified": true}
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>

If you want to learn more about CloudObjects and Data Storage, Click [here](?lang=en&category=datastorage&subcategory=objects).

#Querying data

To query records from your table. You first need to create a <span class="tut-snippet">CloudQuery</span> object, set your query and then call <span class="tut-snippet">find</span>.

==JavaScript==
<span class="js-lines" data-query="query">
```
var query = new CB.CloudQuery('TableName');
query.equalTo('ColumnName', data);
query.find({
    success : function(list){
        //list is an array of CloudObjects
    },error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="query">
```
var query = new CB.CloudQuery('TableName');
query.equalTo('ColumnName', data);
query.find({
    success : function(list){
        //list is an array of CloudObjects
    },error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="query">
```
CloudQuery query = new CloudQuery("TableName");
query.equalTo("ColumnName", data);
query.find(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException t) {
		if(x != null){
			//objects
		}
		if(t != null){
			//any errors
		}
	}
});
```
</span>

==iOS==
<span class="ios-lines" data-query="query">
```
let query = CloudQuery(tableName: "TableName")
// throws error if the "obj: data" passed is not an acceptable value
try! query.equalTo("ColumnName", obj: data)
//
try! query.find({ response in
    response.log()
})
```
</span>

==.NET==
<span class="dotnet-lines" data-query="query">
```
var query = new CB.CloudQuery("TableName");
query.EqualTo("ColumnName", data);
List<CB.CloudObject> list = await query.Find();
```
</span>

==cURL==
<span class="curl-lines" data-query="query">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${appKey},
    "limit": 10,
    "sort": {        
    },
    "select": {        
    },
    "query": {
        "$includeList": [],
        "$include": [],
        "name": "bengi"
    },
    "skip": 0
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}/find'
```
</span>

If you want to learn more about Queries, Check out the query section [here](?lang=en&category=query&subcategory=basicqueries).
