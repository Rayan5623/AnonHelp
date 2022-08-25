// fonte: https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) { // crea il cookie
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) { // ritorna il valore del cookie
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(u) { // verifica se il cookie è stato settato, il controllo del cookie avviene in questa funzione
    //let user = getCookie("username");
    if (u != "") {
      alert("Welcome again " + u);
    } else {
      //user = prompt("Please enter your name:", "");
      if (u != "" && u != null) {
        setCookie("username", u, 365);
      }
    }
    window.open("./chat.html");
  } 

  function dioUser(){
    let user = document.getElementById("user").value;
    checkCookie(user);
  }