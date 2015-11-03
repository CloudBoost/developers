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
