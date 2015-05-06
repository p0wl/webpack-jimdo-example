module.exports = (function () {
	document.getElementById('someButton').addEventListener('click', function () {
		require.ensure(['../files/LoadMeAsync.js'], function () {
			var x = require('../files/LoadMeAsync.js');
			alert(x);
		});
	});

	document.getElementById('output').innerHTML = 'Siteadmin.js loaded';
})();
