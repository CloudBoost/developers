#####In this section

In this section you'll learn about how to save a file from your local file system to CloudBoost.

#Saving a file

To save a file in CloudBoost, you basically need to pass in the file object as a parameter and call the save function of the [CB.CloudFile](https://docs.cloudboost.io/#CloudFile) class. You can save files of any size in CloudBoost, but you will be charged for the storage units according to [Pricing](https://cloudboost.io/pricing) Page.

###From Local File System

To save a file from your local file system, you need to:

==JavaScript==
<span class="js-lines" data-query="setfile">
```
var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";
  var cloudFile = new CB.CloudFile(file);
  cloudFile.set('name',name);
  cloudFile.save({
    success : function(cloudFile){
      console.log(cloudFile.URL);
    }, error: function(error){
      //error
    }, uploadProgress : function(percentComplete){
    	//upload progress.
    }
  })
}
```
</span>

==Java==
<span class="java-lines" data-query="setfile">
```
CloudFile file = new CloudFile("abc.txt", "Hello World", "txt");
file.save(new CloudStringCallback(){
@Override
public void done(CloudFile x, CloudException e) throws CloudException {
	if(e != null)
		//error
	if(x!=null)		
		System.out.println(x);
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="setfile">
```
byte[] data = System.Text.Encoding.UTF8.GetBytes(".net cloudfile testing!");
string name = "sample.txt";
string type = "txt";
var file = new CB.CloudFile(data, name, type);
var rsponse = await file.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="setfile">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
  "data": "this data will be written to the new file",
  "fileObj": {
    "_id": "string",
    "_type": "file",
    "ACL": {
      "read": {
        "allow": {
          "user": [
            "all"
          ],
          "role": []
        },
        "deny": {
          "user": [],
          "role": []
        }
      },
      "write": {
        "allow": {
          "user": [
            "all"
          ],
          "role": []
        },
        "deny": {
          "user": [],
          "role": []
        }
      }
    },
    "name": "string",
    "size": 0,
    "url": "string",
    "expires": "2016-03-16T13:31:41.151Z",
    "contentType": "application/octet-stream"
  }
}' 'https://api.cloudboost.io/file/${app_id}'
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
// yourData is an NSData object
let file = CloudFile(name: "aTag", data: yourData, contentType: "text/html")
file.save({ response in
    response.log()
})
```
</span>

###From Blob

To save a file by creating a blob, you need to:

==JavaScript==
<span class="js-lines" data-query="setblob">
```
var documentFile = new Blob([
  'This is the content of by document blob'
  ], {
  type : 'text/plain'
});
var file = new CB.CloudFile(documentFile);
file.save({
  success: function(file) {
      console.log(file.URL);
  }, error: function(err) {
      //error in uploading File
  }, uploadProgress : function(percentComplete){
    	//upload progress.
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="setblob">
```
Blob blob;//create blob in any of numerous ways
CloudFile file = new CloudFile(blob);
file.save(new CloudStringCallback(){
	@Override
	public void done(CloudFile x, CloudException e) throws CloudException {
		if(e != null)
			//error
		if(x!=null)
			System.out.println(x);
		}
	},
	new FileUploadProgress(){
	@Override
	public void setProgress(int percent){
		//percentage
		}
	}
);
```
</span>

==.NET==
<span class="dotnet-lines" data-query="setblob">
```
//
```
</span>

==cURL==
<span class="curl-lines" data-query="setblob">
```
curl -X POST --header 'Content-Type: multipart/form-data' --header 'Accept: application/json' 'http://api.cloudboost.io/file/${app_id}'
```
</span>

###Save File In CloudObject

To save the file in CloudObject, you need to:

==JavaScript==
<span class="js-lines" data-query="savefile">
```
var documentFile = new Blob([
  'This is the content of by document blob'
  ], {
  type : 'text/plain'
});
var file = new CB.CloudFile(documentFile);
var obj = new CB.CloudObject('Custom');
obj.set('file',file);
obj.save({
  success: function(res) {
      //res will have File Object
  }, error: function(err) {
      //error in uploading File
  }, uploadProgress : function(percentComplete){
    	//upload progress.
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="savefile">
```
CloudObject obj=new CloudObject('Custom');
CloudFile file = new CloudFile(documentFile);
obj.set('file',file);
obj.save(obj,new CloudObjectCallback() {
@Override
public void done(CloudObject x,CloudException t)throws CloudException {
	if(t!=null)
		// if there is an error
	else if(x!=null)
		//x has File Object
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="savefile">
```
//
```
</span>

==cURL==
<span class="curl-lines" data-query="savefile">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "document": {
    "_type": "custom",
    "expires": null,
    "file": {
      "_type": "file",
      "_version": 0,
      "expires": null,
      "_id": "AI58Etzj",
      "name": "myfile",
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
      "contentType": "html/txt",
      "url": "https://api.cloudboost.io/file/cpnbzclvxjts/AI58Etzje"
    },
    "_modifiedColumns": ["createdAt",
    "updatedAt",
    "ACL",
    "expires",
    "file"],
    "_tableName": "data",
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
  }
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
// yourData is an NSData object
let file = CloudFile(name: "aTag", data: yourData, contentType: "text/html")
file.save({ response in
    let obj = CloudObject(tableName: "Student")
    obj.set("file", value: file)
    obj.save({ response in
        response.log()
    })
})
```
</span>
<span class="tut-imp">Important:</span> res Object after saving has the CloudFile Object but without Url, though it has the Id. To get the complete FileObject with Url do a fetch over it.

#Default Properties

Every CloudFile when created has default properties attached to it. Here is a list of all the default properties attached to CloudFiles when you initialize them.

* **Id** : [Text] A unique ID of a CloudFile is assigned as soon as the file is saved. **You cannot assign a user-defined ID to a CloudFile**.

==JavaScript==
<span class="js-lines" data-query="viewid">
```
//Id is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.id);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewid">
```
//Id is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.id);
```
</span>

==Java==
<span class="java-lines" data-query="viewid">
```
//Id is null when you create the file but gets assigned to an file as soon as you save it.
System.out.print(file.getId());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewid">
```
//Id is null when you create the file but gets assigned to an file as soon as you save it.
file.ID
```
</span>

==cURL==
<span class="curl-lines" data-query="viewid">
```
//Id is null when you create the file but gets assigned to an file as soon as you save it.
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
print(file.getId())
```
</span>

* **Url** : [URL] A unique url of a CloudFile is assigned as soon as the File is saved. **You cannot assign a user-defined Url to a CloudFile**.

==JavaScript==
<span class="js-lines" data-query="viewurl">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.url);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewurl">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.url);
```
</span>

==Java==
<span class="java-lines" data-query="viewurl">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
System.out.print(file.getFileUrl());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewurl">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
file.Url;
```
</span>

==cURL==
<span class="curl-lines" data-query="viewurl">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
print(file.getFileUrl())
```
</span>

* **Name** : [Text] Name of the CloudFile to be assigned by the user.

==JavaScript==
<span class="js-lines" data-query="viewname">
```
file.set('name','abc.txt');
console.log(file.name);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewname">
```
file.set('name','abc.txt');
console.log(file.name);
```
</span>

==Java==
<span class="java-lines" data-query="viewname">
```
file.setFileName("name","abc.txt");
System.out.print(file.getFileName());
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewname">
```
file.Name
```
</span>

==curl==
<span class="curl-lines" data-query="viewname">
```
//
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
print(file.setFileName("Sample"))
```
</span>

* **Expires** : [DateTime] <span class="tut-snippet">null</span> by default. You can set <span class="tut-snippet">expires</span> to any value in the future and CloudBoost will make sure the CloudFile will automatically be deleted at that time.

==JavaScript==
<span class="js-lines" data-query="viewexpires">
```
file.expires;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewexpires">
```
file.expires;
```
</span>

==Java==
<span class="java-lines" data-query="viewexpires">
```
file.getExpires();
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewexpires">
```
file.Expires;
```
</span>

==cURL==
<span class="curl-lines" data-query="viewexpires">
```
//
```
</span>

* **ACL** : [CB.ACL]( https://docs.cloudboost.io/#ACL) ACL's are Access Control List. They protect your data. You can read more about ACL's in the [Security]( /?lang=en&category=security&subcategory=acl) section. By default, ACL's are Public read and Public write which means anyone can read or write any data. You can modify this in a way where you give write and read access to a particular User or/and Role and this is how you protect specific sections of your data stored in CloudBoost. To know more about ACL's, click [here]( https://docs.cloudboost.io/#ACL)

==JavaScript==
<span class="js-lines" data-query="viewacl">
```
file.ACL;
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewacl">
```
file.ACL;
```
</span>

==Java==
<span class="java-lines" data-query="viewacl">
```
file.getACL();
```
</span>

==.NET==
<span class="dotnet-lines" data-query="viewacl">
```
file.ACL;
```
</span>

==cURL==
<span class="curl-lines" data-query="viewacl">
```
//
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
file.getACL()
```
</span>

#Delete a file

To delete a file, you need to:

==JavaScript==
<span class="js-lines" data-query="deletefile">
```
file.delete({
  success: function(file) {
     //File deleted
  }, error: function(err) {
      //error in deleting File
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="deletefile">
```
file.delete({
  success: function(file) {
     //File deleted
  }, error: function(err) {
      //error in deleting File
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="deletefile">
```
file.delete(new CloudStringCallback() {
@Override
public void done(String x,CloudException t) throws CloudException {
	if(t!=null)
		// if there is an error
	else if(x!=null)
		//x is File URL
	}									
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="deletefile">
```
await file.DeleteAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="deletefile">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: text/html' -d '{
  "key": ${app_key},
  "method": "DELETE"
}' 'http://api.cloudboost.io/file/${app_id}/${file_id}'
```
</span>
==Swift==
<span class="ios-lines" data-query="create">
```
// throws if fileObj is not saved
try! fileObj.delete({ response in
    response.log()
})
```
</span>

#Get a File

To get a File from CloudBoost,you need to query over the CloudObjects which has a file attached to it

==Javascript==
<span class="js-lines" data-query="includefile">
```
var query = new CB.CloudQuery("Custom");
query.include("file"); //this will include the file in CloudObjects
query.find({
    success: function(res){
        //Gets the res which has the File Object inside it.
    }, error: function(err){
        //error while querying
    });
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="includefile">
```
var query = new CB.CloudQuery("Custom");
query.include("file"); //this will include the file in CloudObjects
query.find({
    success: function(res){
        //Gets the res which has the File Object inside it.
    }, error: function(err){
        //error while querying
    });
```
</span>

==Java==
<span class="java-lines" data-query="includefile">
```
CloudQuery query = new CloudQuery("Custom");
query.include("file"); //this will include the file in CloudObjects
query.find(new CloudObjectCallback(){
	@Override
	public void done(CloudObject obj, CloudException t)throws CloudException {
		if(t != null)								
			//obj contains file object.
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="includefile">
```
var query = new CB.CloudQuery("Custom");
query.Include("file"); //this will include the file in CloudObjects
var result = await query.Find();
```
</span>

==cURL==
<span class="curl-lines" data-query="includefile">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "limit": 1,
  "sort": {    
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": ["file"]
  },
  "sdk": "java",
  "skip": 0
}' 'http://api.cloudboost.io/file/${app_id}/_File/find'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let query = CloudQuery(tableName: "Student")
query.include("file")
// throws if the app is not initialized with AppID and AppKey
try! query.find({response in
    response.log()
})
```
</span>

#Fetch a File

Fetch will refresh the object with updated content from the database. To fetch a file, from the file object obtained by querying over CloudBoost database. You need to:

==JavaScript==
<span class="js-lines" data-query="fetchfile">
```
file.fetch({
  success: function(file) {
     //received file Object
  }, error: function(err) {
      //error in getting file Object
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="fetchfile">
```
x1.fetch(new CloudFileArrayCallback() {
@Override
public void done(CloudFile[] x, CloudException t)
    throws CloudException {
	    if (t != null) {
	    	//exception
	    }
	    if(x!=null){
	    	//file
	    }
    }
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="fetchfile">
```
await file.FetchAsync();
```
</span>

#Fetch file contents

To get the file contents from the File object, you need to:

==JavaScript==
<span class="js-lines" data-query="fetchfilecontent">
```
file.getFileContent({
  success: function(content) {
     //received File Contents
  }, error: function(err) {
      //error in getting File Contents
  }
});
```
</span>

==Java==
<span class="java-lines" data-query="fetchfilecontent">
```
file.getFileContent(new ObjectCallback() {
@Override
public void done(Object x, CloudException t)
  throws CloudException {
    if (t != null) {
    	//exception
    }
    if(x!=null){
    	//file
    }
  }
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="fetchfilecontent">
```
var result = await file.GetFileContentAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="fetchfilecontent">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "limit": 1,
  "sort": {    
  },
  "select": {    
  },
  "query": {
    "$includeList": [],
    "$include": [],
    "_id": ${file_id}
  },
  "sdk": "java",
  "skip": 0
}' 'http://api.cloudboost.io/file/${app_id}/_File/find'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
CloudFile.getFileFromUrl(NSURL(string: url)!, callback: { response in
    if response.success {
        // getting the data
        if let data = response.object as? NSData {
            // parsing into string (if the original data was string as well)
            let content = NSString(data: data, encoding: NSUTF8StringEncoding)
            print(content)
        }
    }
})
```
</span>
