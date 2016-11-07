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

app.intent('listOpportunities', {
    'slots': {},
    'utterances': [ '{list opportunities|new opportunities|opportunities}' ]
    },
    function(req, res) {
        res.say('OK, the latest 4 opportunities are: 1. Customer Journey and CRM Consultant from NHS Property Services in Digital specialists. 2. Business Analyst for Qualifications Wales’ Data Collection and Statistical Publications Project from Qualifications Wales in Digital specialists. 3. Design Manual for Roads and Bridges (DMRB) Agile Methodology Application from Highways England in Digital outcomes and 4. ITS Cloud Application Developer (8) from Driver and Vehicle licensing Agency in Digital specialists. Do you want to hear more from opportunity 1, 2, 3 or 4?').shouldEndSession(true);
        return true;
    }
);

app.intent('readOpportunity', {
    'slots': {},
    'utterances': [ '{read four|open opportunity four}' ]
    },
    function(req, res) {
        res.say('Customer Journey and CRM Consultant from NHS Property Services located in London. DVLA Software Engineering Capability is looking for highly skilled developers to undertake the development and support of DVLA’s applications both internal and public/customer facing. This opportunity closes Monday 14 November 2016. Visit the Digital Marketplace to apply.').shouldEndSession(true);
        return true;
    }
);

module.exports = app;

