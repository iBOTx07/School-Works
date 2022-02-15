var express = require("Express");

var app = express();



app.get("/", function(request, response){
    response.send("Hello, my name is Raymond Joseph P. Galupe and from section WD-202.");
});

app. listen(3000, function(){
     console.log ('Server running at http://localhost:3000');
});