module.exports.handler = function(event, context, callback) {
  console.log('lambda event (action-two):', event, callback, context);
  if(callback) {
		callback(null, JSON.stringify({'handledBy': 'action-two', 'event': event}));
	} else {
		context.succeed(JSON.stringify({'handledBy': 'action-two', 'event': event}));
	}
};
