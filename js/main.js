const hoursDone = document.querySelector('.hours-completed');
const hoursToGo = document.querySelector('.hours-left');
const days = document.querySelector('.days-left');
const weeks = document.querySelector('.weeks-left');
const btn = document.querySelector('.button');
const input = document.querySelector('.input');
const value = document.querySelector('.progress-bar');
const latestDate = document.querySelector('.date');

function qs(className) {
    return document.querySelector(`#${className}`).value;
}

function update(hoursPerDay, daysPerWeek, hoursToGet, currentHours) {
    // let latestUpdate = localStorage.getItem('latestdate');
    hoursDone.innerText = currentHours;
    // latestDate.innerText = latestUpdate;
    hoursToGo.innerText = hoursToGet - currentHours;
    days.innerText = Math.round(((hoursToGet - currentHours) / hoursPerDay)*100) / 100;
    weeks.innerText = Math.round(((hoursToGet - currentHours) / (hoursPerDay * daysPerWeek)) *100) / 100;
    let num = currentHours / hoursToGet;
    value.style.width = `${Math.round(num * 10000) / 100}%`
    value.innerText = `${Math.round(num * 10000) / 100}%`
}

// update();

// function addHours(hours) {
//     if (hours > 0) {
//         input.value = '';
//         currentHours += parseFloat(hours);
//         localStorage.setItem('internshipHours', currentHours);
//         const date = new Date()
//         localStorage.setItem('latestdate', date.getDate() + '/' + (date.getMonth() + 1));
//     } else {
//         alert('Dat werkt niet zo! Probeer het opnieuw met een getal.')
//     }
//     update();
// }

btn.addEventListener('click', function() {
    update(
        qs('hours-per-day'),
        qs('days-per-week'),
        qs('hours-to-go'),
        qs('hours-done')
    )
})