E.on('init', function() {

    var led = NodeMCU.D4;  // onboard LED on NodeMCU board
    var toggle = true;

    setInterval(function() {
        toggle = !toggle;
        digitalWrite(led, toggle);
    }, 1000);

});
