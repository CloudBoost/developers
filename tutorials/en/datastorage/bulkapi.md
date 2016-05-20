#####In this section

In this section you'll learn about how to save and delete more than one CloudObject at a Time. You'll learn about the Bulk API for Save and Delete in CloudBoost.

#Saving Multiple CloudObjects

To save multiple CloudObjects, you need to pass an array of CloudObjects to the bulk save function. Here's a quick example:

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var obj1 = new CB.CloudObject('Custom');
obj1.set('name','abcd');
var obj2 = new CB.CloudObject('Custom');
obj2.set('name','pqrs');
CB.CloudObject.saveAll([obj1,obj2],{
    success: function(res){
        //res has the array of saved CloudObjects.
    },error: function(err){
        // if there is an error, then err will be an array fo error messages respective to the array of CloudObjects
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="bulksave">
```
var obj1 = new CB.CloudObject('Custom');
obj1.set('name','abcd');
var obj2 = new CB.CloudObject('Custom');
obj2.set('name','pqrs');
CB.CloudObject.saveAll([obj1,obj2],{
    success: function(res){
        //res has the array of saved CloudObjects.
    },error: function(err){
        // if there is an error, then err will be an array fo error messages respective to the array of CloudObjects
});
```
</span>

==Java==
<span class="java-lines" data-query="bulksave">
```
CloudObject obj1 = new CloudObject("Custom");
obj1.set("name","abcd");
CloudObject obj2 = new CloudObject("Custom");
obj2.set("name","pqrs");
CloudObject obj=new CloudObject("Custom");
CloudObject[] arr={obj1,obj2};
obj.saveAll(arr,new CloudObjectArrayCallback() {
@Override
public void done(CloudObject[] x,CloudException t)throws CloudException {
	if(t!=null)
		// if there is an error, then err will be an array fo error messages respective to the array of CloudObjects
	else if(x!=null)
		//x has the array of saved CloudObjects.
	}									
});
```
</span>

==Swift==
<span class="ios-lines" data-query="bulksave">
```
let obj1 = CloudObject(tableName: "Student")
obj1.setString("name", value: "Randhir")
//
let obj2 = CloudObject(tableName: "Student")
obj2.setString("name", value: "Omar")
//
CloudObject.saveAll([obj1, obj2], callback: { response in
    response.log()
})
```
</span>


==.NET==
<span class="dotnet-lines" data-query="bulksave">
```
var obj1 = new CB.CloudObject("Custom");
obj1.Set("name","abcd");
var obj2 = new CB.CloudObject("Custom");
obj2.Set("name","name");
var list = new ArrayList();
list.Add(obj1);
list.Add(obj2);
List<CB.CloudObject> objectList = await CB.CloudObject.SaveAllAsync(list);
```
</span>

==cURL==
<span class="curl-lines" data-query="bulksave">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": [{
        "_type": "custom",
        "expires": null,
        "name": "egima",
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "name"],
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
    },
    {
        "_type": "custom",
        "expires": null,
        "name": "bengi",
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "name"],
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
    }]
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>

#Deleting Multiple CloudObjects

To delete multiple objects pass an array of CloudObjects to the bulk delete function. For example:

==JavaScript==
<span class="js-lines" data-query="bulkdelete">
```
CB.CloudObject.deleteAll([obj1,obj2],{
    success: function(res){
        //successfully delete CloudObjects.
    },error: function(err){
        // error while deleting CloudObjects. err is an array of error objects.
    });
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="bulkdelete">
```
CB.CloudObject.deleteAll([obj1,obj2],{
    success: function(res){
        //successfully delete CloudObjects.
    },error: function(err){
        // error while deleting CloudObjects. err is an array of error objects.
    });
```
</span>

==Java==
<span class="java-lines" data-query="bulkdelete">
```
CloudObject obj=new CloudObject("Custom");
obj.deleteAll(new CloudObject[]{obj1,obj2},new CloudObjectArrayCallback() {
@Override
public void done(CloudObject[] x,CloudException t) throws CloudException {
	if(t!=null)
		// if there is an error, then err will be an array fo error messages respective to the array of CloudObjects
	else if(x!=null)
		//x has the array of saved CloudObjects.
	}
});
```
</span>

==Swift==
<span class="ios-lines" data-query="bulkdelete">
```
// obj1 and obj2 must contain their ObjectID before deleting
CloudObject.deleteAll([obj1, obj2], callback: { response in
    response.log()
})
```
</span>

==.NET==
<span class="dotnet-lines" data-query="bulkdelete">
```
await CB.CloudObject.DeleteAllAsync(list);
```
</span>

==cURL==
<span class="curl-lines" data-query="bulkdelete">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
  "method":"DELETE",
    "document": [{
        "updatedAt": "2016-03-16T13:28:20.936Z",
        "_type": "custom",
        "_version": 0,
        "expires": null,
        "_id": "LYm3d7Bh",
        "createdAt": "2016-03-16T13:28:20.936Z",
        "name": "egima",
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
        }
    },
    {
        "updatedAt": "2016-03-16T13:28:20.938Z",
        "_type": "custom",
        "_version": 0,
        "expires": null,
        "_id": "dJ6mwXom",
        "createdAt": "2016-03-16T13:28:20.938Z",
        "name": "bengi",
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
        }
    }]
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>


