function drawTurgut() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let turgutImage = new Image();
    turgutImage.src = "../images/Layer 1_sprite_Turgut01.png";
    let turgutX = 135;
    let turgutY = 135;
    let turgutWidth = 16;
    let turgutHeight = 16;
    let turgutSpeed = 2;
    ctx.drawImage(turgutImage, turgutX, turgutY, turgutWidth, turgutHeight);
}
export default drawTurgut;