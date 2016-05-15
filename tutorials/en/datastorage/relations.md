#####In this section

In this section you'll learn how relationships work in CloudBoost and how to model your data leveraging relationship features in CloudBoost.

There are usually three types of relationships:

* One to One
* One to many
* Many to many

We will look at each of these types of relations and how to model them.

Before we begin, let's have a look at this ER Diagram below.


<img src="https://blog.cloudboost.io/content/images/2015/09/StudentManagementSystem.PNG" class="full-length-img" alt="One-to-One">

* Here Student and Address tables share one-to-one relation since student can ONLY have one address.  An address column from the Student table is <span class="tut-snippet">related</span> to Address Table.

* Student and Course share a many to many relationship since any number of students can be in one course and one student can take any number of courses.

CloudBoost can help you model these type of relations with ease.

#One to one

Here we're modelling a one-to-one relationship between Student and Address tables.

To model one-to-one relationship, we create an <span class="tut-snippet">address</span> column in our <span class="tut-snippet">Student</span> table and choose the data-type of the column as <span class="tut-snippet">Relation</span>. Pick <span class="tut-snippet">Address</span> Table form the second dropdown and as it is a one-to-one relation, make sure you check the <span class="tut-snippet">unique</span> checkbox of the address column which will make sure no two student has the same address.


To save an object with one-to-one relation. Here is the code which you need to write:

==JavaScript==
<span class="js-lines" data-query="oneone">
```
//create the address object.
var address = new CB.CloudObject('Address');
address.set('StreetName','Manhattan');
address.set('Country','United States');
//create the student object and set address object inside it.
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
student.set('address', address);
//save
student.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="oneone">
```
//create the address object.
var address = new CB.CloudObject('Address');
address.set('StreetName','Manhattan');
address.set('Country','United States');
//create the student object and set address object inside it.  
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
student.set('address', address);
//save
student.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="oneone">
```
//create the address object.
CloudObject address = new CloudObject("Address");
address.set("StreetName","Manhattan");
address.set("Country","United States");
//create the student object and set address object inside it.  
CloudObject student = new CloudObject("Student");
student.set("name", "John Smith");
student.set("address", address);
//save
student.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException t) {
		if(x != null){
		}
		if(t != null){
			//Failed to save data
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="oneone">
```
//create the address object.
var address = new CB.CloudObject("Address");
address.Set("StreetName","Manhattan");
address.Set("Country","United States");
//create the student object and set address object inside it.
var student = new CB.CloudObject("Student");
student.Set("name", "John Smith");
student.Set("address", address);
//save
await student.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="oneone">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
        "_type": "custom",
        "expires": null,
        "address": {
            "_type": "custom",
            "expires": null,
            "StreetName": "Manhattan",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "StreetName",
            "Country"],
            "_tableName": "table",
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
            "Country": "United States",
            "_isModified": true
        },
        "name": "John Smith",
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "name",
        "address"],
        "_tableName": "Student",
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

==Swift==
<span class="ios-lines" data-query="create">
```
let student = CloudObject(tableName: "Student")
let address = CloudObject(tableName: "Address")
address.set("country", value: "India")
student.set("address", value: address)
student.save({ resp in
    resp.log()
})
```
</span>


>Info: For one-to-one relations, you need to set <span class="tut-snippet">unique</span> constraint on a column when you're designing your table.

#One to many

This is exactly the same as One-to-one but with one simple difference. You **don’t** need to set <span class="tut-snippet">unique</span> property on a column and doing this would allow a CloudObject to be related to any number of Objects.

The code for one to many would look exactly the same. In this instance, One Address can belong to any number of students.

==JavaScript==
<span class="js-lines" data-query="onemany">
```
//create the address object.
var address = new CB.CloudObject('Address');
address.set('StreetName','Manhattan');
address.set('Country','United States');
//create the student object and set address object inside it.
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
student.set('address', address);
//save
student.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="onemany">
```
//create the address object.
var address = new CB.CloudObject('Address');
address.set('StreetName','Manhattan');
address.set('Country','United States');
//create the student object and set address object inside it.  
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
student.set('address', address);
//save
student.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="onemany">
```
//create the address object.
CloudObject address = new CloudObject("Address");
address.set("StreetName","Manhattan");
address.set("Country","United States");
//create the student object and set address object inside it.
CloudObject student = new CloudObject("Student");
student.set("name", "ohn Smith");
student.set("address", address);
//save
student.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException t) {
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="onemany">
```
//create the address object.
var address = new CB.CloudObject("Address");
address.Set("StreetName","Manhattan");
address.Set("Country","United States");
//create the student object and set address object inside it.
var student = new CB.CloudObject("Student");
student.Set("name", "John Smith");
student.Set("address", address);
//save
await student.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="onemany">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
        "_type": "custom",
        "expires": null,
        "address": {
            "_type": "custom",
            "expires": null,
            "StreetName": "Manhattan",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "StreetName",
            "Country"],
            "_tableName": "Address",
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
            "Country": "United States",
            "_isModified": true
        },
        "name": "John Smith",
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "name",
        "address"],
        "_tableName": "Student",
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

==Swift==
<span class="ios-lines" data-query="create">
```
let student = CloudObject(tableName: "Student")
let address = CloudObject(tableName: "Address")
address.set("country", value: "India")
student.set("address", value: address)
student.save({ resp in
    resp.log()
})
```
</span>
>Info: For one-to-many relations, you **don't** have to set a <span class="tut-snippet">unique</span> constraint on a column when you're designing your table.


#Many to many

Many-to-many relationships can be modelled in two ways.

* With a <span class="tut-snippet">Relation</span> DataType.
* With a <span class="tut-snippet">List</span> DataType.



###With Relations

If you're choosing a <span class="tut-snippet">Relations</span> option, then you would basically create a new table that would store relations of two tables you want to connect to. This is very similar to creating a many-to-many relations in any Relational Database.

In this example, we're connecting Student and Courses tables. You basically create a new table called StudentCourses and have two columns (student and course) which is a <span class="tut-snippet">Relation</span> DataType to each of these two tables respectively.

<img src="https://blog.cloudboost.io/content/images/2015/09/Capture123-1.PNG" class="full-length-img" alt="Many-to-many">

==JavaScript==
<span class="js-lines" data-query="relation">
```
//create the course object.
var course = new CB.CloudObject('Course');
course.set('name','JavaScript');
//create the student object
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
//assign student and course to studentCourses
var studentCourses = new CB.CloudObject('StudentCourses');
studentCourses.set('student', student);
studentCourses.set('course',course);
//save
studentCourses.save({
    success : function(studentCourses){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="relation">
```
//create the course object.
var course = new CB.CloudObject('Course');
course.set('name','JavaScript');
//create the student object
var student = new CB.CloudObject('Student');
student.set('name', 'John Smith');
//assign student and course to studentCourses
var studentCourses = new CB.CloudObject('StudentCourses');
studentCourses.set('student', student);
studentCourses.set('course',course);
//save
studentCourses.save({
    success : function(studentCourses){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="relation">
```
//create the course object.
CloudObject course = new CloudObject("Course");
course.set("name","Java");
//create the student object
CloudObject student = new CloudObject("Student");
student.set("name", "John Smith");
//assign student and course to studentCourses
CloudObject studentCourses = new CloudObject("StudentCourses");
studentCourses.set("student", student);
studentCourses.set("course",course);
//save
studentCourses.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException t) {
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="relation">
```
//create the course object.
var course = new CB.CloudObject("Course");
course.Set("name","JavaScript");
//create the student object
var student = new CB.CloudObject("Student");
student.Set("name", "John Smith");
//assign student and course to studentCourses
var studentCourses = new CB.CloudObject("StudentCourses");
studentCourses.Set("student", student);
studentCourses.Set("course",course);
//save
await studentCourses.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="relation">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
        "course": {
            "_type": "custom",
            "expires": null,
            "name": "Java",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "name"],
            "_tableName": "Course",
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
        "_type": "custom",
        "expires": null,
        "student": {
            "_type": "custom",
            "expires": null,
            "name": "John Smith",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "name"],
            "_tableName": "Student",
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
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "student",
        "course"],
        "_tableName": "StudentCourses",
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

###With List

If you're choosing a <span class="tut-snippet">List</span> option, then you would basically create a column with <span class="tut-snippet">List</span> DataType and select the table you want to connect to. Think of List as Array of Related Objects.

In this example, we're connecting Student and Courses tables. You basically create a new column called Students in Course Table and have a column which if of <span class="tut-snippet">List</span> type.

<img src="https://blog.cloudboost.io/content/images/2015/09/StudentManagementSystem.PNG" class="full-length-img" alt="List">

><span class="tut-info">Info:</span> You can do this other way around too. Instead of having a column in the course table you can also have a column in Student table which would be a List of Relations to Course. The decision depends on how will you query it. To learn more about queries, Please click [here](?lang=en&category=query&subcategory=basicqueries).


==JavaScript==
<span class="js-lines" data-query="list">
```
//create the student object
var student1 = new CB.CloudObject('Student');
student1.set('name', 'John Smith');
var student2 = new CB.CloudObject('Student');
student2.set('name', 'Jack Danielle');
var course = new CB.CloudObject('Course');
course.set('Name', 'Java');
course.set('Students',[student1,student2]);
//save
course.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==NodeJS==
<span class="nodejs-lines" data-query="list">
```
//create the student object
var student1 = new CB.CloudObject('Student');
student1.set('name', 'John Smith');
var student2 = new CB.CloudObject('Student');
student2.set('name', 'Jack Danielle');
var course = new CB.CloudObject('Course');
course.set('Name', 'Java');
course.set('Students',[student1,student2]);
//save
course.save({
    success : function(student){
        //saved successfully.
    }, error : function(error){
        //error
    }
});
```
</span>

==Java==
<span class="java-lines" data-query="list">
```
//create the student object
CloudObject student1 = new CloudObject("Student");
student1.set("name", "John Smith");
CloudObject student2 = new CloudObject("Student");
student2.set("name", "Jack Danielle");
CloudObject course = new CloudObject("Course");
course.set("Name", "Java");
course.set("Students",new CloudObject[]{student1,student2});
//save
course.save(new CloudObjectCallback(){
	@Override
	public void done(CloudObject x, CloudException t) {
		if(x != null){
		}
		if(t != null){
		}
	}
});
```
</span>

==.NET==
<span class="dotnet-lines" data-query="list">
```
//create the student object
var student1 = new CB.CloudObject("Student");
student1.Set("name", "John Smith");
var student2 = new CB.CloudObject("Student");
student2.set("name", "Jack Danielle");
var course = new CB.CloudObject('Course');
course.set("Name", "Java");
var list = new ArrayList();
list.Add(student1);
list.Add(student2);
course.Set("Students",list);
//save
await course.SaveAsync();
```
</span>

==cURL==
<span class="curl-lines" data-query="list">
```
curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "key": ${client_key},
    "document": {
        "Name": "Java",
        "_type": "custom",
        "expires": null,
        "_modifiedColumns": ["createdAt",
        "updatedAt",
        "ACL",
        "expires",
        "Name",
        "Students"],
        "_tableName": "Course",
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
        "Students": [{
            "_type": "custom",
            "expires": null,
            "name": "John Smith",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "name"],
            "_tableName": "Student",
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
            "name": "Jack Danielle",
            "_modifiedColumns": ["createdAt",
            "updatedAt",
            "ACL",
            "expires",
            "name"],
            "_tableName": "Student",
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
        }],
        "_isModified": true
    }
}' 'http://api.cloudboost.io/data/${app_id}/${table_name}'
```
</span>

==Swift==
<span class="ios-lines" data-query="create">
```
//create the student object
let student1 = CloudObject(tableName: "Student")
student1.set("name", value: "John Smith")
let student2 = CloudObject(tableName: "Student")
student2.set("name", value: "Jack")
let course = CloudObject(tableName: "Course")
course.set("Name", value: "Java:)
course.set("Students",value: [student1,student2])
//save
course.save({ response in
  response.log()
})
```
</span>
