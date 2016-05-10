#####In this section

In this section you'll learn how to sign-up and log in a User (we call it CloudUser) and let CloudBoost do all the heavy-lifting like session management for your apps. Finally, you will also learn about default properties in CloudUser and how to save or delete a user. 

#Before we begin

CloudUser is inherited from CloudObject class, which means everything that CloudObject contains is also contained in CloudUser and that includes default properties like Id, createdAt, updatedAt, etc. and all of the functions like save, delete etc. 

#Sign up

To sign up a new user you need to initialize a new variable with the type CloudUser, assign it username and password and call the sign-up function. 

==JavaScript==
<span class="js-lines" data-query="signup">
```
var user = new CB.CloudUser();
user.set('username','my_username');
user.set('password', 'my_solid_password');
user.set('email', 'email@sample.com');
user.signUp({
  success: function(user) {
    //Registration successfull
  },
  error: function(error) {
    //Error in user registration.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="signup">
```
//Sign up function will not work on NodeJS. If you want to create a new user on the server. You can use save() function of CloudUser instead. 
```
</span>

==Java==
<span class="java-lines" data-query="signup">
```
CloudUser obj = new CloudUser();
obj.setUserName(username);
obj.setPassword(passwd);
obj.setEmail("hello@abc.com");
obj.signUp(new CloudUserCallback(){
	@Override
	public void done(CloudUser object, CloudException e)	throws CloudException {
		if(e != null){
		}
		if(object != null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="signup">
```
var user = new CB.CloudUser();
user.Set("username", "my_username");
user.Set("password", "my_solid_password");
user.Set("email", "email@sample.com");
await user.SignUp();
```
</span>

==cURL==
<span class="curl-lines" data-query="signup">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
    "_type": "user",
    "username": ${user_name},
    "expires": null,
    "email": "${usr_email},
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "username",
    "password",
    "email"],
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
    "password": ${password},
    "_isModified": true
  }
}' 'http://api.cloudboost.io/user/${app_id}/signup'
```
</span>

After the CloudUser is signed-up a new session is automatically created for you and the user is logged-in unless you call log-out function of CloudUser object. 

#Default Properties

Every CloudUser when created has default properties attached to it. Here is a list of all the default properties attached to CloudUser when you initialize them. 

* **All of the CloudObject default properties are available in CloudUser, as CloudUser is inherited from CloudObjects. To see what default properties are available in CloudObject, Please click [here](?lang=en&category=datastorage&subcategory=objects)**

* **Username** : [Text] A unique username of a CloudUser

==JavaScript==
<span class="js-lines" data-query="viewusername">
```
console.log(user.username);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewusername">
```
console.log(user.username);
```
</span>

==Java==
<span class="java-lines" data-query="viewusername">
```
System.out.print(user.getUsername());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewusername">
```
user.Username;
```
</span>

==cURL==
<span class="curl-lines" data-query="viewusername">
```
//
```
</span>

* **Password** : [Encrypted Text] Password of the CloudUser Object

==JavaScript==
<span class="js-lines" data-query="viewpass">
```
console.log(user.password);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewpass">
```
console.log(user.password);
```
</span>

==Java==
<span class="java-lines" data-query="viewpass">
```
System.out.print(user.getPassword());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewpass">
```
user.Password
```
</span>

==cURL==
<span class="curl-lines" data-query="viewpass">
```
//
```
</span>

* **Email** : [Email] An email of the CloudUser object

==JavaScript==
<span class="js-lines" data-query="viewemail">
```
console.log(user.email);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewemail">
```
console.log(user.email);
```
</span>

==Java==
<span class="java-lines" data-query="viewemail">
```
System.out.print(user.getEmail());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewemail">
```
user.Email
```
</span>

==cURL==
<span class="curl-lines" data-query="viewemail">
```
//
```
</span>

#Log in

To login a CloudUser you can set the username and password and call the login function / method. 

==JavaScript==
<span class="js-lines" data-query="login">
```
var user = new CB.CloudUser();
user.set('username', 'my_username');
user.set('password', 'my_solid_password');
user.logIn({
  success: function(user) {
    //Login successfull
  },
  error: function(error) {
    //Error.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="login">
```
var user = new CB.CloudUser();
user.set('username', 'my_username');
user.set('password', 'my_solid_password');
user.logIn({
  success: function(user) {
    //Login successfull
  },
  error: function(error) {
    //Error.
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="login">
```
CloudUser user = new CloudUser();
user.setUserName(username);
user.setPassword(passwd);
user.logIn(new CloudUserCallback(){
	@Override
	public void done(CloudUser object, CloudException e)throws CloudException {
		if(e != null){
		}				
		if(object != null){
		//			
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="login">
```
var user = new CB.CloudUser();
user.Set("username", "my_username");
user.Set("password", "my_solid_password");
await user.LogIn();
```
</span>

==cURL==
<span class="curl-lines" data-query="login">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
    "_type": "user",
    "username": ${user_name},
    "expires": null,
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "username",
    "password"],
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
    "password": ${password},
    "_isModified": true
  }
}' 'http://api.cloudboost.io/user/${app_id}/login'
```
</span>

Once the user us login you can access the current logged in user by 

==JavaScript==
<span class="js-lines" data-query="viewcurrent">
```
CB.CloudUser.current
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewcurrent">
```
CB.CloudUser.current
```
</span>

==Java==
<span class="java-lines" data-query="viewcurrent">
```
CloudUser.getCurrentUser();
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewcurrent">
```
CB.CloudUser.Current
```
</span>

==cURL==
<span class="curl-lines" data-query="viewcurrent">
```
//
```
</span>

#Social Authentication

Here's how you can add third party authentication providers like Facebook, GitHub, LinkedIn, Twitter and more in just under 10 mins for your app. 

#####Enable Social Authentication

* Go to your app settings in [CloudBoost Dashboard](https://dashboard.cloudboost.io)
* Add your app callback URL. This is usually the URL of the page you want your users to be redirected to after successful login. 
* Set the color of your apps login page to match the brand color of your app. 
* Enable one or more authentication providers.  
* If you enable third party social authentications. You need to copy the respective Callback URL and paste it in the app settings page of the provider. 

<img class="full-length-img" alt="Add Credentials" src="https://www.dropbox.com/s/ha98e8a37idgwpr/socialauth.jpg?dl=0&raw=1">

#####After successful authentication.

Once you get authenticated successfully, you are redirected to your app page (which you have mentioned in the Callback URL in CloudBoost App Settings), You can retrieve current logged in user by : 

==JavaScript==
<span class="js-lines" data-query="getcurrentuserfromserver">
```
CB.CloudUser.getCurrentUser({
  success: function(user) {
    console.log(user);
  },
  error: function(error) {
   console.log(error);
  }
});
```
</span>


#####Login with provider

If you want to build your own custom login page (and not use the one we provide). Then you can integrate third party authentication providers from our SDK. Every provider (like Facebook, Twitter, etc) returns an accessToken on successful authentication, you can then pass this accessToken with Cloudboost SDK to create a session for that user. 

* provider (required) : Provider name. Supported values are "facebook", "twitter", "google", "linkedin", "github".
* accessToken   (required) : AccessToken from Facebook, Twitter, Google, LinkedIn, GitHub, etc.
* accessSecret    (only for twitter) : Access Secret from Twitter. 

==JavaScript==
<span class="js-lines" data-query="loginwithprovider">
```
CB.CloudUser.authenticateWithProvider({provider:"providerName",
        accessToken:"providerToken"},{
  success: function(user) {
    console.log(user);
  },
  error: function(error) {
   console.log(error);
  }
});
```
</span>


#Log out

If you want to flush the session out and log out the user, then you can do this by

==JavaScript==
<span class="js-lines" data-query="logout">
```
CB.CloudUser.current.logOut({
  success : function(user){
      //user logged out.
    }, error : function(error){
      //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="logout">
```
CB.CloudUser.current.logOut({
  success : function(user){
      //user logged out.
    }, error : function(error){
      //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="logout">
```
CloudUser.getcurrentUser().logOut(new CloudUserCallback(){
	@Override
	public void done(CloudUser x, CloudException t)	throws CloudException {
	//					
	}		
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="logout">
```
CB.CloudUSer.Current.Logout
```
</span>

==cURL==
<span class="curl-lines" data-query="logout">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
  "_id": "M6gLT9DI",
  "_type": "user",
  "username": "momo",
  "expires": null,
  "email": "momo@gmail.com",
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
  "password": ${encrypted_password},
  "createdAt": "2016-03-15T09:44:28.978Z",
  "updatedAt": "2016-03-15T09:44:28.978Z",
  "_version": 0
  }
}' 'http://api.cloudboost.io/user/${app_id}/logout'
```
</span>

#Change Password

To change the password of a user you need to call the changePassword function of the `CB.CloudUser` instance. Before you call the changePassword function make sure the current user is loggedIn and the current session is valid. Please note : Calling change password will not log the user out of its current session.

==JavaScript==
<span class="js-lines" data-query="chagepassword">
```
CB.CloudUser.current.changePassword('oldPassword','newPassword',{
  success: function(user) {
    //Change Password  successfull
  },
  error: function(error) {
    //Error
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="chagepassword">
```
//Change Password does not work on NodeJS, because it needs the current user session to be valid.
```
</span>

==Java==
<span class="java-lines" data-query="chagepassword">
```
CloudUser.getCurrentUser().changePassword("oldPassword","newPassword",
	new CloudUserCallback(){
	@Override
	public void done(CloudUser user,CloudException e){
		if(user!=null)
			//user
		if(e!=null)
			//e
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="chagepassword">
```
await CloudUser.Current.ChangePassword("oldPassword","newPassword");
```
</span>

==cURL==
<span class="curl-lines" data-query="chagepassword">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  {
  "newPassword": ${old_pass},
  "oldPassword": ${new_pass},
  "key":${app_key}
}
}' 'http://api.cloudboost.io/user/${app_id}/changePassword'
```
</span>

#Reset Password

To reset the password of a user you need to call the resetPassword function of the `CB.CloudUser` class. Reset Password takes in an email of the user as first parameter and callback as second parameter. CloudBoost automatically takes care of emailing the user with password reset link. Please note : If you want to change the format the email which CloudBoost sends by default. You can head over to your CloudBoost App Dashboard and change the email settings of an app.

==JavaScript==
<span class="js-lines" data-query="resetpassword">
```
CB.CloudUser.resetPassword('email',{
  success: function() {
    //Reset Password email sent! 
  },
  error: function(error) {
    //error.
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="resetpassword">
```
CB.CloudUser.resetPassword('email',{
  success: function() {
    //Reset Password email sent! 
  },
  error: function(error) {
    //error.
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="resetpassword">
```
CloudUser.resetPassword("email",new CloudStringCallback(){
	@Override
	public void done(String msg,CloudException e){
		if(msg!=null)
			//reset password email sent
		if(e!=null)
			//e
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="resetpassword">
```
var err = await CloudUser.CurrentUser.ResetPassword("email");
if(err == null)
{
    //password changed
}
```
</span>

==cURL==
<span class="curl-lines" data-query="resetpassword">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  {
  "email": ${email_address},
  "key":${app_key}
}
}' 'http://api.cloudboost.io/user/${app_id}/resetPassword'
```
</span>

