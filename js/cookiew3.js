// come usare le funzioni, in home ad esempio la scrivi e nel campo degli attributi scrivi quello che ci va es video sul tubo:
//(visto sul tablet, aggiunto in anonhelp)
// esempio: setCookie(user, "Mario", 1)

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
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
  
  function checkCookie() {
    
      var user = getCookie("username");
      if (user != "") {
        alert("Bentornato " + user);
      } else {
        user = prompt("Scegli un username:", "");
        if (user != "" || user != null) {
          setCookie("username", user, 365);
        }else if (user == "" || user == null){
          user == "Anonymus";
          setCookie("username", user, 365);
        }
        if (user=="Anonymus" || user != null){
          window.open("./chat.html");
        }
      }
  } 
// adesso accetta anche i cookie in bianco con user= null 
  //setCookie("username", "potato", 1)

function checkCookie1(){
  while(user !="Anonymus" || user !=null){

  }
}