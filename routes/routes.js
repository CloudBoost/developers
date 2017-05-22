var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var Q = require('q');
var path = require('path');
var request = require('request');
var marked = require('marked'); 

router.get('/', function(req, res) {    

    var language="en";//English
    var categoryName="gettingstarted";
    var subCategoryName="yourfirstapp";

    var promises=[];
    promises.push(getTutorialDetails(language,categoryName,subCategoryName));
    promises.push(getTutorialTopics());

    Q.all(promises).then(function(list){ 

      res.render('index',{
       language: language, 
       category: categoryName,
       subCategory: subCategoryName,
       tutorialTopics: list[1],
       tutorialDetails: list[0]
     });
    },function(error){

      console.log(error);
      render404(res);
    });  

  });

router.get('/en/:category/:subcategory', function(req, res) {    

  var language='en';
  var categoryName=req.params.category;
  var subCategoryName=req.params.subcategory;

  var promises=[];
  promises.push(getTutorialDetails(language,categoryName,subCategoryName));
  promises.push(getTutorialTopics());

  Q.all(promises).then(function(list){ 

    res.render('index',{
     language: language, 
     category: categoryName,
     subCategory: subCategoryName,
     tutorialTopics: list[1],
     tutorialDetails: list[0]
   });
  },function(error){

    console.log(error);

    render404(res);
  });  

});

router.get('*',function(req,res){
  render404(res);
});

module.exports = router;

/*********************************Private Functions**********************************/
//getTutorials
function getTutorialTopics(){
  var deferred = Q.defer();

  var url=global.keys.frontendServerUrl+"/tutorial";

  request({
    url: url,   
    method: 'GET'
  }, function(error, response, body){
    if(error || response.statusCode==400 || response.statusCode==500) {
     deferred.reject(error);       
   } else {    
    var info = JSON.parse(body);
    
    deferred.resolve(info);       
  }
});

  return deferred.promise;
}

//getTutorials
function getTutorialDetails(language,categoryName,subCategoryName){
  var deferred = Q.defer();  

  var uri='./tutorials/'+language+'/'+categoryName+'/'+subCategoryName+'.md';

  console.log("Tutorial requested:"+uri);  

  fs.readFile(uri,'utf8', function (err,data) {
    if (err) {
      return deferred.reject(err);
    }        
    deferred.resolve(data);   
  });

  return deferred.promise;
}

function render404(res) {
  
  res.status(200).render('404');
}
