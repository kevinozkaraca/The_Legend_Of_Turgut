function responsiveCanvas() {
    let canvasResponsive = document.getElementById("canvas");
    let ctx = canvasResponsive.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let windowsWidthScreen = window.innerWidth;
    let windowHeightScreen = window.innerHeight;
    if (windowHeightScreen < windowsWidthScreen) {
        let scaleHeight = `${windowHeightScreen / 250}`;
        canvasResponsive.width = 250 * scaleHeight - 40;
        canvasResponsive.height = 250 * scaleHeight - 40;
        ctx.scale(scaleHeight, scaleHeight);
    } else {
        let scaleWidth = `${windowsWidthScreen / 240}`;
        canvasResponsive.width = 250 * scaleWidth - 40;
        canvasResponsive.height = 250 * scaleWidth - 40;
        ctx.scale(scaleWidth, scaleWidth);
    }
}
export default responsiveCanvas; 