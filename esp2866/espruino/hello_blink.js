E.on('init', function() {

    var led = new Pin(2);
    var toggle = true;

    setInterval(function() {
        toggle = !toggle;
        digitalWrite(led, toggle);
    }, 1000);

});
