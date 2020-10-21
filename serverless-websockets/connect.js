module.exports.handler = function(event, context, callback) {
	console.log('lambda event (connect):', event, callback, context);
	if(callback) {
		  callback(null, JSON.stringify({'handledBy': 'connect', 'event': event}));
	  } else {
		  context.succeed(JSON.stringify({'handledBy': 'connect', 'event': event}));
	  }
  };
  