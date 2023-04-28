function keyDown(e) {
    if (e.code == "KeyA") {
        console.log("Down left");
    } else if (e.code == "KeyD") {
        console.log("Down right");
    } else if (e.code == "KeyW") {
        console.log("Down up");
    } else if (e.code == 40) {
        console.log("Down down");
    }
}

export default keyDown;