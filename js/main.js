const btn_1 = document.getElementById('btn-1');
const btn_2 = document.getElementById('btn-2');
const btn_3 = document.getElementById('btn-3');
const btn_4 = document.getElementById('btn-4');
const btn_5 = document.getElementById('btn-5');
const btn = document.getElementById('submit');
const home = document.querySelector('.home');
const thankyou = document.querySelector('.card-back');
const score = document.getElementById('score');
const animation = document.getElementById('animation');
const error = document.getElementById('error');
const generator = () => {
    animation.style.animationPlayState = 'paused'
}

generator();
let c = 0;
btn_1.addEventListener('click', () => {
    score.innerText = `You selected 1 out of 5`
    c++;
})

btn_2.addEventListener('click', () => {
    score.innerText = `You selected 2 out of 5`
    c++;

})

btn_3.addEventListener('click', () => {
    score.innerText = `You selected 3 out of 5`
    c++;

})

btn_4.addEventListener('click', () => {
    score.innerText = `You selected 4 out of 5`
    c++;

})

btn_5.addEventListener('click', () => {
    score.innerText = `You selected 5 out of 5`
    c++;

})



function changeDisplay() {
    home.style.display = 'none';
    thankyou.style.display = 'block';
    error.style.display = 'none';
}

function errorMessage() {
    error.style.display = 'block';
   
}

btn.addEventListener('click', () => {
    console.log('clicked');
    c > 0 ? changeDisplay() : errorMessage();


});


