function getuser(user){
        
       // document.getElementById("prova").innerHTML = {user};
        var user = document.getElementById("user").value;
        if(user==null){
        user = "Anonymous";
        alert(user);
        window.open("./chat.html");
        }else if(user!=null){
            alert(user);
            window.open("./chat.html");
        }
       //alert(document.getElementById("user").value); .value -> è usato per restituire il valore contenuto nell'input "username"
       return user;

    }
