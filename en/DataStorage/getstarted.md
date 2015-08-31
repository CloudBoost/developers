#####In this section

In this section you'll learn how to create your new App (we call it CloudApp) and create your fist Table (CloudTable). You will also learn about default columns in CloudBoost and how to create few of your own columns in your table. Finally we'll link the CloudBoost SDK to your project, save few objects (CloudObjects) in the table you have created and query it with a simple query (CloudQuery). 

#Create your first App.

If you haven't signed up on CloudBoost yet, this is the right time for you to create your new account and get started right away, CloudBoost gives you an enough free tier (check Pricing) so you can build your projects and launch it for free. Once you have signed up and activated your account by verifying your email. You will then be able to create a new app by entering <span class="tut-snippet">App Name</span> and the <span class="tut-snippet">App ID</span>.

<img class="full-length-img" alt="Your CloudBoost Dashboard" src="https://blog.cloudboost.io/content/images/2015/08/Screen1.PNG">

<img class="center-img" alt="App" src="https://blog.cloudboost.io/content/images/2015/08/Screen2.PNG">

><span class="tut-info">Info</span> **App Name** : Application Name is any name that makes sense to you as a developer and helps YOU find this particular app with other apps in your dashboard which you have created. It is a any <span class="tut-snippet">string</span> which you want. 

<p>&nbsp;</p>
>Info: **App ID** : Application ID is **unique** to all of CloudBoost Network. It is a any <span class="tut-snippet">string</span> which should be **lowercase, cannot start with a number, and should be without any special characters**. AppID is used to initialize your CloudApp in the SDK. We'll talk about that later. 

![CloudApp Created](https://blog.cloudboost.io/content/images/2015/08/Screen3.PNG)

After you enter your App ID and App Name, your new CloudApp is created. Now, you can create a new table in your app. 

#Creating a new table

To create a new table click on <span class="tut-snippet">Tables</span> when you're on your App Screen and then click on <span class="tut-snippet">Add new table</span>. 

!(Tables button in App Screen)[]

!(Add new table)[]

>Info: User and Role tables are added by default to every app in CloudBoost. These tables are cannot be deleted. It's okay not to use these tables if you dont need them and let them remain. We'll talk more about User and Role tables in security section of this documentation. 

>Info: Table names cannot start with a number and cannot contain any special characters. Table name should not be same as any other tables of the same app. 

After you create a new table. Click on it which will take you to a screen where you can create new columns.

#Create Columns

To create a new columns click on <span class="tut-snippet">+</span> button on the table header when you're in Data Browser Screen and then enter your column name with the Data Type. Also select <span class="tut-snippet">unique</span> if the data in the column is supposed to be unique for every object that is saved, and select <span class="tut-snippet">required</span> if you dont want <span class="tut-snippet">null</span> values to be saved in that column.

!(+ Icon on tables)[]

!(Add new table)[]

>Important : Column names cannot start with a number and cannot contain any special characters. Column name should not be same as any other columns of the same table. 

After you create a new column. You can begin integrating CloudBoost with your project. In this example, We have created a column called <span class="tut-snippet">name</span> which is of type <span class="tut-snippet">text</span>. (To check other out CloudBoost Data Types, Click here.)


#Initialize your app

Before you initialize your app, You need to import or link the CloudBoost SDK in your project. 

<p class="js-lines widget-start">==JavaScript==</p>
```
<script src="https://cloudboost.io/js-sdk/cloudboost.js"/>
```

<p class="nodejs-lines widget-end">==NodeJS==</p>
```
npm install cloudboost

var CB = require('cloudboost');
```

Once you have imported and linked the CloudBoost SDK to your project. We need to initialize your new CloudApp. 

To initialize your new CloudApp, You need to go back to your CloudBoost App Page, and then click on *App Keys*

![App Keys on an App](https://blog.cloudboost.io/content/images/2015/08/AppKey.PNG)

![App ID, Master Key and Client Key]()

You will see two **keys** : **Master Key** and **Client Key**

>Info: **Master Key** : Master key is the most important key and it is essential that you keep it **private** at all costs. Masket key will help you ignore all the Security Rules which CloudBoost sets for you by default. Please see Security for more information. Master Key will also help you to dynamically Create, Edit, Delete Tables and Columns from the SDK. We recommend you **Never expose your master key in any of your clients, but use master key only on your server**

>Info: **Client Key** : Client key is the public key and can be used on your client. Client key can be exposed to your clients, but you need to make sure you set the CloudBoost Security parameters. Check the section on Security to read about this more.  Client Key will respect all the Security Rules which CloudBoost sets for you by default.

>Important : Never expose your master key on your clients. Master key can only be used on the server. 

Now you know your AppID and Keys, You can now proceed to initialize your App. 


==JavaScript==
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```

==NodeJS==
```
CB.CloudApp.init('YOUR APP ID', 'YOUR APP KEY');
```

After your app is initialized. You can proceed to the next step which is saving data. 

#Saving data

To save new records (we call it objects, more specifically CloudObjects) in your tables. You first need to create a <span class="tut-snippet">CloudObject</span>, set data to it and call save function / method. 

==JavaScript==
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

==NodeJS==
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

If you want to learn more about CloudObjects and Data Storage, Click here. 

#Querying data

To query records from your table. You first need to create a <span class="tut-snippet">CloudQuery</span> object, set your query and then call the <span class="tut-snippet">find</span> function/method.

==JavaScript==
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

==NodeJS==
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

If you want to learn more about Queries, Check out the query section here. 

#####What's next?
TODO : [Add a link to the next post.]


