#####In this section

In this section you'll learn how to create an Object (we call it CloudObject) and and save it into your CloudTable. You will also learn about default properties in objects. Finally we'll also learn to update, delete and refresh / fetch CloudObjects and look into various data-types CloudBoost supports. 

#Saving Objects

If you haven't created a new app and a table yet. Please take a look into [Getting Started]() section. To create a new object you need to initialize a new variable with the type CloudObject.

==JavaScript==
<span class="js-lines" data-query="create">
```
var obj = new CB.CloudObject('TableName');
```
</span>


==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var obj = new CB.CloudObject('TableName');
```
</span>

To set data into the objects, You can use the <span class="tut-snippet">set</span> function / method of CloudObject class. 

==JavaScript==
<span class="js-lines" data-query="set">
```
obj.set('ColumnName',data);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="set">
```
obj.set('ColumnName',data);
```
</span>

To know more about what data types CloudBoost supports. Please check this [Data Types]() section.

To save your CloudObject, you can call the save function/method and it will save the object to the CloudTable. 

==JavaScript==
<span class="js-lines" data-query="save">

```
var obj = new CB.CloudObject('TableName');

obj.set('ColumnName', data);

obj.save({
    success : function(obj){
        console.log(obj.id); //a new id is automatically generated. 
    },error : fucntion(error){
        //object failed to save.  
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
        console.log(obj.id); //a new id is automatically generated. 
    },error : fucntion(error){
        //object failed to save.  
    }
});
```
</span>


#Data-types

CloudBoost has data-types to support various forms of data. All the way from Text, URL, Emails, Objects, Files and a whole lot more. Here is a list of data-types CloudBoost supports. 

####Simple Data-types.

* **Text** : Used to store string / text of any length. 

* **URL** : Used to store a URL. 

* **Email** : Used to store an Email.

* **Number** : Used to store a number.

* **Boolean** : Used to store true / false. 

* **Date Time** : Used to a date time. 

* **Geo Point** : Used to store latitude / longitude. This is  [CB.GeoPoint]() Object instance. 

* **Object** : Used to store a JSON object.

* **Files** : Used to store the file of any size. 

* **Encrypted Text** : Used to store important text like Password, etc. 

####Relational Data-types

* **Relation** : Used as a relation to any other [CB.CloudObject]() of the same or any other table.

* **List** : This is an Array and this can be an Array of anything. From a simple example of Array of Text to a more complicated example of Array of Relations. 

>Info: CloudBoost is schema-mix database. For all your schema-full data, use the columns with respective datatypes, for schema-less data use the data-type called <span class="tut-snippet">Object</span> and you can store any type of data in it. 


#Default Properties

Every CloudObject when created has default properties attached to it. Here is alist of all the default properties attached to CloudObjects when you initialize them. 

* **Id** : [Text] A unique ID of a CloudObject is assigned as soon as the Object is saved. **You cannot assign a user-defined ID to a CloudObject**.

==JavaScript==
<span class="js-lines" data-query="viewid">
```
//Id is null when you create the object but gets assigned to an Object as soon as you save it. 
console.log(obj.id);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewid">
```
//Id is null when you create the object but gets assigned to an Object as soon as you save it. 
console.log(obj.id);
```
</span>

* **CreatedAt** : [DateTime] A DateTime stamp of when the Object is created. This property is automatically assigned by CloudBoost.  

==JavaScript==
<span class="js-lines" data-query="viewcreateat">
```
obj.createdAt;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewcreateat">
```
obj.createdAt;
```
</span>

* **UpdatedAt** : [DateTime] A DateTime stamp of when the Object is updated. This property is automatically assigned by CloudBoost.  

==JavaScript==
<span class="js-lines" data-query="viewupdateat">
```
obj.updatedAt;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewupdateat">
```
obj.updatedAt;
```
</span>


* **Expires** : [DateTime] <span class="tut-snippet">null</span> by default. You can set <span class="tut-snippet">expires</span> to any value in the future and CloudBoost will make sure the CloudObject will automatically be deleted at that time.   

==JavaScript==
<span class="js-lines" data-query="viewexpires">
```
obj.expires;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewexpires">
```
obj.expires;
```
</span>

* **ACL** : [CB.ACL] ACL's are Access Control List. They protect your data. You can read more about ACL's in the [Security]() section. By default, ACL's are Public read and Public write which means anyone can read or write any data. You can modify this in a way where you give write and read access to a particular User or/and Role and this is how you protect specific sections of your data stored in CloudBoost. To know more about ACL's, click [here]()

==JavaScript==
<span class="js-lines" data-query="viewacl">
```
obj.ACL;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewacl">
```
obj.ACL;
```
</span>

#Updating Objects

To update a CloudObject you can set any column you like to any data and call the save function/method again.

==JavaScript==
<span class="js-lines" data-query="update">
```
obj.set('ColumnName', newData);

obj.save({
    success : function(obj){
        console.log(obj.id); //id is the same.  
    },error : fucntion(error){
        //object failed to save.  
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="update">
```
obj.set('ColumnName', newData);

obj.save({
    success : function(obj){
        console.log(obj.id); //id is the same.  
    },error : fucntion(error){
        //object failed to save.  
    }
});
```
</span>

#Fetching Objects

If you have an old or a stale copy of CloudObject and you want to refresh / fetch a updated one from the server then you can use the fetch method / function of CloudObject. 

==JavaScript==
<span class="js-lines" data-query="fetch">
```
obj.fetch({
    success : function(obj){
        //an updated of object is fetched from the server.  
    },error : fucntion(error){
        
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="fetch">
```
obj.fetch({
    success : function(obj){
        //an updated of object is fetched from the server.  
    },error : fucntion(error){
          
    }
});
```
</span>

#Deleting Objects

If you want to delete an object form the database then you need to call the delete function / method of CloudObject. 

==JavaScript==
<span class="js-lines" data-query="delete">
```
obj.delete({
    success : function(obj){
        //an object is deleted from the server
    },error : fucntion(error){
        
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="delete">
```
obj.delete({
    success : function(obj){
        //an object is deleted from the server
    },error : fucntion(error){
        
    }
});
```
</span>

#####What's next?

In the next section you'll learn how to create relations between CloudObjects, and save them to the database. Click [here]() to go to the relations documentation.



