# Tutorial

[![Build Status](https://travis-ci.org/CloudBoost/tutorial.svg?branch=master)](https://travis-ci.org/CloudBoost/tutorial)


Tutorials for CloudBoost is hosted at [https://tutorials.cloudboost.io](https://tutorials.cloudboost.io)

# Guide for writing tutorials

Apart from Markdown [Guide for markdown](https://guides.github.com/features/mastering-markdown), this guide will help you to make tutorials compatible with [https://tutorials.cloudboost.io](https://tutorials.cloudboost.io)


## Menu Headings
Menu headings should start with #(h1 tag), **without full stop(.)** at the end.

## Info
Info quotes should enclosed in span tags with class="tut-info".</br>
eg: ```<span class="tut-info">Info</span>```

## Important quotes
Important quotes should be enclosed in span tags with class="tut-imp".</br>
eg: ```<span class="tut-imp">important </span>```

## Warning quotes
Warning quotes should be enclosed in span tags with class="tut-warning".</br>
eg: ```<span class="tut-warning">Warning </span>```

## Images
For full length images, use image tag with class="full-length-img".</br>
eg: ```<img class="full-length-img" alt="" src="path/image.png">```
</br>
For center/mid length images, use image tag with class="center-img".</br>
eg: ```<img class="center-img" alt="" src="path/image.png">```

## Small / One line code snippets
Small code or one line code snippets should be enclosed in span tags with class="tut-snippet".</br>
eg: ```<span class="tut-snippet">var x=150; </span>```

## Multi line code snippets
Multi lines code snippet acts as code tabs of different programming languages. These multi line code should be written in span tags with class="(name of programming language)-lines" and with data attribute data-query="(functionality name of this code)". The main code should enclosed in ```(original markdown for code snippet) inside of span tags.

eg: 
```
<span class="java-lines" data-query="addtable">
`` `
your code line 1
your code line 2
your code line 3
` ``
</span>
```

You can add more programming languages codes followed one after one of same functionality.</br>
eg:

```
<span class="java-lines" data-query="addtable">
</span>
    
<span class="nodejs-lines" data-query="addtable">
</span>
    
<span class="dotnet-lines" data-query="addtable">;
</span>;
```

**Important**
* There shoud not be any space between codes line, if it necessary to display space, use // quote marks
eg:
```
<span class="js-lines" data-query="addtable">
` ``
var i=0;
//
var j=2
`` `
</span>
```
* There should be one line space between different programming language span tags.
* data-query="functionality name" should be same for different programming language of same functionality.
* Functionality name should be unique and shoudn't conflict with other functionality names.
* Following are the allowed strings to mention the programming language
  * Javascript->js-lines
  * .Net->dotnet-lines
  * Java->java-lines
  * Nodejs->nodejs-lines
  * IOS->ios-lines
  * IOT->iot-lines
  * Ruby->ruby-lines
  * cURL->curl-lines
  * XML->xml-lines

# Contribute
If you want to contribute to this repo. Please make sure you spell check everything and make sure you have tested the code with the live CloudBoost API before sending us the pull request.
