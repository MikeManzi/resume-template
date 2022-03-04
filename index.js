const changeBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("left-panel").style.background = "#" + randomColor;
}