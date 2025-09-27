let selectMode = document.querySelector('#mode-select');
let pageContent = document.querySelector('body');

selectMode.addEventListener('change', changeMode);

function changeMode() {
    let current = selectMode.value;
    if (current === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("logo").src ="byui-logo-blue.webp"
    }
    else if (current === 'dark') {
        document.body.style.backgroundColor = "rgba(55, 55, 55, 1)";
        document.body.style.color = "white";
        document.getElementById("logo").src ="byui-logo-dark.png";
    }
}