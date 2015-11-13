#####In this section

In this section you'll learn how to create your new App (we call it [CloudApp]( https://docs.cloudboost.io/#CloudApp)) and create your fist Table ([CloudTable]( https://docs.cloudboost.io/#CloudTable)). You will also learn about default columns in CloudBoost and how to create few of your own columns in your table. Finally we'll link the CloudBoost SDK to your project, save few objects ([CloudObjects]( https://docs.cloudboost.io/#CloudObject)) in the table you have created and query it with a simple query ([CloudQuery]( https://docs.cloudboost.io/#CloudQuery)). 

#Create your first App

If you haven't signed up on CloudBoost yet, this is the right time for you to create your new account and get started right away, CloudBoost gives you an enough free tier (check Pricing) so you can build your projects and launch it for free. Once you have signed up and activated your account by verifying your email. You will then be able to create a new app by entering <span class="tut-snippet">App Name</span> and thee <span class="tut-snippet">App ID</span>.

<img class="full-length-img" alt="Your CloudBoost Dashboard" src="https://blog.cloudboost.io/content/images/2015/08/Screen1.PNG">

<img class="center-img" alt="App" src="https://blog.cloudboost.io/content/images/2015/08/Screen2.PNG">

><span class="tut-info">Info</span> **App Name** : Application Name is any name that makes sense to you as a developer and helps YOU find this particular app with other apps in your dashboard which you have created. It is a any <span class="tut-snippet">string</span> which you want. 

<p>&nbsp;</p>
><span class="tut-info">Info</span> **App ID** : Application ID is **unique** to all of CloudBoost Network. It is a any <span class="tut-snippet">string</span> which should be **lowercase, cannot start with a number, and should be without any special characters**. AppID is used to initialize your CloudApp in the SDK. We'll talk about that later. 

![CloudApp Created](https://blog.cloudboost.io/content/images/2015/08/Screen3.PNG)

After you enter your App ID and App Name, your new CloudApp is created. Now, you can create a new table in your app. 

#Creating a new table

To create a new table click on <span class="tut-snippet">Tables</span> when you're on your App Screen and then click on <span class="tut-snippet">Add new table</span>. 

![Tables button in App Screen](https://blog.cloudboost.io/content/images/2015/09/Untitled-1.png)

![Add new table](https://blog.cloudboost.io/content/images/2015/09/Capture-2.PNG)

><span class="tut-info">Info</span> User and Role tables are added by default to every app in CloudBoost. These tables are cannot be deleted. It's okay not to use these tables if you don’t need them and let them remain. We'll talk more about User and Role tables in security section of this documentation. 

<p>&nbsp;</p>
><span class="tut-info">Info</span> Table names cannot start with a number and cannot contain any special characters. Table name should not be same as any other tables of the same app. 

After you create a new table. Click on it which will take you to a screen where you can create new columns.

#Create Columns

To create a new columns click on <span class="tut-snippet">+</span> button on the table header when you're in Data Browser Screen and then enter your column name with the Data Type. Also select <span class="tut-snippet">unique</span> if the data in the column is supposed to be unique for every object that is saved, and select <span class="tut-snippet">required</span> if you don’t want <span class="tut-snippet">null</span> values to be saved in that column.

![+ Icon on tables](https://blog.cloudboost.io/content/images/2015/09/Untitled-1.png)

![Add new table](https://blog.cloudboost.io/content/images/2015/09/Untitled-1.png)

><span class="tut-imp">Important:</span> Column names cannot start with a number and cannot contain any special characters. Column name should not be same as any other columns of the same table. 

After you create a new column. You can begin integrating CloudBoost with your project. In this example, We have created a column called <span class="tut-snippet">name</span> which is of type <span class="tut-snippet">text</span>. (To check other out CloudBoost Data Types, Click [here]( ?lang=en&category=datastorage&subcategory=objects#Data-types).)


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
npm install cloudboost
var CB = require('cloudboost');
```
</span>

==Java==
<span class="java-lines" data-query="link">
```
import io.cloudboost.*;
```
</span>

Once you have imported and linked the CloudBoost SDK to your project. We need to initialize your new CloudApp. 

To initialize your new CloudApp, You need to go back to your CloudBoost App Page, and then click on *App Keys*

![App Keys on an App](https://blog.cloudboost.io/content/images/2015/09/Untitled.png)

![App ID, Master Key and Client Key](https://blog.cloudboost.io/content/images/2015/09/Capture-1.PNG)

You will see two **keys** : **Master Key** and **Client Key**

><span class="tut-info">Info</span> **Master Key** : Master key is the most important key and it is essential that you keep it **private** at all costs. Master key will help you ignore all the Security Rules which CloudBoost sets for you by default. Please see Security for more information. Master Key will also help you to dynamically Create, Edit, Delete Tables and Columns from the SDK. We recommend you **Never expose your master key in any of your clients, but use master key only on your server**

<p>&nbsp;</p>
><span class="tut-info">Info</span> **Client Key** : Client key is the public key and can be used on your client. Client key can be exposed to your clients, but you need to make sure you set the CloudBoost Security parameters. Check the section on Security to read about this more.  Client Key will respect all the Security Rules which CloudBoost sets for you by default.

><span class="tut-imp">Important:</span> Never expose your master key on your clients. Master key can only be used on the server. 

Now you know your App ID and Keys, You can now proceed to initialize your App. 


==JavaScript==
<span class="js-lines" data-query="init">
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```
</span>

<span class="nodejs-lines" data-query="init">
==NodeJS==
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```
</span>

==Java==
<span class="java-lines" data-query="init">
```
CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```
</span>
After your app is initialized. You can proceed to the next step which is saving data. 

#Saving data

To save new records (we call it objects, more specifically CloudObjects) in your tables. You first need to create a <span class="tut-snippet">CloudObject</span>, set data to it and call save function / method. 

==JavaScript==
<span class="js-lines" data-query="save">
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
CloudObject obj = new CloudObject('TableName');
obj.set('ColumnName', data);
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

If you want to learn more about CloudObjects and Data Storage, Click [here]( ?lang=en&category=datastorage&subcategory=objects). 

#Querying data

To query records from your table. You first need to create a <span class="tut-snippet">CloudQuery</span> object, set your query and then call the <span class="tut-snippet">find</span> function/method.

==JavaScript==
<span class="js-lines" data-query="query">
```
var query = new CB.CloudQuery('TableName');
query.equalTo('ColumnName', data);
query.find({
    success : function(list){
        //list is an array of CloudObjects
    },error : fucntion(error){
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
    },error : fucntion(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="query">
```
CloudQuery query = new CloudQuery('TableName');
query.equalTo('ColumnName', data);
query.find(new CloudObjectArrayCallback(){
	@Override
	public void done(CloudObject[] x, CloudException t) {	
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

If you want to learn more about Queries, Check out the query section [here](?lang=en&category=query&subcategory=basicqueries). 



