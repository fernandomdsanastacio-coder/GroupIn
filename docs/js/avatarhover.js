const avatar = document.getElementById("avatar");
const tooltip = document.getElementById("usernameTooltip");

if(avatar){

    avatar.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
    });

    avatar.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

}