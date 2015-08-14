var http = require('http');

var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

http.createServer(function(req, res) {
  proxy.web(req, res, 
  { 
	target: 'http://a0.jimstatic.dev',
	changeOrigin: true
  }
);
}).listen(8003);
