window.onload = function(){
    var messages = [];
    var socket = io.connect('http://localhost:3700');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on('message', function(data){ // si resta in ascolto di un messaggio in arrivo dal server
        if(data.message){
            messages.push(data.message);
            var html='';
            for(var i=0; i<messages.length;i++){ // raccoglie i messaggi in un array
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        }else{
            console.log("Errore:", data);
        }
    });
// la funzione invia il messaggio al server una volta cliccato il bottone
    sendButton.onclick = function(){ 
        var text = field.value; // text = valore dell'elemento con id= field
        socket.emit('send', {message: text});
    };
}