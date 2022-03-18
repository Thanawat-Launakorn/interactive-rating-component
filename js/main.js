const btn_1 = document.getElementById('btn-1');
const btn_2 = document.getElementById('btn-2');
const btn_3 = document.getElementById('btn-3');
const btn_4 = document.getElementById('btn-4');
const btn_5 = document.getElementById('btn-5');
const btn = document.getElementById('submit');
const home = document.querySelector('.home');
const thankyou = document.querySelector('.card-back');
const score = document.getElementById('score');

btn_1.addEventListener('click', () => {
    score.innerText = `You selected 1 out of 5`
})

btn_2.addEventListener('click', () => {
    score.innerText = `You selected 2 out of 5`
})

btn_3.addEventListener('click', () => {
    score.innerText = `You selected 3 out of 5`
})

btn_4.addEventListener('click', () => {
    score.innerText = `You selected 4 out of 5`
})

btn_5.addEventListener('click', () => {
    score.innerText = `You selected 5 out of 5`
})

btn.addEventListener('click', () => {
    console.log('clicked');

    home.style.display = 'none';
    thankyou.style.display = 'block';

});


