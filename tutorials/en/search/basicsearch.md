#####In this section

In this section you'll learn about how to search your data and CloudObjects in CloudBoost. You will also learn few important full text search fucntionality with CloudQueries

CloudBoost Search API works with [CB.CloudQuery](https://tutorials.cloudboost.io/en/query/basicqueries).

# Search
You can make the search query using <span class="tut-snippet">query.search()</span> function. Here are the parameters :

* Search (Type : String, Required). This is the text you want to search for.
* Language (Type : String, Optional). Default is English.  
* CaseSensitive (Type : Boolean, Optional). Default is false (which means e is same as E)
* DiacriticSensitive (Type : Boolean, Optional). Default is false (which means e is same as é)

####Basic Search
==JavaScript==
<span class="js-lines" data-query="simplesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("dog");
query.find({
    success : function(list){
      // returns two CloudObjects of fields having string 'dog'      
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="simplesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("dog");
query.find({
    success : function(list){
      // returns two CloudObjects of fields having string 'dog'     
    }, error : function(error){
     //Error                         
    }
});
```
</span>

# Search with Phrases
You can search for phrases like “tree flowers honeybees” using text indexes. By default, the phrase search makes an OR search on all the specified keywords i.e. it will look for CloudObjects which contains either the words - "tree OR flowers OR honeybees”.

==JavaScript==
<span class="js-lines" data-query="phrasalsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("tree flowers honeybees");
query.find({
    success : function(list){
      // returns CloudObjects of fields having keywords either of  tree OR flowers OR honeybees keywords     
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="phrasalsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("tree flowers honeybees");
query.find({
    success : function(list){
      // returns CloudObjects of fields having keywords either of tree OR flowers OR honeybees keywords     
    }, error : function(error){
     //Error                         
    }
});
```
</span>

# Exact Phrase search
In case you would like to perform an exact phrase search, you can do so by specifying double quotes in the search text.

==JavaScript==
<span class="js-lines" data-query="andsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("\"tree flowers\"");
query.find({
    success : function(list){
      // returns CloudObjects of fields having exact phrase "tree flowers"    
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="andsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("\"tree flowers\"");
query.find({
    success : function(list){
      // returns CloudObjects of fields having exact phrase "tree flowers"    
    }, error : function(error){
     //Error                         
    }
});
```
</span>

# Negation Search
Prefixing a search keyword with – (minus sign) excludes all the CloudObjects that contain the negated term.
For example, searching for any CloudObjects which contains the keyword 'tree' but does not contain 'birds'.

==JavaScript==
<span class="js-lines" data-query="negatesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("tree -birds");
query.find({
    success : function(list){
      // returns CloudObjects of fields having keyword "tree"  but not "birds"  
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="negatesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("tree -birds");
query.find({
    success : function(list){
      // returns CloudObjects of fields having keyword "tree"  but not "birds"  
    }, error : function(error){
     //Error                         
    }
});
```
</span>


# Case-sensitive Search
A boolean flag to enable or disable case sensitive search. To enable case sensitive, pass true as a third parameter

==JavaScript==
<span class="js-lines" data-query="casesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("Dogs",null,true);
query.find({
    success : function(list){
      // returns CloudObjects of fields having case senstive string "Dogs"
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="casesearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("Dogs",null,true);
query.find({
    success : function(list){
      // returns CloudObjects of fields having case senstive string "Dogs"
    }, error : function(error){
     //Error                         
    }
});
```
</span>

# Diacritic Sensitive
If you enable discritic search then "é" will not be equal to "e".
To enable diacritic sensitive, pass true as a fourth parameter

==JavaScript==
<span class="js-lines" data-query="diacriticsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("élephant",null,null,true);
query.find({
    success : function(list){
      // returns CloudObjects of fields having diacritics senstive string "élephant"
    }, error : function(error){
     //Error                         
    }
});
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="diacriticsearch">
```
var query = new CB.CloudQuery('Table');                                    
query.search("élephant",null,null,true);
query.find({
    success : function(list){
      // returns CloudObjects of fields having diacritics senstive string "élephant"
    }, error : function(error){
     //Error                         
    }
});
```
</span>

# Language
If the text is in a different language, then you can pass in a language param as a second argument. Search determines the list of stop words for the specified language. For example, "a", "an" etc are the stop words for english and "antes", "algunas" etc stop words for Spanish.

####Language codes

danish `da`       
dutch `nl`       
english `en`       
finnish `fi`       
french `fr`       
german `de`      
hungarian `hu`       
italian `it`       
norwegian `nb`       
portuguese `pt`       
romanian `ro`       
russian `ru`       
spanish `es`       
swedish `sv`       
turkish `tr`       
arabic `ara`    
dari `prs`    
persian `pes`    
urdu `urd`



==JavaScript==
<span class="js-lines" data-query="langsearch">
```
  var query = new CB.CloudQuery('Table');                                    
  query.search("algunas","es");
  query.find({
      success : function(list){
        // returns empty array because it exluded the spanish stop word "algunas"     
      }, error : function(error){
        //Error                         
      }
  });
```
</span>

==Nodejs==
<span class="nodejs-lines" data-query="langsearch">
```
  var query = new CB.CloudQuery('Table');                                    
  query.search("algunas","es");
  query.find({
      success : function(list){
        // returns empty array because it exluded the spanish stop word "algunas"     
      }, error : function(error){
        //Error                         
      }
  });
```
</span>
