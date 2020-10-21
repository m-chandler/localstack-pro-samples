module.exports.handler = function(event, context, callback) {
	console.log('lambda event (action-one):', event, callback, context);
	if(callback) {
		  callback(null, JSON.stringify({'handledBy': 'action-one', 'event': event}));
	  } else {
		  context.succeed(JSON.stringify({'handledBy': 'action-one', 'event': event}));
	  }
  };
  