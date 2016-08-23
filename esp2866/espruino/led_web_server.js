E.on('init', function() {
    function onPageRequest(req, res) {
        var a = url.parse(req.url, true),
          LED = NodeMCU.D4;  // onboard LED on NodeMCU board

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body>');
        res.write('<a href="?led=0">on</a><br/><a href="?led=1">off</a>');
        res.end('</body></html>');
        if (a.query && "led" in a.query) {
            switch (a.query.led) {
                case '0':
                    on(LED);
                    break;
                case '1':
                    off(LED);
                    break;
            }
        }

    }
    require("http").createServer(onPageRequest).listen(8080);
});

function on(LED) {
    digitalWrite(LED, false);
    print("on");
}

function off(LED) {
    digitalWrite(LED, true);
    print("off");

}
