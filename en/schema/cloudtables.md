#####In this section

In this section you'll learn how to create a Table (we call it [CloudTable]( https://docs.cloudboost.io/#CloudTable)) and save it into your CloudBoost App. You will also learn about default columns in tables. Finally we'll also learn to add, delete and update columns in a CloudTable. 

#Saving a new table

If you haven't created a new app and a table yet. Please take a look into [Getting Started](?lang=en&category=gettingstarted&subcategory=yourfirstapp) section. To create a new table you need to initialize a new variable with the type CloudTable.

==JavaScript==
<span class="js-lines" data-query="create">
```
var table = new CB.CloudTable('TableName');
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var table = new CB.CloudTable('TableName');
```
</span>
==Java==
<span class="java-lines" data-query="create">
```
CloudTable table = new CloudTable('TableName');
```
</span>

To add columns, you need to create a new <span class="tut-snippet"> Column</span> Object and assign it to the CloudColumn class. You can use the <span class="tut-snippet">addColumn</span> function / method of CloudTable class

==JavaScript==
<span class="js-lines" data-query="savecol">
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
</span>

==NodeJS==
<span class="nodejs-lines" data-query="savecol">
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
</span>
==Java==
<span class="java-lines" data-query="savecol">
```
CloudTable table = new CloudTable('Student');
Column column = new Column('Name', 'Text');
table.addColumn(column);
table.save(new CloudObjectCallback(){
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
#Default Columns

Every CloudTable when created has default columns attached to it. Here is a list of all the default columns attached to CloudTable when you initialize them. **All of the default columns are not editable or deleteable.**

* **Id** : [Text] A unique ID column of a CloudObject. 

* **CreatedAt** : [DateTime] A DateTime stamp of when the Object is created.  

* **UpdatedAt** : [DateTime] A DateTime stamp of when the Object is updated. 

* **Expires** : [DateTime] <span class="tut-snippet">null</span> by default. You can set <span class="tut-snippet">expires</span> to any value in the future and CloudBoost will make sure the CloudObject will automatically be deleted at that time.   

* **ACL** : [CB.ACL] ACL's are Access Control List. They protect your data. You can read more about ACL's in the [Security](?lang=en&category=security&subcategory=acl) section. By default, ACL's are Public read and Public write which means anyone can read or write any data. You can modify this in a way where you give write and read access to a particular User or/and Role and this is how you protect specific sections of your data stored in CloudBoost. To know more about ACL's, click [here](?lang=en&category=security&subcategory=acl)

#Adding new columns

Before you add columns to the CloudTable you need to instantiate new column objects from Column class. 


==JavaScript==
<span class="js-lines" data-query="createcol">
```
var column = new CB.Column('Name');
column.required = true;
column.unique = false;
column.dataType = 'Text';
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="createcol">
```
var column = new CB.Column('Name');
column.required = true;
column.unique = false;
column.dataType = 'Text';
```
</span>
==Java==
<span class="java-lines" data-query="createcol">
```
Column column = new Column('Name');
column.required = true;
column.unique = false;
column.dataType = 'Text';
```
</span>

You need to add the new column object to the CloudTable object.

==JavaScript==
<span class="js-lines" data-query="addcoltable">
```
var table = new CB.CloudTable('Student');
table.addColumn(column1);
table.save({
    success : function(table){
    }, error : fucntion(error){
    }
})
```
/span>

==NodeJS==
<span class="nodejs-lines" data-query="addcoltable">
```
var table = new CB.CloudTable('Student');
table.addColumn(column1);
table.save({
    success : function(table){
    }, error : fucntion(error){
    }
});
```
</span>
==Java==
<span class="java-lines" data-query="addcoltable">
```
CloudTable table = new CloudTable('Student');
table.addColumn(column1);
table.save(new CloudObjectCallback(){
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
#Data-types

CloudBoost has data-types to support various forms of data. All the way from Text, URL, Emails, Objects, Files and a whole lot more. Here is a list of data-types CloudBoost supports. 

####Simple Data-types.

* **Text** : Used to store string / text of any length. 

* **URL** : Used to store a URL. 

* **Email** : Used to store an Email.

* **Number** : Used to store a number.

* **Boolean** : Used to store true / false. 

* **Date Time** : Used to a date time. 

* **Geo Point** : Used to store latitude / longitude. This is  [CB.GeoPoint](https://docs.cloudboost.io/#CloudGeoPoint) Object instance. 

* **Object** : Used to store a JSON object.

* **Files** : Used to store the file of any size. 

* **Encrypted Text** : Used to store important text like Password, etc. 

####Relational Data-types.

* **Relation** : Used as a relation to any other [CB.CloudObject](https://docs.cloudboost.io/#CloudObject) of the same or any other table.

* **List** : This is an Array and this can be an Array of anything. From a simple example of Array of Text to a more complicated example of Array of Relations. 

#Adding List Columns

Here's the sample code which will help you add a list column : 

==JavaScript==
<span class="js-lines" data-query="listcol">
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.listDataType = 'Text';
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="listcol">
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.listDataType = 'Text';
```
</span>
==Java==
<span class="java-lines" data-query="listcol">
```
Column column = new Column('Name');
column.dataType = 'List';
column.listDataType = 'Text';
```
</span>
#Adding Relational Columns

There are two types of DataTypes which are considered when you're relating tables. 

* Relations
* List

Here's the sample code which will help you add a relation column

==JavaScript==
<span class="js-lines" data-query="relcol">
```
var column = new CB.Column('Name');
column.dataType = 'Relation';
column.relatedTo = 'TableName';
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="relcol">
```
var column = new CB.Column('Name');
column.dataType = 'Relation';
column.relatedTo = 'TableName';
```
</span>
==Java==
<span class="java-lines" data-query="relcol">
```
Column column = new Column('Name');
column.dataType = 'Relation';
column.relatedTo = 'TableName';
```
</span>
If you want to add a list relational column, then: 

==JavaScript==
<span class="js-lines" data-query="listrelcol">
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.relatedTo = 'TableName';
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="listrelcol">
```
var column = new CB.Column('Name');
column.dataType = 'List';
column.relatedTo = 'TableName';
```
</span>
==Java==
<span class="java-lines" data-query="listrelcol">
```
Column column = new Column('Name');
column.dataType = 'List';
column.relatedTo = 'TableName';
```
</span>
#Getting Columns

To get columns from a CloudTable, You can, 

==JavaScript==
<span class="js-lines" data-query="getcols">
```
var columns = table.columns; //array of CB.Column Objects 
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getcols">
```
var columns = table.columns; //array of CB.Column Objects 
```
</span>
==Java==
<span class="java-lines" data-query="getcols">
```
Column[] columns = table.columns; //array of Column Objects 
```
</span>
You can even get columns using: 


==JavaScript==
<span class="js-lines" data-query="getcolsalt">
```
var column = table.getColumn('name'); //CB.Column Object
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getcolsalt">
```
var column = table.getColumn('name'); //CB.Column Object
```
</span>
==Java==
<span class="java-lines" data-query="getcolsalt">
```
Column column = table.getColumn('name'); //Column Object
```
</span>
#Editing Columns

To edit columns from a CloudTable, You can, 

==JavaScript==
<span class="js-lines" data-query="editcol">
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
</span>

==NodeJS==
<span class="nodejs-lines" data-query="editcol">
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
</span>
==Java==
<span class="java-lines" data-query="editcol">
```
Column column = table.getColumn('Name');
column.required = true; 
table.updateColumn(column);
table.save(new CloudObjectCallback(){
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
>Info: You cannot edit the ColumnName and DataType after its saved. You can only change <span class="tut-snippet">required</span> and <span class="tut-snippet">unique</span> properties of a column.

#Deleting Columns

To delete columns from a CloudTable, you can, 

==JavaScript==
<span class="js-lines" data-query="delcol">
```
table.deleteColumn('ColumnName');
table.save({
    success : function(table){
    }, error : fucntion(error){
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="delcol">
```
table.deleteColumn('ColumnName');
table.save({
    success : function(table){
    }, error : fucntion(error){
    }
});
```
</span>
==Java==
<span class="java-lines" data-query="delcol">
```
table.deleteColumn('ColumnName');
table.save(new CloudObjectCallback(){
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

#Deleting Table

To delete tables from a CloudApp, you can, 

==JavaScript==
<span class="js-lines" data-query="deltable">
```
table.delete({
    success : function(table){
    }, error : fucntion(error){
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="deltable">
```
table.delete({
    success : function(table){
    }, error : fucntion(error){
    }
});
```
</span>
==Java==
<span class="java-lines" data-query="deltable">
```
table.delete(new CloudTableCallback(){
	@Override
	public void done(CloudTable x, CloudException t) {	
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

#Getting Tables

To get all the tables from a CloudApp, You can, 

==JavaScript==
<span class="js-lines" data-query="getalltabs">
```
CB.CloudTable.getAll({
    success : function(tables){
        //tables is an array of CB.CloudTable
    }, error : fucntion(error){
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getalltabs">
```
CB.CloudTable.getAll({
    success : function(tables){
        //tables is an array of CB.CloudTable
    }, error : fucntion(error){
    }
});
```
</span>
==Java==
<span class="java-lines" data-query="getalltabs">
```
CloudTable.getAll(new CloudTableArrayCallback(){
	@Override
	public void done(CloudTable[] x, CloudException t) {	
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>
To get a particular table from a CloudApp, You can, 

==JavaScript==
<span class="js-lines" data-query="gettabname">
```
CB.CloudTable.get('TableName', {
    success : function(tables){
        //tables is an array of CB.CloudTable
    }, error : fucntion(error){
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="gettabname">
```
CB.CloudTable.get('TableName', {
    success : function(tables){
        //tables is an array of CB.CloudTable
    }, error : fucntion(error){
    }
});
```
</span>
==Java==
<span class="java-lines" data-query="gettabname">
```
CloudTable.get('TableName', new CloudTableCallback(){
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




