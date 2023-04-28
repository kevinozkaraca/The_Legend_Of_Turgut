function keyUp(e) {
    if (e.code == "KeyA") {
        console.log("Up left");
    } else if (e.code == "KeyD") {
        console.log("Up right");
    } else if (e.code == "KeyW") {
        console.log("Up up");
    } else if (e.code == 40) {
        console.log("Up down");
    }
}

export default keyUp;