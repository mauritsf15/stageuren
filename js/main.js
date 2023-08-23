const hoursDone = document.querySelector('.hours-done');
const hoursToGo = document.querySelector('.hours-to-go');
const days = document.querySelector('.days');
const weeks = document.querySelector('.weeks');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const hoursToGet = 960;
let currentHours = parseFloat(localStorage.getItem('internshipHours'));

if (isNaN(currentHours)) {
    currentHours = 0;
}

function update() {
    hoursDone.innerText = currentHours;
    hoursToGo.innerText = hoursToGet - currentHours;
    days.innerText = (hoursToGet - currentHours) / 8;
    weeks.innerText = (hoursToGet - currentHours) / 40;
}

update();

function addHours(hours) {
    if (hours > 0) {
        currentHours += parseFloat(hours);
        localStorage.setItem('internshipHours', currentHours);
    }
    update();
}

btn.addEventListener('click', function() {addHours(input.value)})