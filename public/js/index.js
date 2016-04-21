//Code Block
var codeMirrorEnabled = [];
var codeTabSelected = 'js';


$(document).on("click",function(event){  
    //event.preventDefault();
    var lang=event.target.dataset.lang;
    var query=event.target.dataset.query;
    if(lang  && query){
        languageClick(lang,query); 
    }           
       
});      

var languageClick = function(lang,query){
    codeTabSelected = lang;
    hideAndDisableCode();                 
    
    $('.'+lang).addClass('languageHeader-active');
    $('.code-wrapper-'+codeTabSelected).show();
    initCodeEditors( ['code-'+codeTabSelected+'-'+query] );           
};      

function initCodeEditors(arr){
    var codeEditors = arr;

    for(var i=0;i<codeEditors.length; i++){

        if($("."+codeEditors[i])[0] && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

            var myCodeMirror = CodeMirror.fromTextArea($("."+codeEditors[i])[0],{
                mode:  "javascript",
                readOnly : true,
                lineNumbers: true
            });
            
            codeMirrorEnabled.push(codeEditors[i]);
        }
        
    }
  
}

function enableCodeWidget(lang,query){
    hideAndDisableCode();
    //var progLangs=["js","nodejs","java","dotnet","ios","iot","ruby"];

    $('.'+lang).addClass('languageHeader-active'); 
    $('.code-wrapper-'+lang).show(); 
  
    var widget=$(".code-"+lang+"-"+query)[0];
    var className="code-"+lang+"-"+query;
    if(widget && codeMirrorEnabled.indexOf(className) === -1){
  
        var myCodeMirror = CodeMirror.fromTextArea(widget,{
            mode:  "javascript",
            readOnly : true,
            lineNumbers: true
        }); 
        codeMirrorEnabled.push(className);               
    }

}
var hideAndDisableCode = function(){
    //Hide
    $('.code-wrapper-js').hide();
    $('.code-wrapper-nodejs').hide();
    $('.code-wrapper-java').hide();
    $('.code-wrapper-dotnet').hide();
    $('.code-wrapper-ios').hide();
    $('.code-wrapper-ruby').hide();
    $('.code-wrapper-iot').hide();
    $('.code-wrapper-xml').hide();
    $('.code-wrapper-curl').hide();

    //Disable Active            
    $('.js').removeClass('languageHeader-active'); 
    $('.java').removeClass('languageHeader-active'); 
    $('.nodejs').removeClass('languageHeader-active'); 
    $('.dotnet').removeClass('languageHeader-active'); 
    $('.ios').removeClass('languageHeader-active'); 
    $('.ruby').removeClass('languageHeader-active'); 
    $('.iot').removeClass('languageHeader-active'); 
    $('.xml').removeClass('languageHeader-active'); 
    $('.curl').removeClass('languageHeader-active');          
};      

$(document).scroll(function () {
    var top  = $(this).scrollTop();
    activateSection(top);           
});  

function activateSection(top){
    $('.step-section').each(function () {
        //var top = window.pageYOffset;
        
        var distance = top - $(this).offset().top;
        var hash = $(this).attr('id');

        if (distance < 30 && distance > -30 && currentStepHash != hash) {
            $("li.step-active").removeClass("step-active");
        $(".steps-category-wrapper").find("a[href=#"+hash+"]").parent().addClass("step-active");

            currentStepHash = hash;
        }
    });
}

$("#page-wrapper").click(function(event){
    if(!$(event.target).hasClass("navbar-minimalize")){
        $("body").addClass("mini-navbar");
        //$(".navbar-minimalize").toggleClass("menu-doorkey");
        //SmoothlyMenu();
        $(".togglemenu-tut-wrapper").hide();
    }
    
});
$(".togglemenu-tut-wrapper").click(function(event){
    if(!$(event.target).hasClass("navbar-minimalize")){
        $("body").addClass("mini-navbar");
        //$(".navbar-minimalize").toggleClass("menu-doorkey");
        //SmoothlyMenu();                
        $(".togglemenu-tut-wrapper").hide();
    }
    
});
