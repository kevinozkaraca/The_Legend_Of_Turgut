function responsiveJoystick() {
    let largeurEcran = window.innerWidth; // Obtient la largeur de l'écran du navigateur
    let halfJoystick = document.querySelectorAll('#halfJoystick');
    let allScreen = document.querySelector("#allScreen");
    if (largeurEcran < 1605) {
        halfJoystick[0].style.display = 'none';
        halfJoystick[1].style.display = 'none';
    } else {
        halfJoystick[0].style.display = 'flex';
        halfJoystick[1].style.display = 'flex';

    }
}
export default responsiveJoystick;




