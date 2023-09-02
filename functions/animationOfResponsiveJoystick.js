function animationOfResponsiveJoystick() {
    window.addEventListener("gamepadconnected", (e) => {
        console.log(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index,
            e.gamepad.id,
            e.gamepad.buttons.length,
            e.gamepad.axes.length
        );
        console.log(e);
        console.log('Gamepad en action');
        let gp = e.gamepad;
        let axes = [gp.axes[0], gp.axes[1], gp.axes[2], gp.axes[3]];
        let buttons = gp.buttons.map((button) => button.pressed);
        console.log(axes);
        console.log(buttons);
        setInterval(() => {
            console.log("settime");
            if (axes[0] >= 0.7 || axes[3] >= 0.7 || axes[1] >= 0.7 || axes[2] >= 0.7) {
                console.log(axes);
            }

            if (buttons[0]) {
                console.log("Button A");
            }
            if (buttons[1]) {
                console.log("Button B");
            }
            if (buttons[2]) {
                console.log("Button X");
            }
            if (buttons[3]) {
                console.log("Button Y");
            }
            if (buttons[4]) {
                console.log("Button LB");
            }
            if (buttons[5]) {
                console.log("Button RB");
            }
            if (buttons[6]) {
                console.log("Button LT");
            }
            if (buttons[7]) {
                console.log("Button RT");
            }
            if (buttons[8]) {
                console.log("Select");
            }
            if (buttons[9]) {
                console.log("Start");
            }
            if (buttons[10]) {
                console.log("Push sur la direction");
            }
            if (buttons[11]) {
                console.log("Push sur l'iso");
            }
            if (buttons[12]) {
                console.log("Up button pressed");
                upPressed = true;
                lastButtonPressed = "up";
            }
            if (buttons[13]) {
                console.log("Down button pressed");
                downPressed = true;
                lastButtonPressed = "down";
            }
            if (buttons[14]) {
                console.log("Left button pressed");
                leftPressed = true;
                lastButtonPressed = "left";
            }
            if (buttons[15]) {
                console.log("Right button pressed");
                rightPressed = true;
                lastButtonPressed = "right";
            }
        }, 100);


    });

}

export default animationOfResponsiveJoystick;