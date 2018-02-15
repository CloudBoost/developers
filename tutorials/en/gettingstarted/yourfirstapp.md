#####In this section

In this section, you will learn how to add the CloudBoost SDK to your project and how to:

* Create a new app ([CloudApp](https://docs.cloudboost.io/#CloudApp))
* Create a new table ([CloudTable](https://docs.cloudboost.io/#CloudTable))
* Save simple objects ([CloudObjects](https://docs.cloudboost.io/#CloudObject)) in tables
* Query tables with [CloudQueries](https://docs.cloudboost.io/#CloudQuery)

#Create your first App

If you have not already done so, create a [CloudBoost](https://www.cloudboost.io) account. CloudBoost gives you a ton of [free tier features](https://www.cloudboost.io/pricing), so you can build and launch apps for free.

After signing up, create a new app by entering an <span class="tut-snippet">App Name</span>.

![Creating a new app](https://www.dropbox.com/s/paaqr85uma81d9i/app.png?raw=1)

![Your created app](https://www.dropbox.com/s/kc6mu0eeuu9uuvh/sampleapp.png?raw=1)

#Creating a new table

Click on <span class="tut-snippet">Manage App</span>. You will be redirected to the Tables screen. Click on <span class="tut-snippet">Add new table</span>.

![Manage App button](https://www.dropbox.com/s/no2gls6fjfd0r82/tables.png?raw=1)

![Add New Table button](https://www.dropbox.com/s/haw8zhuhido1bu5/Capture-2.PNG?raw=1)

><span class="tut-info">Info</span> User, Role and Device tables are added by default to every CloudApp.

<p>&nbsp;</p>
><span class="tut-info">Info</span> Table names cannot start with a number, cannot contain any special characters, and must be **unique**.

After creating a table, click on it. This will take you to the Data Browser screen where you can create new columns for the table.

#Create Columns

Click on the <span class="tut-snippet">+</span> button. Enter the new column's name and select its data type. Optionally:

* Select <span class="tut-snippet">unique</span> to prevent more than one object from having the same value for this column in the table.
* Select <span class="tut-snippet">required</span> to require the column to have a value before an object can be saved in the table. This prevents the value <span class="tut-snippet">null</span> being saved.

<img class="full-length-img" alt="Your New Table" src="https://www.dropbox.com/s/tevwbxccjdohs70/datab.png?raw=1">

><span class="tut-imp">Important:</span>Column names cannot start with a number, cannot contain any special characters, and must be unique.

After creating a column, you can begin integrating CloudBoost with your app. This example created a column called <span class="tut-snippet">name</span> of type <span class="tut-snippet">text</span>.

Click [here]( ?lang=en&category=datastorage&subcategory=objects#Data-types) for info on other table data types.

#Initialize your app

Before initializing your app, the CloudBoost SDK must be imported into or linked to the project.

==JavaScript==
<span class="js-lines" data-query="link">
```
// browser include
<script src="https://cloudboost.io/js-sdk/cloudboost.js"/>
//OR
//module bundlers import (ES6/ES7 , TypeScript(typings included))
import * as CB from 'cloudboost'
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

==cURL==
<span class="curl-lines" data-query="link">
```
//No step required.
```
</span>

After integrating the CloudBoost SDK, the CloudApp must be initialized.

On the CloudBoost App page, click on *App Keys*.

![App Keys](https://www.dropbox.com/s/z257vq0ioby6w73/appkeys.png?raw=1)

![App ID, Master Key and Client Key](https://www.dropbox.com/s/59ypn35kiemi8zu/Capture-1.PNG?raw=1)

You will see two **keys**.

##Master Key

This key is the most important key. It is essential that it always be kept **private** from clients. Store it only on the server. This key will help you ignore all the security rules which CloudBoost sets for you by default (see the Security section for more information). This key is used to programmatically create, modify, and delete tables and columns using the SDK.

##Client key

This key is the public key. It can be used in your client apps. However, the CloudBoost Security parameters must be set (see the Security section for more information). This key will respect the Security Rules.

With the keys, use the SDK to initialize your app:

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

==cURL==
<span class="curl-lines" data-query="init">
```
//You dont need to initialize the app for REST.
```
</span>

After your app is initialized, you can write code to save and query data.

#Saving data

Create a new <span class="tut-snippet">CloudObject</span> for the table. Use the `set` method to add data to it. Call the appropriate save method for the platform to save the object.

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
    },error : function(error){
        //error
    }
});
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

Click [here](/en/datastorage/objects) to learn more about CloudObjects.

#Querying data

Create a <span class="tut-snippet">CloudQuery</span> object. Set your query with the appropriate platform methods. Then, call the <span class="tut-snippet">find</span> method.

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

Click [here](/en/query/basicqueries) to learn more about CloudQueries.
