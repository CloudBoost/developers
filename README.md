# Tutorial

[![Join the chat at https://gitter.im/cloudboost/help](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cloudboost/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](http://cbjenkins.cloudapp.net:8080/buildStatus/icon?job=CbTutorial)](http://cbjenkins.cloudapp.net:8080/job/CbTutorial/)


Tutorials for CloudBoost hosted at https://tutorials.cloudboost.io

# Guide to write tutorials
(to make compatible with https://tutorials.cloudboost.io)</br>

Apart from Markdown [Guide for markdown](https://guides.github.com/features/mastering-markdown), following are the guide to make compatible with cloudboost tutorials site.


## Menu Headings
Menu headings should with start with #(h1 tag), without full stop(.) at the end.

## Info
Info quotes should enclosed in span tags with class="tut-info".</br>
eg: &lt;span class="tut-info"&gt;Info &lt;/span&gt;

## Important quotes
Important quotes should enclosed in span tags with class="tut-imp".</br>
eg: &lt;span class="tut-imp"&gt;important &lt;/span&gt;

## Warning quotes
Warning quotes should enclosed in span tags with class="tut-warning".</br>
eg: &lt;span class="tut-warning"&gt;Warning &lt;/span&gt;

## Images
For full length images, use image tags with class="full-length-img".</br>
eg: &lt;img class="full-length-img" alt="" src="path/image.png"&gt;</br></br>

For center/mid length images, use image tags with class="center-img".</br>
eg: &lt;img class="center-img" alt="" src="path/image.png"&gt;

## Small / One line code snippets
Small code or one line code snippets should enclosed in span tags with class="tut-snippet".</br>
eg: &lt;span class="tut-snippet"&gt;var x=150; &lt;/span&gt;

## Multi line code snippets
Multi lines code snippets act as code tabs of different programming languages. This multi lines code should be written in span tags with class="(name of programming language)-lines" and with data attribute data-query="(functionality name of this code)". The main code should enclosed in ```(original markdown for code snippet) inside span tags.

eg: &lt;span class="java-lines" data-query="addtable"&gt;</br>
    ```
    first line
    second line
    third line
    ```</br>
    &lt;/span&gt;</br></br>
    
You can add more programming languages codes of same functionality followed one after one.
eg: &lt;span class="java-lines" data-query="addtable"&gt;</br>
    &lt;/span&gt;</br>
    
    &lt;span class="nodejs-lines" data-query="addtable"&gt;</br>
    &lt;/span&gt;</br>
    
    &lt;span class="dotnet-lines" data-query="addtable"&gt;</br>
    &lt;/span&gt;</br>

#Contribute
If you want to contribute to this repo. Please make sure you spell check everything and make sure you have tested the code with the live CloudBoost API before sending us the pull request.
