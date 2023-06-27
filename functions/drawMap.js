//draws the map
function drawMap() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let mapImage = new Image();
    mapImage.src = "../imageOfMap/map.png";
    mapImage.onload = function () {
        ctx.drawImage(mapImage, 0, 0, mapImage.width, mapImage.height);
    };
}
export default drawMap;