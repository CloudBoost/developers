 //On init  
var currentStepHash;   

$(document).ready(function() { 
    $(".main-tut-wrapper").hide();
    $(".steps-category-wrapper").hide();
    $("#error-display").hide();
    $(".togglemenu-tut-wrapper").hide();    

    buildTutorial(tutMarkup);
});

function buildTutorial(markup){       
    // Convert markdown(md) files to html
    var converter = new Markdown.Converter();            
    $(".real-content").append(converter.makeHtml(markup));    

    var h5s=$(".real-content").find("h5"); 
    h5Css(h5s);

    var ps=$(".real-content").find("p"); 
    pCss(ps);

    var h1s=$(".real-content").find("h1"); 
    h1Css(h1s); 

    var imgs=$(".real-content").find("img"); 
    imgCss(imgs);

    var bquotess=$(".real-content").find("blockquote"); 
    bQuoteCss(bquotess);

    var spans=$(".real-content").find("span"); 
    spanCss(spans);

    $(".main-tut-wrapper").show();
    $(".steps-category-wrapper").show();
    $(".loading-tut-wrapper").hide();

    //Enable All codewidgeta
    $(".languageHeader").each(function(event){
        var lang=$(this).data("lang");
        var query=$(this).data("query");
        if(lang  && query){
            enableCodeWidget(lang,query); 
        }
    });         
    
    hideAndDisableCode();
    $('.js').addClass('languageHeader-active'); 
    $('.code-wrapper-js').show();                                 
      
}

//Active Step
$(document).on("click",".steps-anchor",function(event){ 
    var lang=event.target.dataset.lang;
    var query=event.target.dataset.query;

    if(!lang && !query){
        var targetId=$(this).attr("href");    
        $(window).scrollTo(targetId,400,{axis:'y'});

        $("li.step-active").removeClass("step-active");            
        $(this).parent().addClass("step-active");
    }
      
});


$(document).on("click",".category-select-menubtn",function(event){ 
    var subCategory=$(this).data("subcat");
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Tutorial Site-Selected Tutorials', {"subcategory":subCategory});
      /****End of Tracking*****/
    }
      
});

function h5Css(h5s){
    for(var i=0;i<h5s.length;++i){               
        $(h5s[i]).css({
           'font-weight' : 'bold',
           'font-size' :'18px'              
        });
    } 
}
function pCss(ps){
    for(var i=0;i<ps.length;++i){               
        $(ps[i]).css({                   
           'font-size' :'16px'              
        });
    } 
}

function h1Css(h1s){
    
    for(var i=0;i<h1s.length;++i){
        $(h1s[i]).css({
            'font-weight':'bold'
        }); 
        $(h1s[i]).addClass("step-section");

        if(i>0){
            $(h1s[i]).prepend("<hr class='step-divider'></hr>");
        }

        var txt=$(h1s[i]).text();
        var txtId=txt.replace(/\s+/g, ''); 
        $(h1s[i]).attr('id',txtId);                        

        if(i==0){
            var stepHtml='<li class="step-active">';
            currentStepHash=txtId;
        }else{
            var stepHtml='<li>';
        }                       
        stepHtml+='<a class="steps-anchor" href="#'+txtId+'">';
        stepHtml+='<span style="font-size:14px;">'+txt+'</span>';
        stepHtml+='</a>';
        stepHtml+='</li>';
        $(".steps-category-wrapper").append(stepHtml);     
        
    } 
    //var top  = $(document).scrollTop();
    //activateSection(top);    
}

function imgCss(imgs){
    for(var i=0;i<imgs.length;++i){               
        if($(imgs[i]).hasClass("full-length-img")){
            $(imgs[i]).css({
                'width':'100%'
            });

        }
        $(imgs[i]).css({
            'margin-top':'30px',
        });
        
        var replaceHtml='<div class="flex-general-row-wrapper-center">';
           replaceHtml+=imgs[i].outerHTML;
           replaceHtml+='</div>';
           replaceHtml+='<div class="flex-general-row-wrapper-center" style="margin-bottom:20px;">';
           replaceHtml+=$(imgs[i]).attr("alt");
           replaceHtml+='</div>'; 

        $(imgs[i]).replaceWith(replaceHtml);
    } 
}

function bQuoteCss(bquotess){
    for(var i=0;i<bquotess.length;++i){               
        
        /*if($(bquotess[i]).find("span").hasClass("tut-info")){
            $(bquotess[i]).addClass("tut-bquotes"); 
            var replaceHtml='<i class="fa fa-info-circle fa-lg"></i>';
            $(bquotess[i]).find("span.tut-info").replaceWith(replaceHtml);                   
        } */
        if($(bquotess[i]).find("span").hasClass("tut-info")){
            //$(bquotess[i]).addClass("tut-bquotes"); 
             var replaceHtml='';
            $(bquotess[i]).find("span.tut-info").replaceWith(replaceHtml); 
            

            var neoBlock='<div class="neo-snipper-wrapper">';
                neoBlock+='<div class="neo-info cf">';
                                neoBlock+='<div class="pull-left">';
                                neoBlock+='<i class="fa fa-info-circle fa-lg" style="color:blue;"></i>';
                                neoBlock+='</div>'; 
                                neoBlock+='<div class="pull-left">';
                                     neoBlock+='<span class="neo-tag">Info</span>';
                                neoBlock+='</div>';                   
                neoBlock+='</div>';
                neoBlock+='<div class="neo-info-content">';
                    neoBlock+=$(bquotess[i]).children().html();
                neoBlock+='</div>';                                            
            neoBlock+='</div>';  
            $(bquotess[i]).replaceWith(neoBlock);                         
        } 

        if($(bquotess[i]).find("span").hasClass("tut-warning")){      
        var replaceHtml='';
            $(bquotess[i]).find("span.tut-warning").replaceWith(replaceHtml);

            var neoBlock='<div class="neo-snipper-wrapper">';
                neoBlock+='<div class="neo-info cf">';
                                neoBlock+='<div class="pull-left">';
                                neoBlock+='<i class="fa fa-exclamation-triangle fa-lg" style="color:yellow;"></i>';
                                neoBlock+='</div>'; 
                                neoBlock+='<div class="pull-left">';
                                     neoBlock+='<span class="neo-tag">Warning</span>';
                                neoBlock+='</div>';                   
                neoBlock+='</div>';
                neoBlock+='<div class="neo-info-content">';
                    neoBlock+=$(bquotess[i]).children().html();
                neoBlock+='</div>';                                            
            neoBlock+='</div>';  
            $(bquotess[i]).replaceWith(neoBlock);                   
        } 

        if($(bquotess[i]).find("span").hasClass("tut-imp")){             
        var replaceHtml='';
            $(bquotess[i]).find("span.tut-warning").replaceWith(replaceHtml); 

            var neoBlock='<div class="neo-snipper-wrapper">';
                neoBlock+='<div class="neo-info cf">';
                                neoBlock+='<div class="pull-left">';
                                neoBlock+='<i class="fa fa-exclamation-triangle fa-lg" style="color:red;"></i>';
                                neoBlock+='</div>'; 
                                neoBlock+='<div class="pull-left">';
                                     neoBlock+='<span class="neo-tag">Important</span>';
                                neoBlock+='</div>';                   
                neoBlock+='</div>';
                neoBlock+='<div class="neo-info-content">';
                    neoBlock+=$(bquotess[i]).children().html();
                neoBlock+='</div>';                                            
            neoBlock+='</div>';  
            $(bquotess[i]).replaceWith(neoBlock);                  
        }              
    } 
}

function spanCss(spans){
    var codeBlock;
    for(var i=0;i<spans.length;++i){  
        if((codeBlock && codeBlock.attr("class")!=spans[i].className && spans[i].className!="tut-snippet") || !codeBlock ) {

            var jsLines=$(spans[i]).hasClass("js-lines");
            var nodejsLines=$(spans[i]).hasClass("nodejs-lines");
            var javaLines=$(spans[i]).hasClass("java-lines");
            var dotNetLines=$(spans[i]).hasClass("dotnet-lines"); 
            var iosLines=$(spans[i]).hasClass("ios-lines");
            var rubyLines=$(spans[i]).hasClass("ruby-lines");
            var iotLines=$(spans[i]).hasClass("iot-lines"); 
            var xmlLines=$(spans[i]).hasClass("xml-lines"); 
            var curlLines=$(spans[i]).hasClass("curl-lines");        
            
            if(jsLines || nodejsLines || javaLines || dotNetLines || iosLines || rubyLines || iotLines || xmlLines || curlLines){
                var langHead="";
                var langCode="";
                codeBlock=$(spans[i]).parent().next().find("span");

                var widgetHtml='<div class="code-widget">';     
                    widgetHtml+='<div class="code-lang-head flex-general-row-wrapper-center">';
                    widgetHtml+='<span style="color:black;font-size:14px;">';
                    widgetHtml+='Code';  
                    widgetHtml+='</span>'; 
                    widgetHtml+='</div>';           
                    widgetHtml+='<div class="code-lang-wrapper">';
                
                //Javacsript
                if(jsLines){
                    var res=bindLangCode("js","Javascript",spans[i]);
                    langHead+=res.html;
                    langCode+=res.codeHtml;             
                }
                //Nodejs
                if(nodejsLines){
                    var res=bindLangCode("nodejs","NodeJS",spans[i]);
                    langHead+=res.html;
                    langCode+=res.codeHtml;             
                }
                //Java
                if(javaLines){
                    var res=bindLangCode("java","Java / Andriod",spans[i]); 
                    langHead+=res.html;
                    langCode+=res.codeHtml;            
                }
                //.Net
                if(dotNetLines){
                    var res=bindLangCode("dotnet",".NET",spans[i]);
                    langHead+=res.html;
                    langCode+=res.codeHtml;             
                }
                //IOS
                if(iosLines){
                    var res=bindLangCode("ios","iOS",spans[i]);
                    langHead+=res.html;
                    langCode+=res.codeHtml;             
                } 
                //Ruby
                if(rubyLines){
                    var res=bindLangCode("ruby","Ruby",spans[i]);
                    langHead+=res.html;
                    langCode+=res.codeHtml;             
                }
                //IOT
                if(iotLines){
                    var res=bindLangCode("iot","IOT",spans[i]); 
                    langHead+=res.html;
                    langCode+=res.codeHtml;            
                }
                //XML
                if(xmlLines){
                    var res=bindLangCode("xml","XML",spans[i]); 
                    langHead+=res.html;
                    langCode+=res.codeHtml;            
                } 
                //CURL
                if(curlLines){
                    var res=bindLangCode("curl","cURL",spans[i]); 
                    langHead+=res.html;
                    langCode+=res.codeHtml;            
                }             
              
                //Check Next Lang Emls
                (function checkNxt(elm){
                        var nxtJsLines=$(elm).parent().next().find("span").hasClass("js-lines");
                        var nxtNodejsLines=$(elm).parent().next().find("span").hasClass("nodejs-lines");
                        var nxtJavaLines=$(elm).parent().next().find("span").hasClass("java-lines");
                        var nxtDotNetLines=$(elm).parent().next().find("span").hasClass("dotnet-lines");
                        var nxtIosLines=$(elm).parent().next().find("span").hasClass("ios-lines");
                        var nxtRubyLines=$(elm).parent().next().find("span").hasClass("ruby-lines");
                        var nxtIotLines=$(elm).parent().next().find("span").hasClass("iot-lines");
                        var nxtXmlLines=$(elm).parent().next().find("span").hasClass("xml-lines");
                        var nxtCurlLines=$(elm).parent().next().find("span").hasClass("curl-lines");

                        var mainElm=$(elm).parent().next().find("span");
                        if(nxtJsLines){
                            var res=bindLangCode("js","Javascript",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }
                        if(nxtNodejsLines){
                            var res=bindLangCode("nodejs","NodeJS",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }
                        if(nxtJavaLines){
                            var res=bindLangCode("java","Java / Andriod",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();                  
                        }
                        if(nxtDotNetLines){
                            var res=bindLangCode("dotnet",".NET",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }

                        if(nxtIosLines){
                            var res=bindLangCode("ios","iOS",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }

                        if(nxtRubyLines){
                            var res=bindLangCode("ruby","Ruby",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }
                        if(nxtIotLines){
                            var res=bindLangCode("iot","IOT",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }

                        if(nxtXmlLines){
                            var res=bindLangCode("xml","XML",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }
                        if(nxtCurlLines){
                            var res=bindLangCode("curl","cURL",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }

                })(spans[i]);  

                //Check Previous Lang Emls
                (function PrevNxt(elm){
                        var nxtJsLines=$(elm).parent().prev().find("span").hasClass("js-lines");
                        var nxtNodejsLines=$(elm).parent().prev().find("span").hasClass("nodejs-lines");
                        var nxtJavaLines=$(elm).parent().prev().find("span").hasClass("java-lines");
                        var nxtDotNetLines=$(elm).parent().prev().find("span").hasClass("dotnet-lines");
                        var nxtIosLines=$(elm).parent().prev().find("span").hasClass("ios-lines");
                        var nxtRubyLines=$(elm).parent().prev().find("span").hasClass("ruby-lines");
                        var nxtIotLines=$(elm).parent().prev().find("span").hasClass("iot-lines");
                        var nxtXmlLines=$(elm).parent().prev().find("span").hasClass("xml-lines");
                        var nxtCurlLines=$(elm).parent().prev().find("span").hasClass("curl-lines");

                        var mainElm=$(elm).parent().prev().find("span");
                        if(nxtJsLines){
                            var res=bindLangCode("js","Javascript",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }
                        if(nxtNodejsLines){
                            var res=bindLangCode("nodejs","NodeJS",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }
                        if(nxtJavaLines){
                            var res=bindLangCode("java","Java / Andriod",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm); 
                            $(elm).parent().prev().remove();                   
                        }
                        if(nxtDotNetLines){
                            var res=bindLangCode("dotnet",".NET",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }

                        if(nxtIosLines){
                            var res=bindLangCode("ios","iOS",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }

                        if(nxtRubyLines){
                            var res=bindLangCode("ruby","Ruby",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }
                        if(nxtIotLines){
                            var res=bindLangCode("iot","IOT",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            PrevNxt(mainElm);
                            $(elm).parent().prev().remove();
                        }
                        if(nxtXmlLines){
                            var res=bindLangCode("xml","XML",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }
                        if(nxtCurlLines){
                            var res=bindLangCode("curl","cURL",mainElm);
                            langHead+=res.html;
                            langCode+=res.codeHtml;

                            //Recursive call
                            checkNxt(mainElm);
                            $(elm).parent().next().remove();
                        }

                })(spans[i]);     
                
                widgetHtml+=langHead;
                widgetHtml+='</div>';
                widgetHtml+=langCode;
                widgetHtml+='</div>'; 
                
                $(spans[i]).parent().replaceWith(widgetHtml); 
                                                        
            }

            //Snippets
            if(spans[i].className=="tut-snippet"){
                var replaceHtml='<code class="tut-snippet-mod">'+$(spans[i]).text()+'</code>';
                $(spans[i]).replaceWith(replaceHtml);
            }

        }
        
    } 
}

function bindLangCode(shortName,fullName,rootTag){
    var query=$(rootTag).data("query");

    var jsHtml='<div class="pull-left solo-horizontal-center languageHeader '+shortName+'" data-lang="'+shortName+'" data-query="'+query+'">'; 
        jsHtml+=fullName;                              
        jsHtml+='</div>';

    var code=$(rootTag).find("code").text();
    var jsCodeHtml='<div class="code-wrapper-'+shortName+' code-snipper-wrapper">';       
        jsCodeHtml+='<textarea class="code-'+shortName+'-'+query+'" disabled="true">';
        jsCodeHtml+=code;
        jsCodeHtml+='</textarea>';
        jsCodeHtml+='</div>'; 

    var respObj={}; 
    respObj.html=jsHtml;
    respObj.codeHtml=jsCodeHtml;

    return respObj;
}    


       