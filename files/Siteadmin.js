module.exports = (function () {
	document.getElementById('someButton').addEventListener('click', function () {
		require.ensure(['LoadMeAsync.js'], function () {
			var x = require('LoadMeAsync.js');
			alert(x);
		});
	});

	document.getElementById('output').innerHTML = 'Siteadmin.js loaded';
})();
