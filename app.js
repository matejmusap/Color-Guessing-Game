var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3000;
    
app.use(express.static(__dirname));
    
app.get("/", function(req, res) {
    res.redirect("/color-guessing-game");
});

app.get("/color-guessing-game", function(req, res){
    res.sendFile(__dirname + "/cgg.html");
});

app.listen(port, function() {
    console.log("Server has started at " + port);
});