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
	// serverURL="https://service.cloudboost.io";	
	dashboardURL = "http://localhost:1440";
	signUpURL="http://localhost:1440/accounts/#/signup";
	loginURL="http://localhost:1440/accounts";
	thisURL="http://localhost:1446";
}else{
	serverURL="https://service.cloudboost.io";	
	dashboardURL = "https://dashboard.cloudboost.io";
	signUpURL="https://dashboard.cloudboost.io/accounts/#/signup";	
	loginURL="https://dashboard.cloudboost.io/accounts";
	thisURL="https://tutorials.cloudboost.io";
}
console.log(serverURL, dashboardURL)