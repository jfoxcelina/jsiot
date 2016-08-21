E.on('init', function() {

    var led = new Pin(2); // pin 2 is the onboard LED on my boards, it may be different pin on yours.
    var toggle = true;

    setInterval(function() {
        toggle = !toggle;
        digitalWrite(led, toggle);
    }, 1000);

});
