#####In this section

In this section you'll learn what ACL's are and how to add security and access control to your data. Finally, you will also learn about how to give access to a particular user or a role to any [CloudObject](https://docs.cloudboost.io/#CloudObject) with ACL's. 

#Before we begin

ACL's are basically Access Control Lists and they're used to give read or write privileges to Users and Roles. Please read what [users](?lang=en&category=security&subcategory=users) and [roles](?lang=en&category=security&subcategory=roles) are before you continue reading this section.

ACL's are basically a column on every CloudObject, CloudUser and CloudRole and they basically define the security of that particular object. **By default CloudObject are publically readable and writeable.** and you can change this to give read and write privileges to any user or any role. 

#User Permissions

###Read Access

To have a user read access on a CloudObject, you can: 

==JavaScript==
<span class="js-lines" data-query="read">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setUserReadAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="read">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setUserReadAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="read">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setUserReadAccess(user.id,true);
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
In this case, only that particular user will be able to read that object from the database. 


###Write Access

To have a user write access on a CloudObject, you can : 

==JavaScript==
<span class="js-lines" data-query="write">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setUserWriteAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="write">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setUserWriteAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="write">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setUserWriteAccess(user.id,true);
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
In this case, Only that particular user will be able to write that object to the database.

#Role Permissions

###Read Access

To have all the users in that role have a read access on a CloudObject, you can: 

==JavaScript==
<span class="js-lines" data-query="roleread">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setRoleReadAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="roleread">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setRoleReadAccess(user.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="roleread">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setRoleReadAccess(user.id,true);
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

In this case, All of the users which belong to that role will be able to read that object from the database. 


###Write Access

To have all the users in that role have a write access on a CloudObject, you can: 

==JavaScript==
<span class="js-lines" data-query="rolewrite">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setRoleWriteAccess(role.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="rolewrite">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setRoleWriteAccess(role.id,true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="rolewrite">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setRoleWriteAccess(role.id,true);
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
In this case, all of the users which belong to that role will be able to write that object from the database. 

#Public Permissions

###Read Access

To have all the users in in your app have a read access on a CloudObject, You can: 

==JavaScript==
<span class="js-lines" data-query="publicread">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setPublicReadAccess(true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="publicread">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setPublicReadAccess(true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="publicread">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setPublicReadAccess(true);
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
In this case, all of the users in your app will be able to read that object from the database. 


###Write Access

To have all the users in your app have a read access on a CloudObject, You can: 

==JavaScript==
<span class="js-lines" data-query="publciwrite">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setPublicWriteAccess(true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="publicwrite">
```
var obj = new CB.CloudObject("Student");
obj.ACL = new CB.ACL();
obj.ACL.setPublicWriteAccess(true);
obj.save({
  success: function(obj) {
    //Saving successfull
  },
  error: function(err) {
    //Error occured while saving the object
  }
});
```
</span>
==Java==
<span class="java-lines" data-query="publicwrite">
```
CloudObject obj = new CloudObject("Student");
obj.ACL = new ACL();
obj.ACL.setPublicWriteAccess(true);
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

In this case, all of the users in your app will be able to write that object from the database.
