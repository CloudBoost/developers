#####In this section

In this section you'll learn what roles are and how to add users to the Role. Finally, you will also learn about default properties in CloudRole and how to secure your data with ACL's in CloudBoost. 

#Before we begin

CloudRole is inherited from CloudObject class, which means everything that CloudObject contains is also contained in CloudRole and that includes default properties like Id, createdAt, updatedAt, etc. and all of the fucntions like save, delete etc. 

CloudRole is basically a group of Users. For example : 

If you're building a School Management System for a School, then there might be few roles such as : 

* Administrators
* Teachers
* Students

Each one of these user can have any number of users. 

#Create a Role.

To create a new role you need to initialize a new variable with the type CloudRole, assign it a name and call save function / method.

==JavaScript==
<span class="js-lines" data-query="create">
```
var role = new CB.CloudRole("Student");
role.save({
  success: function(role) {
  	//Registration successfull
  },
  error: function(error) {
  	//Error in user registration.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var role = new CB.CloudRole("Student");
role.save({
  success: function(role) {
  	//Registration successfull
  },
  error: function(error) {
  	//Error in user registration.
  }
});
```
</span>

After the CloudRole is created you can start signing-up users to role.

#Default Properties

Every CloudUser when created has default properties attached to it. Here is alist of all the default properties attached to CloudUser when you initialize them. 

* **All of the CloudObject default properties are available in CloudUser, as CloudUser is inherited from CloudObjects. To see what default properties are available in CloudObject, Please click [here]()**

* **Name** : [Text] A name of the role. 

==JavaScript==
<span class="js-lines" data-query="viewname">
```
console.log(role.name);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewname">
```
console.log(role.name);
```
</span>

#Add user to role. 

Here is the sample code to add a CloudUser to the CloudRole. 

==JavaScript==
<span class="js-lines" data-query="add">
```
//user is an instance of CloudUser and role is an instance of CloudRole
user.addToRole(role, {
  success: function(user) {
  	//added to role successfull
  },
  error: function(err) {
  	//Error occured in adding to role.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="add">
```
//user is an instance of CloudUser and role is an instance of CloudRole
user.addToRole(role, {
  success: function(user) {
  	//added to role successfull
  },
  error: function(err) {
  	//Error occured in adding to role.
  }
});
```
</span>


#Check if if the user is in a role.

If you want to check if the user is in the role then you can do this by 

==JavaScript==
<span class="js-lines" data-query="check">
```
var isInRole = user.isInRole(role); 
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="check">
```
var isInRole = user.isInRole(role); 
```
</span>

#Get all roles from a user.

If you want to get all the roles a user belongs to, then you need to do something like : 

==JavaScript==
<span class="js-lines" data-query="get">
```
//roles is an array of CloudRole
var roles = user.get('roles'); 
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="get">
```
//roles is an array of CloudRole
var roles = user.get('roles'); 
```
</span>

#Remove a role from a user.

If you want to remove a particular role, then you need to do something like : 

==JavaScript==
<span class="js-lines" data-query="remove">
```
user.removeFromRole(role, {
  success : function(user){
  	//get the updated user
  },
  error : function(error){
  	//erorr if something goes wrong.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="remove">
```
user.removeFromRole(role, {
  success : function(user){
  	//get the updated user
  },
  error : function(error){
  	//erorr if something goes wrong.
  }
});
```
</span>

#####What's next?

In the next section you'll learn what what ACL's are in CloudBoost and how to secure your data with ACL's
