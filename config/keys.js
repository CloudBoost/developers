module.exports = {
	frontendServerUrl : global.isVM?'https://service.cloudboost.io':(global.isDevelopment ? 'https://service.cloudboost.io' : 'https://service.cloudboost.io'),
	thisServerUrl : global.isVM?'https://service.cloudboost.io':(global.isDevelopment ? 'http://localhost:1446' : 'https://service.cloudboost.io')		
};
