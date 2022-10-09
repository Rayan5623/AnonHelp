// guida ufficiale socket.io: https://socket.io/get-started/chat
const express = require('express');
const app = express();
const http = require('http');
// viene inizializzata app in modo che possa fornire un server HTTP
const server = http.createServer(app);
const { Server } = require("socket.io");
// creo una nuova istanza di socket.io passando l'oggetto HTTP drrv
const io = new Server(server); 

app.get('/',(req,res)=>{
// con res.sendFile e "servire" index.html invece di scrivere tutto l'HTML tra le parentesi
    res.sendFile(__dirname + '/socketChat.html');
});


// rimango in ascolto sull'evento connection per un socket in entrata e loggo sulla console
// per la disconnessione ??
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

// Broadcasting metodo io.emit()
// questo emetterà l'evento a tutti gli utenti connessi
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

// chat message event
// per inviare il messaggio a tutti tranne a chi l'ha emesso bisogna modificare questo evento
// applicando il flag 'broadcast'
io.on('connection', (socket) =>{
    socket.on('chat message', (msg) =>{
        io.emit('chat message', msg);
    });
});

io.sockets.on('connection', function(socket){
    socket.on('create',function(room){
        socket.join(room);
    });
});

server.listen(3000, ()=>{
    console.log('listening on *:3000');
});
//funzia tutto, guida finisce così
// studiare miglioroie

// socket.io è composto da:
// un server che monta NOdeJs Http server
// una libreria client che emula il browser side
// durante lo sviluppo socket.io "serve" il client automaticamente 

//https://stackoverflow.com/questions/62196729/socket-io-client-server-unicast-channels-how-to-implement-them
// questo tipo su stackoverflow che ha pensato
// le chat one-to-one come stanze(rooms) con un id = nome_utente
// in modo che i messaggi in broadcast sono inviati solo all'utente connesso e al mittente
// così ogni utente ha la sua stanza
// secondo questo sistema l'helper dalla dashboard cliccando sull'utente "libero", 
// può creare una chat con solo l'utente dentro


