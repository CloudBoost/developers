var __isDevelopment = false;

if(window.location.host.indexOf('localhost') > -1){
	__isDevelopment = true;
}

var serverURL = null, dashboardURL = null;
var signUpURL = '';
var loginURL = '';
var thisURL = '';


if(__isDevelopment){
	serverURL="http://localhost:3000";	
	dashboardURL = "http://localhost:1440";
	signUpURL="http://localhost:1440/accounts/#/signup";
	loginURL="http://localhost:1440/accounts";
	thisURL="http://localhost:1446";
}else{
	serverURL="https://cloudboost.io/api/";	
	dashboardURL = "https://cloudboost.io/dashboard/";
	signUpURL="https://cloudboost.io/accounts/signup";	
	loginURL="https://cloudboost.io/accounts/";
	thisURL="https://tutorials.cloudboost.io/";
}