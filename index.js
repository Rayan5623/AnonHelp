// applicazione expressJs
var express = require("express"); // richiamo il package express in modo da poterlo usare
var app = express(); // app è un ogetto ritornato dalla funzione express()
var port = 3700; // porta in ascolto

app.set('views', __dirname + '/template');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
// viene definita la route, in questo caso coincide con la root della cartella del progetto
app.get("/",function(req,res){
    res.render("page"); //renderizza il file Jade, lo trasforma in HTML e lo invia in output
});
// richiamo la libreroa socket.io e la metto in attesa sulla porta indicata 
const Server = require('socket.io');
const io = new Server(port);
console.log("Server in ascolto sulla porta " + port)

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Benvenuto in chat'});
    socket.on('send', function(data){
        io.sockets.emit('message', data);
    });
});