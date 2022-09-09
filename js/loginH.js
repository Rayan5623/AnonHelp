function check(){
        var email= document.getElementById("email").value;
        var passw= document.getElementById("passw").value;

        if(email=="" || passw==""){
            alert("Inserire email e password");
        }else if(email!=null){
            alert(email);
            alert(passw); // prende entrambi i valori
            if(passw=="Alberto"){
                window.open("https://rayan5623.github.io/AnonHelp/dashboard.html");
// in teoria bisogna avere uno script js o php che faccia 
//il lavoro sporco di interfacciarsi con mongo db
// verificare che la password generata dallo script in php risulti sul database e permettere l'accesso in dashboard


            }
        }
    }
