#####In this section

In this section you'll learn about how to push and pull data of CloudQueues. You'll also learn about message delays, timeouts and more. 

#Create a new Queue.

Before you push and pull data from the queue. You need to create a queue instance which can be done with one simple line of code. 

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var queue = new CB.CloudQueue('QueueName');
```
</span>

#Pushing data into the queue.

To push data into the Queue, you need to call the push method of the `CB.CloudQueue` instance. `Push` function takes in data as the first parameter.

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var queue = new CB.CloudQueue('QueueName');
queue.push('sample', {
	success : function(queueMessage){
    	//queueMessage is an instance of CB.QueueMessage class. 
    	console.log(queueMessage.id);
    }, error : function(error){
    	console.log(error);
    }
});

```
</span>

#Pulling data from the queue.

To pull data into the Queue, you need to call the pull method of the `CB.CloudQueue` instance.

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
queue.pull({
	success : function(queueMessage){
    	//queueMessage is an instance of CB.QueueMessage class. 
    	console.log(queueMessage.id);
    }, error : function(error){
    	console.log(error);
    }
});

```
</span>

><span class="tut-info">Info</span> As soon as you pull the message from the queue, the message is hidden for 30 minutes (1800 seconds). If the message is not deleted during that period it will reappear back into the queue. Please make sure you delete the message after the task is done. If you need more than 30 mins. Please review the timeout section below. 

#Deleting a message. 

To delete a message from the Queue, you need to call the deleteMessage method of the `CB.CloudQueue` instance.

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
queue.deleteMessage(messageId, {
	success : function(queueMessage){
    	//message deleted. 
    }, error : function(error){
    	//error.
    }
});

```
</span>

#Timeouts

When you pull the message from queue, the message becomes invisible for 30 mins. We have timeouts in place because if your service which is processing the queue crashes, the message re-appears back into the queue within 30 mins and the other service can pick it up and process it. After your task completes, you should delete the message from the queue by calling the DeleteMessage function. 

You can set custom timeouts at any time you want to fit your requirements. 

To set the timeout, you first need to create the QueueMessage instance, set the timeout and then push it in the queue. 

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var queueMessage = new CB.QueueMessage();
queueMessage.timeout = 3600; // 1hr.  Timeout is in seconds. 
queueMessage.message = "data";
queue.push(queueMessage, {
	success : function(queueMessage){
    	//message pushed. 
    }, error : function(error){
    	//error.
    }
});

```
</span>

#Delays

To make the message in the queue appear after a certain period of time, you delay the message. Delay can be set in seconds. 

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var queueMessage = new CB.QueueMessage();
queueMessage.delay = 3600; // 1hr.  The message will appear after 1 hr. 
queueMessage.message = "data";
queue.push(queueMessage, {
	success : function(queueMessage){
    	//message pushed. 
    }, error : function(error){
    	//error.
    }
});

```
</span>

#Expire

To delete the message from the queue after a certain period of time. You can set an expiry date and time to a message. The message will not be available after expire time is elapsed.  

==JavaScript==
<span class="js-lines" data-query="bulksave">
```
var queueMessage = new CB.QueueMessage();

var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);

queueMessage.expires = tomorrow; // 1hr.  The message will appear after 1 hr. 
queueMessage.message = "data";
queue.push(queueMessage, {
	success : function(queueMessage){
    	//message pushed. 
    }, error : function(error){
    	//error.
    }
});

```
</span>
