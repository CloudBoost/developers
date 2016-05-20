#####In this section

In this section you'll learn what roles are and how to add users to the Role. Finally, you will also learn about default properties in CloudRole and how to secure your data with ACL's in CloudBoost.

#Before we begin

CloudRole is inherited from CloudObject class, which means everything that CloudObject contains is also contained in CloudRole and that includes default properties like Id, createdAt, updatedAt, etc. and all of the functions like save, delete etc.

CloudRole is basically a group of Users. For example :

If you're building a School Management System for a School, then there might be few roles such as :

* Administrators
* Teachers
* Students

Each one of these user can have any number of users.

#Create a Role

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

==Java==
<span class="java-lines" data-query="create">
```
CloudRole role = new CloudRole("Student");
role.save(new CloudRoleCallback(){
  @Override
  public void done(CloudRole roleObj, CloudException e)throws CloudException {
    if(e != null){
    }
    if(roleObj == null){
    }
  }
});
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let role = CloudRole(roleName: "Student")
role.save({ response in
    response.log()
})
```
</span>

==.NET==
<span class="dotnet-lines" data-query="create">
```
var role = new CB.CloudRole("Student");
await role.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="create">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "document": {   
    "_type": "role",
    "expires": null,
    "name":"admin"
    ${column_name}: ${column_value},
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "name"],
    "_tableName": "Role",
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
}' 'http://api.cloudboost.io/data/${app_id}/Role'
```
</span>

After the CloudRole is created you can start signing-up users to role.

#Default Properties

Every CloudUser when created has default properties attached to it. Here is a list of all the default properties attached to CloudUser when you initialize them.

* **All of the CloudObject default properties are available in CloudUser, as CloudUser is inherited from CloudObjects. To see what default properties are available in CloudObject, Please click [here](?lang=en&category=datastorage&subcategory=objects)**

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

==Java==
<span class="java-lines" data-query="viewname">
```
System.out.print(role.getName());
```
</span>

==Swift==
<span class="ios-lines" data-query="viewname">
```
role.getName()
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewname">
```
role.Name
```
</span>

==cURL==
<span class="curl-lines" data-query="viewname">
```
//
```
</span>

#Add user to role

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

==Java==
<span class="java-lines" data-query="add">
```
//user is an instance of CloudUser and role is an instance of CloudRole
user.addToRole(null, new CloudUserCallback() {
	@Override
	public void done(CloudUser user, CloudException e) throws CloudException {
	//				
	}
});
```
</span>

==Swift==
<span class="ios-lines" data-query="add">
```
user.addToRole(role, callback: { response in
  if response.success {
    // user added to role
  }
})
```
</span>

==.NET==
<span class="dotnet-lines" data-query="add">
```
await user.AddToRole(role);
```
</span>

==cURL==
<span class="curl-lines" data-query="add">
```
//role is an instance of CloudRole Object.
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
  "role": {   "_type": "role",
    "expires": null,
    "name": "admin",
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "name"],
    "_tableName": "Role",
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
    "_isModified": true},
  "user": {   "updatedAt": "2016-03-15T09:44:28.978Z",
    "_type": "user",
    "_version": 0,
    "username": "momo",
    "expires": null,
    "_id": "M6gLT9DI",
    "email": "momo@gmail.com",
    "createdAt": "2016-03-15T09:44:28.978Z",
    "_tableName": "User",
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
    "password": ${encrypted password}}
}' 'http://api.cloudboost.io/user/cpnbzclvxjts/addToRole'
```
</span>

#Check if the user is in a role

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

==Java==
<span class="java-lines" data-query="check">
```
boolean isInRole = user.isInRole(role);
```
</span>

==Swift==
<span class="ios-lines" data-query="check">
```
let isInRole = user.isInRole(role)
```
</span>

==.NET==
<span class="dotnet-lines" data-query="check">
```
var isInRole = user.IsInRole(role);
```
</span>

==cURL==
<span class="curl-lines" data-query="check">
```
//
```
</span>

#Get all roles from a user

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

==Java==
<span class="java-lines" data-query="get">
```
String[] roles=user.getRoles();
```
</span>

==Swift==
<span class="ios-lines" data-query="get">
```
//roles is an array of CloudRole
let roles = user.getRoles();
```
</span>

==.NET==
<span class="dotnet-lines" data-query="get">
```
//roles is an array of CloudRole
List<CB.CloudRole> roles = user.Get("roles");
```
</span>

==cURL==
<span class="curl-lines" data-query="get">
```
//
```
</span>

#Remove a role from a user

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
    //erorr if something goes wrong
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="remove">
```
user.removeFromRole(null, new CloudUserCallback() {     
  @Override
  public void done(CloudUser user, CloudException e) throws CloudException {      
    //    
  }
});
```
</span>

==Swift==
<span class="ios-lines" data-query="remove">
```
user.removeFromRole(role, callback: { response in
    if response.success {
      // user removed from role
    }
}
```
</span>

==.NET==
<span class="nodejs-lines" data-query="remove">
```
//role is a CB.CloudRole object type
await user.RemoveFromRole(role);
```
</span>

==cURL==
<span class="curl-lines" data-query="remove">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  {
  "role": {
    "_type": "role",
    "expires": null,
    "name": "admin",
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "name"],
    "_tableName": "Role",
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
    "_isModified": true
  },
  "user": {
    "updatedAt": "2016-03-15T09:44:28.978Z",
    "_type": "user",
    "_version": 0,
    "username": "momo",
    "expires": null,
    "_id": "M6gLT9DI",
    "email": "momo@gmail.com",
    "createdAt": "2016-03-15T09:44:28.978Z",
    "_tableName": "User",
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
    "password": ${encrypted_password}
  },
  "key":${app_key}
}
}' 'http://api.cloudboost.io/user/${app_id}/removeFromRole'
```
</span>
