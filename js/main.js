function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


let modeBtn = document.getElementById("dark-light");
    modeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});