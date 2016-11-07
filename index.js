module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'opportunities' );


app.launch( function( request, response ) {
	response.say( 'Welcome to Marketplace' ).reprompt( 'You can ask me to list opportunities' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('countOpportunities', {
    'slots': {},
    'utterances': [ '{how many new opportunities are there today}' ]
    },
    function(req, res) {
        res.say('There are 4 new opportunities today').shouldEndSession(true);
        
        return true;
    }
);

module.exports = app;

