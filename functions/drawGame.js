import responsiveCanvas from "./responsiveCanvas.js";


function drawGame() {
    responsiveCanvas();
    // Configuration du canvas
    const prohibitedColors = ["#139d08", "#aE6c37"];
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    // Images
    const mapImage = new Image();
    mapImage.src = "./imageOfMap/map.png";

    const turgutImage = new Image();
    turgutImage.src = "./imagesOfTurgut/sprite01.png";

    // Position et taille de l'image
    let turgutX = 120;
    let turgutY = 110;
    const turgutWidth = 16;
    const turgutHeight = 16;
    const turgutSpeed = 3;

    // Fonction pour dessiner l'image
    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mapImage, 0, 0, mapImage.width, mapImage.height);
        ctx.drawImage(turgutImage, turgutX, turgutY, turgutWidth, turgutHeight);
    }

    function checkColorCollision() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;

        const turgutImageData = ctx.getImageData(turgutX, turgutY, turgutWidth, turgutHeight);
        const turgutPixels = turgutImageData.data;

        for (let i = 0; i < turgutPixels.length; i += 4) {
            const pixelColor = `#${turgutPixels[i].toString(16).padStart(2, '0')}${turgutPixels[i + 1].toString(16).padStart(2, '0')}${turgutPixels[i + 2].toString(16).padStart(2, '0')}`;
            if (prohibitedColors.includes(pixelColor)) {
                console.log(`Collision avec la couleur : ${pixelColor}`);
                break;
            }
        }
    }
    checkColorCollision();
    // Écouteur d'événement clavier
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                turgutX -= turgutSpeed;
                break;
            case "ArrowRight":
                turgutX += turgutSpeed;
                break;
            case "ArrowUp":
                turgutY -= turgutSpeed;
                break;
            case "ArrowDown":
                turgutY += turgutSpeed;
                break;
        }
        drawImage();

    });

    // Écouteur d'événement de la manette de jeu
    window.addEventListener("gamepadconnected", (e) => {
        let xAxis = 0; // Stocke la valeur de l'axe horizontal
        let yAxis = 0; // Stocke la valeur de l'axe vertical

        setInterval(() => {
            const gp = navigator.getGamepads()[0];
            const axe1 = gp.axes[0];
            const axe2 = gp.axes[1];
            const axe3 = gp.axes[3];
            const axe4 = gp.axes[2];
            // Appliquer les mouvements à la position de l'image
            turgutX += xAxis * turgutSpeed;
            turgutY += yAxis * turgutSpeed;
            // ... --------------------------->Gérer les boutons de la manette
            // ... --------------------------->Axe droite
            // Gérer les mouvements horizontaux
            if (axe1 >= 0.7) {
                xAxis = 1; // Droite
            } else if (axe1 <= -0.7) {
                xAxis = -1; // Gauche
            } else {
                xAxis = 0; // Aucun mouvement horizontal
            }
            // Gérer les mouvements verticaux
            if (axe2 >= 0.7) {
                yAxis = 1; // Bas
            } else if (axe2 <= -0.7) {
                yAxis = -1; // Haut
            } else {
                yAxis = 0; // Aucun mouvement vertical
            }

            drawImage(); // Redessiner l'image
            checkColorCollision();

        }, 100);
    });
}
export default drawGame;

