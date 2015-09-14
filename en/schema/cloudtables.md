#####In this section

In this section you'll learn how to create an Table (we call it CloudTable) and and save it into your CloudBoost App. You will also learn about default columns in tables. Finally we'll also learn to add, delete and update columns in a CloudTable. 

#Saving a new table.

If you haven't created a new app and a table yet. Please take a look into [Getting Started]() section. To create a new table you need to initialize a new variable with the type CloudTable.

==JavaScript==
```
var table = new CB.CloudTable('TableName');
```

==NodeJS==
```
var table = new CB.CloudTable('TableName');
```

To add columns, You need to create a new `Column` Object and assign it to the CloudColumn class. You can use the `addColumn` function / method of CloudTable class

==JavaScript==
```
var table = new CB.CloudTable('Student');
var column = new CB.Column('Name', 'Text');
table.addColumn(column);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

==NodeJS==
```
var table = new CB.CloudTable('Student');
var column = new CB.Column('Name', 'Text');
table.addColumn(column);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

#Default Columns

Every CloudTable when created has default columns attached to it. Here is a list of all the default columns attached to CloudTable when you initialize them. **All of the default columns are not editable or deleteable.**

* **Id** : [Text] A unique ID column of a CloudObject. 

* **CreatedAt** : [DateTime] A DateTime stamp of when the Object is created.  

* **UpdatedAt** : [DateTime] A DateTime stamp of when the Object is updated. 

* **Expires** : [DateTime] `null` by default. You can set `expires` to any value in the future and CloudBoost will make sure the CloudObject will automatically be deleted at that time.   

* **ACL** : [CB.ACL] ACL's are Access Control List. They protect your data. You can read more about ACL's in the [Security]() section. By default, ACL's are Public read and Public write which means anyone can read or write any data. You can modify this in a way where you give write and read access to a particular User or/and Role and this is how you protect specific sections of your data stored in CloudBoost. To know more about ACL's, click [here]()

#Adding new columns

Before you add columns to the CloudTable you need to instantiate new column objects from Column class. 


==JavaScript==
```
var column = new CB.Column('Name');
column.required = true;
column.unique = false;
column.dataType = 'Text';
```

==NodeJS==
```
var column = new CB.Column('Name');
column.required = true;
column.unique = false;
column.dataType = 'Text';
```

You need to add the new column object to the CloudTable object.

==JavaScript==
```
var table = new CB.CloudTable('Student');
table.addColumn(column1);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
})
```

==NodeJS==
```
var table = new CB.CloudTable('Student');
table.addColumn(column1);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

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

####Relational Data-types.

* **Relation** : Used as a relation to any other [CB.CloudObject]() of the same or any other table.

* **List** : This is an Array and this can be an Array of anything. From a simple example of Array of Text to a more complicated example of Array of Relations. 

#Adding List Columns

Here's the sample code which will help you add a list column : 

==JavaScript==
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.listDataType = 'Text';
```
==NodeJS==
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.listDataType = 'Text';
```

#Adding Relational Columns

There are two types of DataTypes which are considered when you're relating tables. 

* Relations
* List

Here's the sample code which will help you add a relation column

==JavaScript==
```
var column = new CB.Column('Name');
column.dataType = 'Relation';
column.relatedTo = 'TableName';
```
==NodeJS==
```
var column = new CB.Column('Name');
column.dataType = 'Relation';
column.relatedTo = 'TableName';
```


If you want to add a list relational column, then : 

==JavaScript==
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.relatedTo = 'TableName';
```
==NodeJS==
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.relatedTo = 'TableName';
```

#Getting Columns

To get columns from a CloudTable, You can, 

==JavaScript==
```
var columns = table.columns; //array of CB.Column Objects 
```
==NodeJS==
```
var columns = table.columns; //array of CB.Column Objects 
```

You can even get columns using : 


==JavaScript==
```
var column = table.getColumn('name'); //CB.Column Object
```
==NodeJS==
```
var column = table.getColumn('name'); //CB.Column Object
```


#Editing Columns

To edit columns from a CloudTable, You can, 

==JavaScript==
```
var column = table.getColumn('Name');
column.required = true; 
table.updateColumn(column);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```
==NodeJS==
```
var column = table.getColumn('Name');
column.required = true; 
table.updateColumn(column);
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

>Info: You cannot edit the ColumnName and DataType after its saved. You can only change `required` and `unique` properties of a column.

#Deleting Columns

To delete columns from a CloudTable, You can, 

==JavaScript==
```
table.deleteColumn('ColumnName');
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```
==NodeJS==
```
table.deleteColumn('ColumnName');
table.save({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

#Deleting Table

To delete tables from a CloudApp, You can, 

==JavaScript==
```
table.delete({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```
==NodeJS==
```
table.delete({
	success : function(table){
    
    }, error : fucntion(error){
    
    }
});
```

#Getting Tables

To get all the tables from a CloudApp, You can, 

==JavaScript==
```
CB.CloudTable.getAll({
	success : function(tables){
    	//tables is an array of CB.CloudTable
    }, error : fucntion(error){
    
    }
});
```
==NodeJS==
```
CB.CloudTable.getAll({
	success : function(tables){
    	//tables is an array of CB.CloudTable
    }, error : fucntion(error){
    
    }
});
```

To get a particular table from a CloudApp, You can, 

==JavaScript==
```
CB.CloudTable.get('TableName', {
	success : function(tables){
    	//tables is an array of CB.CloudTable
    }, error : fucntion(error){
    
    }
});
```
==NodeJS==
```
CB.CloudTable.get('TableName', {
	success : function(tables){
    	//tables is an array of CB.CloudTable
    }, error : fucntion(error){
    
    }
});
```







