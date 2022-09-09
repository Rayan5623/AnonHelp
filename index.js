// applicazione expressJs
var express = require("express"); // richiamo il package express in modo da poterlo usare
var app = express(); // app è un ogetto ritornato dalla funzione express()
var port = 3700; // porta in ascolto

app.set('views', __dirname + '/template');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/",function(req,res){
    res.render("page"); //renderizza il file Jade, lo trasforma in HTML e lo invia in output
});

app.listen(port);
console.log("Server in ascolto sulla porta " + port)