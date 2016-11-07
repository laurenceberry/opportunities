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
        res.say('There are 3 new opportunities today do you want to hear more?').shouldEndSession(false);
        
        return true;
    }
);

app.intent('listOpportunities', {
    'slots': {},
    'utterances': [ '{list opportunities|new opportunities|opportunities}' ]
    },
    function(req, res) {
        res.say('OK, the latest 3 opportunities are: 1. Customer Journey and CRM Consultant from NHS Property Services in Digital specialists. 2. Business Analyst for Qualifications Wales’ Data Collection and Statistical Publications Project from Qualifications Wales in Digital specialists. 3. Design Manual for Roads and Bridges Agile Methodology Application from Highways England in Digital outcomes. Do you want to hear more from opportunity 1, 2, or 3?').shouldEndSession(true);
        return true;
    }
);

app.intent('readOpportunity', {
    'slots': {},
    'utterances': [ '{read three|open opportunity three}' ]
    },
    function(req, res) {
        res.say('Design Manual for Roads and Bridges Agile Methodology Application from Highways England located in South West England. This project will have an initial discovery phase to allow for full definition of user stories and system requirements to be determined. The overall desired outcome of the project will be a working pilot system and a Highways England team capable of applying agile practices to their backlog of tasks. This opportunity closes Monday 14 November 2016. Visit the Digital Marketplace to apply.').shouldEndSession(true);
        return true;
    }
);

module.exports = app;

