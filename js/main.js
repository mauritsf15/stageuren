const hoursDone = document.querySelector('.hours-done');
const hoursToGo = document.querySelector('.hours-to-go');
const days = document.querySelector('.days');
const weeks = document.querySelector('.weeks');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const value = document.querySelector('.progress-bar');

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
    let num = currentHours / hoursToGet;
    value.style.width = `${Math.round(num * 10000) / 100}%`
    value.innerText = `${Math.round(num * 10000) / 100}%`
}

update();

function addHours(hours) {
    if (hours > 0) {
        input.value = '';
        currentHours += parseFloat(hours);
        localStorage.setItem('internshipHours', currentHours);
    } else {
        alert('Dat werkt niet zo! Probeer het opnieuw met een getal.')
    }
    update();
}

btn.addEventListener('click', function() {addHours(input.value)})