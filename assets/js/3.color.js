const elemento1 = document.getElementById('elemento1')
const elemento2 = document.getElementById('elemento2')
const elemento3 = document.getElementById('elemento3')

//Utilizando arrow function
document.addEventListener('keydown',  (event) => {
    if(event.key === 'a') {
        elemento1.style.backgroundColor = "red"
    }

    if(event.key === 's') {
        elemento2.style.backgroundColor = "yellow"
    }

    if(event.key === 'd') {
        elemento3.style.backgroundColor = "green"
    }
})