#####In this section

In this section you'll learn how relationsips work in CloudBoost and how to model your data leveraging relationship features in CloudBoost. 

There are usually three types of relationships :

* One to One
* One to many
* Many to many

We will look at each of these types of relations and how to model them. 

Before we begin, Let's have a look at this ER Diagram below. 

{<1>}![School Management System](/content/images/2015/09/StudentManagementSystem.PNG)

* Here Student and Address tables share one-to-ine relation since student can ONLY have one address.  An address column from the Student table is <span class="tut-snippet">related</span> to Address Table. 

* Student and Course share a many to many relationship since any number of students can be in one course and one student can take any number of courses. 

CloudBoost can help you model these type of relations with ease.

#One to one

Here we're modelling a one-to-one relationship between Student and Address tables. 

To model one-to-one relationship, we create an <span class="tut-snippet">address</span> column in our <span class="tut-snippet">Student</span> table and choose the data-type of the column as <span class="tut-snippet">Relation</span>. Pick <span class="tut-snippet">Address</span> Table form the second dropdown and as it is a one-to-one relation, make sure you check the <span class="tut-snippet">unique</span> checkbox of the address column which will make sure no two student has the same address.


To save an object with one-to-one relation. Here is the code which you need to write : 

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



>Info: For one-to-one relations, you need to set <span class="tut-snippet">unique</span> constraint on a column when you're designing your table. 

#One to many

This is exactly the same as One-to-one but with one simple difference. You **dont** need to set <span class="tut-snippet">unique</span> property on a column and doing this would allow a CloudObject to be related to any number of Objects. 

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

>Info: For one-to-many relations, you **don't** have to set a <span class="tut-snippet">unique</span> constraint on a column when you're designing your table. 


#Many to many

Many-to-many relationships can be modelled in two ways. 

* With a <span class="tut-snippet">Relation</span> DataType.
* With a <span class="tut-snippet">List</span> DataType. 



###With Relations

If you're choosing a <span class="tut-snippet">Relations</span> option, then you would basically create a new table that would store relations of two tables you want to connect to. This is very similar to creating a many-to-many relations in any Relational Database. 

In this example, we're connecting Student and Courses tables. You basically create a new table called StudentCourses and have two columns (student and course) which is a <span class="tut-snippet">Relation</span> DataType to each of these two tables respectively. 

{<2>}![](/content/images/2015/09/Capture123-1.PNG)

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

###With List

If you're choosing a <span class="tut-snippet">List</span> option, then you would basically create a column with <span class="tut-snippet">List</span> DataType adn select the table you want to connect to. Think of List as Array of Related Objects. 

In this example, we're connecting Student and Courses tables. You basically create a new column called Students in Course Table and have a column which if of <span class="tut-snippet">List</span> type.

{<3>}![](/content/images/2015/09/StudentManagementSystem.PNG)

>Info: You can do this other way around too. Instead of having a column in the course table you can also have a column in Student table which would be a List of Relations to Course. The decision depends on how will you query it. To learn more about queries, Please click [here]().


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


#####What's next? 

This section was more about saving relations in CloudObjects. To know more about how to query relations, Please click [here](), or if you'd like to know more about how to save files. You can click [here]()
