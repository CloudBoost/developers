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
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="create">
```
CloudQueue queue = new CloudQueue("QueueName");
	queue.create(new CloudQueueCallback() {
		@Override
		public void done(CloudQueue q, CloudException e) {
			if(e!=null){
				//
			}
			else{
				//
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="create">
```
var queue = new CB.CloudQueue("QueueName");
await queue.CreateAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="create">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "hostel",
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
        "subscribers": [],
        "retry": null,
        "messages": []
    }
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/create'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let queue = CloudQueue(queueName: queueName, queueType: nil)
try! queue.create({ response in
    if response.success {
      // queue created
    }
})
```
</span>

#Add message into the queue

To add message into the Queue, you need to call the addMessage method of the <span class="tut-snippet">CB.CloudQueue</span> instance. <span class="tut-snippet">addMessage</span> function takes in data as the first parameter.

==JavaScript==
<span class="js-lines" data-query="addmessagequeue">
```
var queue = new CB.CloudQueue('QueueName');
queue.addMessage('sample', {
    success : function(queueMessage){
        //queueMessage is an instance of CB.QueueMessage class
        console.log(queueMessage.id);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="addmessagequeue">
```
var queue = new CB.CloudQueue('QueueName');
queue.addMessage('sample', {
    success : function(queueMessage){
        //queueMessage is an instance of CB.QueueMessage class.
        console.log(queueMessage.id);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="addmessagequeue">
```
CloudQueue queue = new CloudQueue("QueueName");
	queue.addMessage("sample", new CloudQueueMessageCallback() {
		@Override
		public void done(QueueMessage[] msgs, CloudException e) {
			if (e != null)
				//
			else
				//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="addmessagequeue">
```
var queue = new CB.CloudQueue("QueueName");
await queue.AddMessageAsync("sample");
```
</span>

==cURL==
<span class="curl-lines" data-query="addmessagequeue">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "hostel",
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
        "subscribers": [],
        "retry": null,
        "messages": [{
            "_type": "queue-message",
            "expires": null,
            "_id": null,
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "timeout",
            "delay",
            "message"],
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
            "delay": null,
            "timeout": 1800,
            "_isModified": true
        }]
    }
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/message'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let queue = CloudQueue(queueName: queueName, queueType: nil)
queue.addMessage("Randhir", callback: { response in
    if response.success {
      // message added
    }
})
```
</span>

#Get first message from the queue

To get the ***first*** message from the Queue, you need to call the getMessage method of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="getmessagequeues">
```
queue.getMessage ({
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
<span class="nodejs-lines" data-query="getmessagequeues">
```
queue.getMessage ({
    success : function(queueMessage){
        //queueMessage is an instance of CB.QueueMessage class.
        console.log(queueMessage.id);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="getmessagequeues">
```
que.getMessage(1, new CloudQueueMessageCallback() {
	@Override
	public void done(QueueMessage[] msgs, CloudException e) {
		if (e != null)
			//
		if (msgs != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="getmessagequeues">
```
await queue.GetMessageAsync(1);
```
</span>

==cURL==
<span class="curl-lines" data-query="getmessagequeues">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
  "count":${message_count}
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/getMessage'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let numberOfMessages = 1
queue.getMessage(numberOfMessages, callback: { response in
    if response.success {
      // message added
    }
})
```
</span>

><span class="tut-info">Info</span> As soon as you pull the message from the queue, the message is hidden for 30 minutes (1800 seconds). If the message is not deleted during that period it will reappear back into the queue. Please make sure you delete the message after the task is done. If you need more than 30 mins. Please review the timeout section below.

#Peek a message

Peeking usually help you to see the first message in the queue without removing the message from the queue. To peek data into the Queue, you need to call the peek method of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="peekmessagequeues">
```
queue.peekMessage({
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
<span class="nodejs-lines" data-query="peekmessagequeues">
```
queue.peekMessage({
    success : function(queueMessage){
        //queueMessage is an instance of CB.QueueMessage class.
        console.log(queueMessage.id);
    }, error : function(error){
        console.log(error);
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="peekmessagequeues">
```
que.peekMessage(1, new CloudQueueMessageCallback() {
	@Override
	public void done(QueueMessage[] msgs, CloudException e) {
		if (e != null)
			//
		if (msgs != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="peekmessagequeues">
```
await queue.PeekMessageAsync(1);
```
</span>

==cURL==
<span class="curl-lines" data-query="peekmessagequeues">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
  "count":${message_count}
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/peekMessage'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let numberOfMessages = 1
queue.peekMessage(numberOfMessages, callback: { response in
    if response.success {
      // message added
    }
})
```
</span>

><span class="tut-info">Info</span> Peek will <b>not</b> hide your message in the queue.

#Get a message by Id

To get a Queue Message by Id, you need to call the GetMessageById function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="getmessageid">
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
<span class="nodejs-lines" data-query="getmessageid">
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

==Java==
<span class="java-lines" data-query="getmessageid">
```
que.getMessageById("id", new CloudQueueMessageCallback() {
	@Override
	public void done(QueueMessage msg, CloudException e) {
		if (e != null)
			//
		if (msg != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="getmessageid">
```
await queue.GetMessageByIdAsync("id");
```
</span>

==cURL==
<span class="curl-lines" data-query="getmessageid">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key}
  }' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/message/${id}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
queue.getMessageById("id", callback: { response in
    if response.success {
      // message added
    }
})
```
</span>

#Get all messages

To get all Messages from queue, you need to call the getAllMessages function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="getallmessages">
```
queue.getAllMessages({
    success : function(messagesList){
        //messages list
    }, error : function(error){
        //error.
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="getallmessages">
```
queue.getAllMessages({
    success : function(messagesList){
        //messages list
    }, error : function(error){
        //error.
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="getallmessages">
```
que.getAllMessages(new CloudQueueArrayCallback() {
	@Override
	public void done(QueueMessage[] msgs, CloudException e) {
		if (e != null)
			//
		if (msgs != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="getalltmessages">
```
await queue.GetAllMessagesAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="getallmessages">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key}
  }' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/messages'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
queue.getAllMessages({ response in
    if response.success {
      // message added
    }
})
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

==Java==
<span class="java-lines" data-query="queueinfo">
```
queue.get(new CloudQueueCallback() {
	@Override
	public void done(CloudQueue q, CloudException e) {
		if (e != null)
			//
		if (q != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="queueinfo">
```
await queue.GetAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="queueinfo">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key}
  }' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
CloudQueue.get(queueName,callback: { response in
  if response.success {
    response.log()
  }
})
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

==Java==
<span class="java-lines" data-query="getallqueues">
```
CloudQueue.getAll(new CloudQueueArrayCallback() {
	@Override
	public void done(CloudQueue[] q, CloudException e) {
		if (e != null)
			//
		if (q != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="getallqueus">
```
await queue.GetAllAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="getallqueues">
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key}    
}' 'http://api.cloudboost.io/queue/${app_id}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
CloudQueue.getAll({ response in
  if response.success {
    response.log()
  }
})
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

==Java==
<span class="java-lines" data-query="deletemessage">
```
que.deleteMessage(id, new CloudQueueMessageCallback() {
	@Override
	public void done(QueueMessage[] msgs, CloudException e) {
		if(e!=null)
			//
		if(msgs!=null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="deletemessage">
```
await queue.DeleteMessageAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="deletemessage">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key}
  "method":"DELETE"
}' 'http://api.cloudboost.io/queue/${app_id}/message/${id}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
queue.deleteMessage("id", callback: { response in
  if response.success {
    response.log()
  }
})
```
</span>

#Deleting a queue

To delete a Queue, you need to call the delete function of the <span class="tut-snippet">CB.CloudQueue</span> instance.

==JavaScript==
<span class="js-lines" data-query="deletequeue">
```
queue.delete({
    success : function(){
        //queue deleted
    }, error : function(error){
        //error
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

==Java==
<span class="java-lines" data-query="deletequeue">
```
queue.deleteQueue(queueName, new CloudQueueCallback() {
	@Override
	public void done(CloudQueue q, CloudException e) {
		if (e != null)
			//
		if (q != null)
			//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="deletequeue">
```
await queue.DeleteQueueAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="deletequeue">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "c",
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
        "subscribers": [],
        "retry": null,
        "messages": []
    },
    "method": "DELETE"
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
queue.delete({ response in
  if response.success {
    response.log()
  }
})
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
queue.addMessage(queueMessage, {
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
queue.addMessage(queueMessage, {
    success : function(queueMessage){
        //message pushed.
    }, error : function(error){
        //error.
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="timeout">
```
QueueMessage msg = new QueueMessage();
msg.setMessage("sample");
msg.setTimeout(3);
QueueMessage[] msgs={msg};
	queue.addMessage(msgs, new CloudQueueMessageCallback() {
		@Override
		public void done(QueueMessage[] msgs, CloudException e) {
			if (e != null)
				//
			if(msgs!=null)
				//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="timeout">
```
var msg = new QueueMessage();
msg.SetMessage("sample");
msg.SetTimeout(3);
var list = new ArrayList();
list.Add(msg);
await queue.AddMessageAsync(list);
```
</span>

==cURL==
<span class="curl-lines" data-query="timeout">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "hostel",
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
        "subscribers": [],
        "retry": null,
        "messages": [{
            "_type": "queue-message",
            "expires": null,
            "_id": null,
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "timeout",
            "delay",
            "message"],
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
            "delay": null,
            "timeout": 3600,
            "_isModified": true
        }]
    }
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/message'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
queue.delete({ response in
  if response.success {
    response.log()
  }
})
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
queue.addMessage(queueMessage, {
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
queue.addMessage(queueMessage, {
    success : function(queueMessage){
        //message pushed.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="delays">
```
QueueMessage msg = new QueueMessage();
msg.setMessage("sample");
msg.setDelay(3000);
QueueMessage[] msgs={msg};
	queue.addMessage(msgs, new CloudQueueMessageCallback() {
		@Override
		public void done(QueueMessage[] msgs, CloudException e) {
			if (e != null)
				//
			if(msgs!=null)
				//msgs
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="delays">
```
var msg = new QueueMessage();
msg.SetMessage("sample");
msg.SetDelay(3000);
var list = new ArrayList();
list.Add(msg);
await queue.AddMessageAsync(list);
```
</span>

==cURL==
<span class="curl-lines" data-query="delays">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "hostel",
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
        "subscribers": [],
        "retry": null,
        "messages": [{
            "_type": "queue-message",
            "expires": null,
            "_id": null,
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "timeout",
            "delay",
            "message"],
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
            "delay": 3000,
            "timeout": 1800,
            "_isModified": true
        }]
    }
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/message'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let msg = QueueMessage()
msg.setMessage("Sample")
msg.setDelay(1000)
queue.addMessage(msg, callback: { response in
    response.log()
})
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
queue.addMessage(queueMessage, {
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
queue.addMessage(queueMessage, {
    success : function(queueMessage){
        //message pushed.
    }, error : function(error){
        //error.
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="expire">
```
QueueMessage msg = new QueueMessage();
msg.setMessage("sample");
msg.setExpires("2017-03-02T09:11:15.621Z");
QueueMessage[] msgs={msg};
	queue.addMessage(msgs, new CloudQueueMessageCallback() {
		@Override
		public void done(QueueMessage[] msgs, CloudException e) {
			if (e != null)
				//
			if(msgs!=null)
				//
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="expire">
```
var msg = new QueueMessage();
msg.SetMessage("sample");
msg.SetExpires("2017-03-02T09:11:15.621Z);
var list = new ArrayList();
list.Add(msg);
await queue.AddMessageAsync(list);
```
</span>

==cURL==
<span class="curl-lines" data-query="expire">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${app_key},
    "document": {
        "_type": "queue",
        "expires": null,
        "queueType": "pull",
        "name": "hostel",
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
        "subscribers": [],
        "retry": null,
        "messages": [{
            "_type": "queue-message",
            "expires": ${date},
            "_id": null,
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "timeout",
            "delay",
            "message"],
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
            "delay": null,
            "timeout": 1800,
            "_isModified": true
        }]
    }
}' 'http://api.cloudboost.io/queue/${app_id}/${queue_name}/message'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
let msg = QueueMessage()
msg.setMessage("Sample")
let today = NSDate()
let tomorrow = today.dateByAddingTimeInterval(NSTimeInterval.abs(86400))
msg.setExpires(tomorrow)
queue.addMessage(msg, callback: { response in
    response.log()
})
```
</span>
