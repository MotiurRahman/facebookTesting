// Don't forget to set your requested permissions, else the login button won't be effective.
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

win.open();

var fb = require('facebook');

fb.initialize();

// Create a Button.
var share = Ti.UI.createButton({
	title : 'Share',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,

});

// Add to the parent view.
win.add(share);

var webLink = "https://play.google.com/store/apps/details?id=com.bd.PasswordManager";

// Listen for click events.
share.addEventListener('click', function() {
	fb.presentShareDialog({
		link : webLink,
		//title : title,
		description : 'Password Manager is a great password saving App.',
		picture : 'http://oi65.tinypic.com/mii974.jpg',
		mode : fb.SHARE_DIALOG_MODE_AUTOMATIC

	});

});

fb.addEventListener('shareCompleted', function(e) {
	if (e.success) {
		Ti.API.info('Share request succeeded.');
	} else {
		Ti.API.info('Failed to share.');
	}
});

