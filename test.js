// passggio di var tra due funzioni
function a(){ // a() è la funzione principale
    var str = "first"; // str dichiarata e inizializzata
    b(str); // str viene passata a b
}
function b(b){ // qui str come qualsiasi altra var prende il nome di b
    var concat = b + " second"; // b viene unita ad una stringa e asseganata a concat
    alert(concat); // concat viene mostrata a video
}
// qual'è la differenza ? 
// "var" b da sola non ha valore e per questo che quando si stampa esce:
// undefined second
// mentre str è stata dichiarata e inizializzata e quindi stampandola ha valore
// viene mostrato il suo valore : first