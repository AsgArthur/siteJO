function openMenu() {
    document.getElementById("sideMenu").style.width = "25%";
    document.getElementById("overlay").style.display = "block"; // Affiche l'overlay
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Masque l'overlay
}