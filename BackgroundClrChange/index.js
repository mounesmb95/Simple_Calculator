let buttonControl = document.getElementById('change-bg-btn');
let spanControl  = document.querySelector(`.color`);

var colors = ["white", "red", "blue", "green", "yellow", "violet"];
let len = colors.length;

buttonControl.addEventListener('click', () => {
    let index = generateRandomNumber();
    document.body.style.backgroundColor = colors[index];
    spanControl.textContent = colors[index];
});

function generateRandomNumber() {
    return Math.floor(Math.random() * len);
}
