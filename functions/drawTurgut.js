function drawTurgut() {
    // Get the canvas element and its context.
    let canvas = document.getElementById("canvas");
    // Make the image look pixelated.
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    // Load the image.
    let turgutImage = new Image();
    turgutImage.src = "../imagesOfTurgut/Layer 1_sprite_01.png";
    turgutImage.addEventListener("load", function () {
        // Draw the image.
        let turgutX = 120;
        let turgutY = 110;
        let turgutWidth = 16;
        let turgutHeight = 16;
        ctx.drawImage(turgutImage, turgutX, turgutY, turgutWidth, turgutHeight);
    });
}
export default drawTurgut;