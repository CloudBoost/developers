#####In this section

In this section you'll learn about how to save a file from your local file system to CloudBoost. 

#Saving a file 

To save a file in CloudBoost, you basically need to pass in the file object as a parameter and call the save function of the CB.CloudFile class. You can save files of any size in CloudBoost, but you will be charged for the storage units according to [Pricing](https://cloudboost.io/pricing) Page.

###From Local File System

To save a file from your local file system, You need to : 

==JavaScript==
<span class="js-lines" data-query="savefile">
```
var fileUploadControl = $("#profilePhotoFileUpload")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
  var name = "photo.jpg";
  var cloudFile = new CB.CloudFile(name, file);
  cloudFile.save({
  	success : fucntion(cloudFile){
    	console.log(cloudFile.URL);
    }, error: function(error){
    	//error
    }
  })
}
```
</span>

###From Blob

To save a file by creating a blob, You need to : 

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

#Delete a file

To delete a file, You need to : 

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
