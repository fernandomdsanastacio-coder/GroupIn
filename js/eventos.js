document.addEventListener("DOMContentLoaded", function(){

const user = JSON.parse(localStorage.getItem("user"));

if(!user){
    alert("Precisas de fazer login.");
    window.location.href = "conta/conta.html";
    return;
}

const avatar = document.getElementById("avatar");
const tooltip = document.getElementById("usernameTooltip");

if(user){

    if(tooltip){
        tooltip.textContent = user.username;
    }

}

});