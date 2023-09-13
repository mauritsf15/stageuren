const hoursDone = document.querySelector('.hours-done');
const hoursToGo = document.querySelector('.hours-to-go');
const days = document.querySelector('.days');
const weeks = document.querySelector('.weeks');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const value = document.querySelector('.progress-bar');
const latestDate = document.querySelector('.date');

const hoursToGet = 1000;
let currentHours = parseFloat(localStorage.getItem('internshipHours'));

if (isNaN(currentHours)) {
    currentHours = 0;
}

function update() {
    let latestUpdate = localStorage.getItem('latestdate');
    hoursDone.innerText = currentHours;
    latestDate.innerText = latestUpdate;
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
        const date = new Date()
        localStorage.setItem('latestdate', date.getDate() + '/' + (date.getMonth() + 1));
    } else {
        alert('Dat werkt niet zo! Probeer het opnieuw met een getal.')
    }
    update();
}

btn.addEventListener('click', function() {addHours(input.value)})