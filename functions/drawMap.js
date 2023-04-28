function drawMap() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let mapImage = new Image();
    mapImage.src = "./images/Maprevu.png";
    let mapImageWhidth = 1616;
    let mapImageHeight = 529;
    ctx.drawImage(mapImage, 0, 0, mapImageWhidth, mapImageHeight);
}
export default drawMap;