const changeBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const elements = document.getElementsByClassName("dynamic-bg")
    const bullets = document.getElementsByClassName("dynamic-bullets")
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#" + randomColor;
        bullets[i].style.color = "#" + randomColor
    }
}