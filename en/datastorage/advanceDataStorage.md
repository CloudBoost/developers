#####In this section

In this section you'll learn about how to save and delete more than one CloudObject at a Time.

#Saving Multiple Objects

To save multiple number of CloudObjects pass an array of CloudObjects to the Bulk Save Function. In this way:

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
        // error in saving array of CloudObjects.
});

```
</span>

#Deleting Multiple Objects

To delete multiple number of CloudObjects pass an array of CloudObjects to the Bulk Delete Function. In this way:

==JavaScript==
<span class="js-lines" data-query="bulkdelete">
```
var obj1 = new CB.CloudObject('Custom');
obj1.set('name','abcd');
var obj2 = new CB.CloudObject('Custom');
obj2.set('name','pqrs');
CB.CloudObject.deleteAll([obj1,obj2],{
    success: function(res){
        //successfully delete CloudObjects.
    },error: function(err){
        // error while deleting CloudObjects
    });

```
</span>