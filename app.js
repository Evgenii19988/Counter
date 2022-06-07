let counter = document.querySelector('#count');

document.querySelector('.btn.primary').addEventListener('click', raiseCounter);

document.querySelector('.btn.danger').addEventListener('click', reduceCounter);

function raiseCounter() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1 ;
}

function reduceCounter() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1 ;
}
