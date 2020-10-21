module.exports.handler = function(event, context, callback) {
	console.log('lambda event (default):', event, callback, context);
	if(callback) {
		  callback(null, JSON.stringify({'handledBy': 'default', 'event': event}));
	  } else {
		  context.succeed(JSON.stringify({'handledBy': 'default', 'event': event}));
	  }
  };
  