const changeBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementsByClassName("container__content__left").style.background = "#" + randomColor;
}