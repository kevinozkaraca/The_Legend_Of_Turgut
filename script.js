import responsiveCanvas from "./functions/responsiveCanvas.js";
import drawGame from "./functions/drawGame.js";
import responsiveJoystick from "./functions/responsiveJoystick.js";
import animationOfResponsiveJoystick from "./functions/animationOfResponsiveJoystick.js";
import drawTurgut from "./functions/drawGame.js";

const prohibitedColors = ["#3d34a5", "#a8a8a8", "#7b7b7b", "#139d08", "#c5324f", "#000000", "#823c3d", "#aE6c37"];
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let fps = 60;
// Déplacement de Turgut
const body = document.querySelector("body");
// redimensionnement du canvas
window.addEventListener('resize', draw);
// Fonction d'affichage du jeu
function draw() {
    // Fonction qui n'ont pas besoin d'être redessinées
    responsiveCanvas();
    responsiveJoystick();
    // Fonction qui ont besoin d'être redessinées
    setTimeout(function () {
        drawTurgut();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationOfResponsiveJoystick();
    }, 1000 / fps);

}
draw();




