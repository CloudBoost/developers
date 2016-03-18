
global.isStaging = false;
if (!process.env.PORT) {
    global.isDevelopment = true;
} else {
    if (process.env.PORT === "1446") {
        global.isDevelopment = true;
    } else {
        global.isDevelopment = false;
    }
}
if(process.env.CBENV && process.env.CBENV === 'STAGING'){
    global.isStaging = true;
}
global.isVM = false;
var app = require('./app')();

app.set('port', process.env.PORT || 1446);
var server = app.listen(app.get('port'), function() {
	console.log("CBTutorials started running on port:"+app.get('port'));
});