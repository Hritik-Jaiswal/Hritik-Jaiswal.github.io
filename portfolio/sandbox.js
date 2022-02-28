
// ? Main header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('got-tiny', window.scrollY > 620)
})

// ? Typing Text Animation
const type_animation = ['Student', 'Developer', 'Designer', 'Dreamer', 'Introvert'];
let countIndex = 0;
let indexOfletter = 0;
let currenText = '';
let letter = '';
(function animation (){
    if (countIndex === type_animation.length) {
        countIndex = 0;
    }
    currenText = type_animation[countIndex];
    letter = currenText.slice(0, ++indexOfletter);
    document.querySelector('#type-animation').textContent = letter;
    if (letter.length === currenText.length) {
        countIndex++;
        indexOfletter = 0;
    }
    setTimeout(animation, 288);
}());

// ? Animation on My name

const nameText = document.querySelector('body > header > h1');
const strNameText = nameText.textContent;
const splitNameText = strNameText.split("");
// console.log(splitText);
nameText.textContent = "";
for (let i = 0; i < splitNameText.length; ++i) {
    nameText.innerHTML+=`<span class="letters">${splitNameText[i]}</span>`; 
}
let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
    const letters = nameText.querySelectorAll('.letters')[char];
    letters.classList.add('fade');
    char++;
    if (char === splitNameText.length) {
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    char = 0;
}
// ! for some reason the following set of code lines do not work. Even though it is same.
// const Text = document.querySelector('body > main > div > h1');
// const strText = Text.textContent;
// const splitText = strText.split("");
// // console.log(split)
// Text.textContent = "";
// for (let i = 0; i < splitText.length; ++i) {
//     Text.innerHtml+=`<span class="letters">${splitText[i]}</span>`;
// }

// ? Card Flip

const card = document.querySelectorAll('.card');
for (let i = 0; i < card.length; i++)
{
    card[i].addEventListener('click', function(){
        card[i].classList.toggle('is-flipped');
    });
}
// const card = document.querySelector('.card');

// card.addEventListener('click', function(){
//     card.classList.toggle('is-flipped');
// });
