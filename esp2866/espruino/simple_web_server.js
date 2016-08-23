E.on('init', function() {
    var http = require("http");

    function server() {
        http.createServer(function(req, res) {
            res.writeHead(200);
            res.end("Hello World");
        }).listen(8080);
    }
});
