function playBGM(source) {
    let sound = new Audio();
    sound.src = source;
    sound.loop = true;
    sound.volume = 0.2;
    sound.play();
}
export default playBGM;