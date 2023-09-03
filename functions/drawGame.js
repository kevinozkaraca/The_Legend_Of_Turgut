import responsiveCanvas from "./responsiveCanvas.js";
function drawGame() {
    responsiveCanvas();
    console.log("fonctionDraw");
    // Get the canvas element and its context.
    let canvas = document.getElementById("canvas");
    // Make the image look pixelated.
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    // image map
    let mapImage = new Image();
    mapImage.src = "./imageOfMap/map.png";
    // Load the image.
    let turgutImage = new Image();
    turgutImage.src = "./imagesOfTurgut/sprite01.png";
    // Initial position of the image.
    let turgutX = 120;
    let turgutY = 110;
    let turgutWidth = 16;
    let turgutHeight = 16;
    let turgutSpeed = 3;
    function draw() {
        // Clear the canvas.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //drawthemap
        ctx.drawImage(mapImage, 0, 0, mapImage.width, mapImage.height);
        // Draw the image.
        ctx.drawImage(turgutImage, turgutX, turgutY, turgutWidth, turgutHeight);
    }
    // Call the draw function initially.
    draw();
    // Add a keyboard event listener to move the image.
    document.addEventListener("keydown", function (event) {
        // Handle arrow key presses (you can modify this for other keys).
        switch (event.key) {
            case "ArrowLeft":
                turgutX -= turgutSpeed;
                draw();
                break;
            case "ArrowRight":
                turgutX += turgutSpeed;
                draw();
                break;
            case "ArrowUp":
                turgutY -= turgutSpeed;
                draw();
                break;
            case "ArrowDown":
                turgutY += turgutSpeed;
                draw();
                break;
        }
    });
    window.addEventListener("gamepadconnected", (e) => {
        setInterval(() => {
            let gp = navigator.getGamepads()[0];
            let axe1 = gp.axes[0];
            let axe2 = gp.axes[1];
            let axe3 = gp.axes[3];
            let axe4 = gp.axes[2];
            let buttonY = document.querySelector("#buttonYOfHalfJoystick");
            let buttonX = document.querySelector("#buttonXOfHalfJoystick");
            let buttonB = document.querySelector("#buttonBOfHalfJoystick");
            let buttonA = document.querySelector("#buttonAOfHalfJoystick");
            let directionOfCross = document.querySelectorAll("#directionOfCross");
            if (axe1 >= 0.7) {
                turgutX = turgutX + turgutSpeed;//Droite
                console.log("axe");
                draw();
            }
            if (axe4 >= 0.7) {
                turgutX = turgutX + turgutSpeed;//Droite
                console.log("axe");
                draw();
            }
            if (axe1 <= -0.7) {
                turgutX = turgutX - turgutSpeed;//Gauche
                console.log("axe");
                draw();
            }
            if (axe4 <= -0.7) {
                turgutX = turgutX - turgutSpeed;//Gauche
                console.log("axe");
                draw();
            }
            if (axe2 >= 0.7) {
                turgutY = turgutY + turgutSpeed;//Bas
                console.log("axe");
                draw();
            }
            if (axe3 >= 0.7) {
                turgutY = turgutY + turgutSpeed;//Bas
                console.log("axe");
                draw();
            }
            if (axe2 <= -0.7) {
                turgutY = turgutY - turgutSpeed;//Haut
                console.log("axe");
                draw();
            }
            if (axe3 <= -0.7) {
                turgutY = turgutY - turgutSpeed;//Haut
                console.log("axe");
                draw();;
            }
            if (gp.buttons[0].pressed == true) {
                console.log("A");
            }
            if (gp.buttons[1].pressed == true) {
                console.log("B");
            }
            if (gp.buttons[2].pressed == true) {
                console.log("X");
            }
            if (gp.buttons[3].pressed == true) {
                console.log("Y");
            }
            if (gp.buttons[4].pressed == true) {
                console.log("Button LB");
            }
            if (gp.buttons[5].pressed == true) {
                console.log("Button RB");
            }
            if (gp.buttons[6].pressed == true) {
                console.log("Button LT");
            }
            if (gp.buttons[7].pressed == true) {
                console.log("Button RT");
            }
            if (gp.buttons[8].pressed == true) {
                console.log("Select");
            }
            if (gp.buttons[9].pressed == true) {
                console.log("Start");
            }
            if (gp.buttons[10].pressed == true) {
                console.log("Push sur la direction");
            }
            if (gp.buttons[11].pressed == true) {
                console.log("Push sur l'iso");
            }
        }, 100);
        // Call the draw function to redraw the image.
        draw();
    });

}

export default drawGame;

