#####In this section

In this section you'll learn about how to save a file from your local file system to CloudBoost. 

#Saving a file 

To save a file in CloudBoost, you basically need to pass in the file object as a parameter and call the save function of the [CB.CloudFile](https://docs.cloudboost.io/#CloudFile) class. You can save files of any size in CloudBoost, but you will be charged for the storage units according to [Pricing](https://cloudboost.io/pricing) Page.

###From Local File System

To save a file from your local file system, you need to:

==JavaScript==
<span class="js-lines" data-query="savefile">
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
    }
  })
}
```
</span>

###From Blob

To save a file by creating a blob, you need to:

==JavaScript==
<span class="js-lines" data-query="saveblob">
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
      //error in uploading file
  }
});
```
</span>

#Default Properties

Every CloudFile when created has default properties attached to it. Here is a list of all the default properties attached to CloudFiles when you initialize them.

* **Id** : [Txt] A unique ID of a CloudFile is assigned as soon as the File is saved. **You cannot assign a user-defined ID to a CloudFile**.

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

* **Url** : [Txt] A unique url of a CloudFile is assigned as soon as the File is saved. **You cannot assign a user-defined Url to a CloudFile**.

==JavaScript==
<span class="js-lines" data-query="viewid">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.url);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewid">
```
//Url is null when you create the file but gets assigned to an file as soon as you save it.
console.log(file.url);
```
</span>

* **Name** : [Txt] Name of the CloudFile to be assigned by the user.

==JavaScript==
<span class="js-lines" data-query="viewid">
```

file.set('name','abc.txt');
console.log(file.name);
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="viewid">
```

file.set('name','abc.txt');
console.log(file.name);
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

#Delete a file

To delete a file, you need to: 

==JavaScript==
<span class="js-lines" data-query="deletefile">
```
file.delete({
  success: function(file) {
     //file deleted
  }, error: function(err) {
      //error in deleting file
  }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="deletefile">
```
file.delete({
  success: function(file) {
     //file deleted
  }, error: function(err) {
      //error in deleting file
  }
});
```
</span>

#Get a File

To get a File from CloudBoost,you need to query over the CloudTable which has the Object.

==NodeJS==
<span class="nodejs-lines" data-query="deletefile">
```
var query = new CB.CloudQuery("Custom");
query.include("file");
query.find({
    success: function(res){
        //Gets the res which has the file object inside it.
    }, error: function(err){
        //error while querying
    });
```
</span>


#Fetch a File

To fetch a file, from the File object obtained by querying over CloudBoost database. You need to:

==JavaScript==
<span class="js-lines" data-query="fetchfile">
```
file.fetch({
  success: function(file) {
     //file deleted
  }, error: function(err) {
      //error in deleting file
  }
});
```
</span>

#Fetch file Contents

To get the file contents from the File object, you need to:

==JavaScript==
<span class="js-lines" data-query="fetchfile">
```
file.getFileContent({
  success: function(file) {
     //file contents
  }, error: function(err) {
      //error in getting file Contents
  }
});
```
</span>

