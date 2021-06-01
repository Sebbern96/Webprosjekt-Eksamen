 //Funksjon til å få brukernavn og passord, som hvis er fører brukeren til neste side hvis ikke kalles det  på en aleart 

 function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
if(username == "admin" && password == "123"){

    return true 
    
 } 
 else
{
    alert("Brukeren eksisterer ikke");
    return false;
}
}

//Funksjon for å kunne se passord etter å ha klikket checkbox og får passordet til å bli usynlig på nytt etter å ha klikket inn checkboxen igjen

function showPassword(){
var check = document.getElementById("check").checked;
var passwordCheck = document.getElementById("password");
if(check == true ){
    passwordCheck.setAttribute("type", "text");

} 
else
{
 password.setAttribute("type", "password");
}
}