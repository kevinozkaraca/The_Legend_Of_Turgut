import keyDown from "./functions/keyDown.js";
import keyUp from "./functions/keyUp.js";
import turgutCamera from "./functions/cameraOnTurgut.js";
import socketIo from "./functions/socketIO.js";

const turgut = document.querySelector("#turgut");
turgut.style.left = "900px";
turgut.style.top = "420px";
const prohibitedColors = ["#3d34a5", "#a8a8a8", "#7b7b7b", "#139d08", "#c5324f", "#000000", "#823c3d", "#aE6c37"];
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const map = document.querySelector("#map");
map.src = "./imageOfMap/map.png";
ctx.imageSmoothingEnabled = false;
let fps = 30;
// Déplacement de Turgut
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
socketIo();
// Fonction d'affichage du jeu
function draw() {
    setTimeout(function () {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        turgutCamera();

    }, 1000 / fps);
}
draw();




