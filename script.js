const mobileButton = document.querySelector("#mobile-menu");
const li = document.querySelector(".li");

mobileButton.addEventListener('click', () => {
    li.classList.toggle("active");
}); 

const bars = document.querySelector("#bars");
mobileButton.addEventListener('click', () => {
    bars.classList.toggle("active");
});



let dogs = document.querySelector(".dogs")
dogs.onclick = function ()  {
    window.scrollTo({
    top: 1056,
    behavior:"smooth" ,
});
};


// window.onscroll = function () {
//     console.log(this.scrollY)
// }



let items = document.querySelector(".items")
items.onclick = function ()  {
    window.scrollTo({
    top: 0,
    behavior:"smooth" ,
});
};




let btn = document.querySelector("#btn")
btn.onclick = function ()  {
    window.scrollTo({
    top: 10000,
    behavior:"smooth",
});
};





let tawasl = document.querySelector(".tawasl")
tawasl.onclick = function ()  {
    window.scrollTo({
    top: 10000,
    behavior:"smooth",
});
};



let home = document.querySelector(".home")
home.onclick = function ()  {
    window.scrollTo({
    top: 0,
    behavior:"smooth",
});
};



let geraphic = document.querySelector(".geraphic")
geraphic.onclick = function ()  {
    window.scrollTo({
    top: 1056,
    behavior:"smooth",
});
};

let programming = document.querySelector("#programming")

let barmga1 = document.querySelector(".barmga1")
barmga1.onclick = function ()  {
    window.scrollTo({
    top:"5700",
    behavior:"smooth",
});
};


let iconup = document.querySelector(".iconup");

window.onscroll = function () {
    this.scrollY >= 500 ? iconup.classList.add("show") : iconup.classList.remove("show");
};


let iconupshow = document.querySelector("iconup")
iconup.onclick = function ()  {
    window.scrollTo({
    top:"0",
    behavior:"smooth",
});
};


let cats = document.querySelector(".cats")
cats.onclick = function ()  {
    window.scrollTo({
    top: 10000,
    behavior:"smooth",
});
};