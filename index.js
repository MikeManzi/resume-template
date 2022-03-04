const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const elements = document.getElementsByClassName("dynamic-bg")
    const bullets = document.getElementsByClassName("dynamic-color")
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#" + randomColor;
    }
    for(var i = 0; i < bullets.length; i++) {
        bullets[i].style.color = "#" + randomColor
    }
}