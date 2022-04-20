const elem = document.getElementById("circle");
const element = document.getElementById("hearts");
const elem1 = document.getElementById("hearts1");
const elem2 = document.getElementById("hearts2");
const elem3 = document.getElementById("hearts3");
const elem4 = document.getElementById("hearts4");
const elem5 = document.getElementById("hearts5");
const elem6 = document.getElementById("hearts6");

function showlike(){
    element.style.color = `#1db954`;
    element.style.animation= `zoom .1s ease-in`;
    element.style.textShadow= `0 0 10px #000, 0 0 10px #000, 0 0 10px #000`;
    elem.style.animation = `shadow .3s .1s ease-in`;
    elem1.style.animation = `bottom-top1 .4s .2s ease-in`;
    elem2.style.animation = `bottom-top2 .4s .2s ease-in`;
    elem3.style.animation = `bottom-top3 .4s .2s ease-in`;
    elem4.style.animation = `bottom-top1 .4s .2s ease-in`;
    elem5.style.animation = `bottom-top2 .4s .2s ease-in`;
    elem6.style.animation = `bottom-top3 .4s .2s ease-in`;

}