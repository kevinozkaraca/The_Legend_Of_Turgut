function turgutCamera() {
    turgut.scrollIntoView({ behavior: "auto", block: "center", inline: "center" });
    let screenX = window.visualViewport.height / 6;
    let screenY = window.visualViewport.width / 6;
    const stickyBar = document.querySelector("#stickyBar");
    stickyBar.style.width = `${screenY - 1}px`;
    stickyBar.style.bottom = `${screenX - 21}px`;
    //stickyBar.style.opacity = "1";
    const item = document.querySelector("#item");
    item.style.opacity = 1;
}

export default turgutCamera;