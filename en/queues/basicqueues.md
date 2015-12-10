#####In this section

In this section you'll learn about how to push and pull data of CloudQueues. You'll also learn about message delays, timeouts and more.

#Create a new Queue

Before you push and pull data from the queue. You need to create a queue instance which can be done with one simple line of code.

==JavaScript==
<span class="js-lines" data-query="create">
```
var queue = new CB.CloudQueue('QueueName');
queue.create({
	success : function(queueObject){
    	//returns a queueObject.
    	console.log(queueMessage.id);
    }, error : function(error){
    	//error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="create">
```
var queue = new CB.CloudQueue('QueueName');
queue.create({
	success : function(queueObject){
    	//returns a queueObject.
    	console.log(queueMessage.id);
    }, error : function(error){
    	//error
    }
});
```
</span>

#Pushing data into the queue

To push data into the Queue, you need to call the push method of the <span class="tut-snippet">CB.CloudQueue</span> instance. <span class="tut-snippet">Push</span> function takes in data as the first parameter.

==JavaScript==
<span class="js-lines" data-query="pushqueue">
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

==NodeJS==
<span class="nodejs-lines" data-query="pushqueue">
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

#Pulling data from the queue

To pull data into the Queue, you need to call the pull method of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="pullqueues">
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

==NodeJS==
<span class="nodejs-lines" data-query="pullqueues">
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

#Peek a message

Peeking usually help you to see the first message in the queue without removing the message from the queue. To peek data into the Queue, you need to call the peek method of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="peekqueues">
```
queue.peek({
	success : function(queueMessage){
    	//queueMessage is an instance of CB.QueueMessage class.
    	console.log(queueMessage.id);
    }, error : function(error){
    	console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="peekqueues">
```
queue.peek({
	success : function(queueMessage){
    	//queueMessage is an instance of CB.QueueMessage class.
    	console.log(queueMessage.id);
    }, error : function(error){
    	console.log(error);
    }
});
```
</span>

><span class="tut-info">Info</span> Peek will <b>not</b> hide your message in the queue.

#Get a message

To get a Queue Message by Id, you need to call the GetMessageById function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="getmessage">
```
queue.getMessageById(messageId,{
    success : function(message){
    	//message
    }, error : function(error){
    	//error.
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getmessage">
```
queue.getMessageById(messageId, {
    success : function(message){
    	//message
    }, error : function(error){
    	//error.
    }
});
```
</span>

#Get queue info

To get a queue info, you need to call the get function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="queueinfo">
```
queue.get({
    success : function(queue){
    	//queue info
    }, error : function(error){
    	//error.
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="queueinfo">
```
queue.get({
    success : function(queue){
    	//queue info
    }, error : function(error){
    	//error.
    }
});
```
</span>

#Get All Queues

To get all the queues, you need to call the getAll function of the <span class="tut-snippet">CB.CloudQueue</span>.

==JavaScript==
<span class="js-lines" data-query="getallqueues">
```
CB.CloudQueue.getAll({
    success : function(list){
    	//list is an array of  CB.CloudQueue Objects
    }, error : function(error){
    	//error.
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getallqueues">
```
CB.CloudQueue.getAll({
    success : function(list){
    	//list is an array of  CB.CloudQueue Objects
    }, error : function(error){
    	//error.
    }
});
```
</span>

#Deleting a message

To delete a message from the Queue, you need to call the deleteMessage method of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="deletemessage">
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

==NodeJS==
<span class="nodejs-lines" data-query="deletemessage">
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

#Deleting a queue

To delete a Queue, you need to call the delete function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="deletequeue">
```
queue.delete({
	success : function(){
    	//queue deleted.
    }, error : function(error){
    	//error.
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="deletequeue">
```
queue.delete({
	success : function(){
    	//queue deleted.
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
<span class="js-lines" data-query="timeout">
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

==NodeJS==
<span class="nodejs-lines" data-query="timeout">
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
<span class="js-lines" data-query="delays">
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

==NodeJS==
<span class="nodejs-lines" data-query="delays">
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
<span class="js-lines" data-query="expire">
```
var queueMessage = new CB.QueueMessage();
//
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);
//
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

==NodeJS==
<span class="nodejs-lines" data-query="expire">
```
var queueMessage = new CB.QueueMessage();
//
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);
//
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
