// Greeting Interval with Delay

var arrSalute = new Array("Hello", "Xin Chào", "Bonjour", "안녕하세요", "Hola");
var elmSalute = document.querySelector(".text--greeting");
var arrIAm = new Array("I am", "Tôi là", "Je suis", "나는", "Yo soy");
let elemIam = document.querySelector("#iam");
intervalGreet(arrSalute,elmSalute);
intervalGreet(arrIAm,elemIam);
function intervalGreet(arr,elmArr){
    displayGreetWithDelay();
    setInterval(displayGreetWithDelay,1000*arr.length);
    function displayGreetWithDelay(){
        arr.forEach((object, index) => {
            setTimeout(function () {
                elmArr.innerHTML = object;
            }, 1000 * index);
        });
    };
}    

//Section Display and Navbar Effect when Scroll
scrollAnimation();
function scrollAnimation() {
    let section = document.querySelectorAll("section");
    let menu = document.querySelectorAll(".navbar ul li a");
    window.onscroll = () => {
        section.forEach((i) => {
            let top = window.scrollY; //which is the length or number of pixels the viewport has been scrolled
            let offset = i.offsetTop - 200; //is the length of the element from the top of the viewport
            let height = i.offsetHeight; // is the length of the sections
            let id = i.getAttribute("id"); //returns the value of an elements attributes, in this case, the id of the sections.
            if (top >= offset && top < offset + height) {
                document
                    .querySelector("#" + id)
                    .classList.add("fade--active");
                menu.forEach((link) => {
                    link.classList.remove("nav--active");
                    document
                        .querySelector(".navbar ul li a[href*=" + id + "]")
                        .classList.add("nav--active");
                });
            } else {
                document
                    .querySelector("#" + id)
                    .classList.remove("fade--active");
            }
        });
    };
}

//Navbar Button Onclick  
const navDropDownBtn = document.querySelector('.navbar-btn-toggle');
const navDropDown = document.querySelector('.navbar');
const navDropDownIcon = document.querySelectorAll('.navbar-btn-toggle i');

navDropDownBtn.onclick = function(){
    navDropDown.classList.toggle("display-flex");
    navDropDownIcon.forEach((i) => {
        if (i.getAttribute("class").includes("display-block")) {
            i.classList.remove("display-block");
            i.classList.add("display-none");
        }
        else if (i.getAttribute("class").includes("display-none")) {
            i.classList.add("display-block");
            i.classList.remove("display-none");
        }
    });

};


//Theme ( color of Background/Text ) when click Icon 

const themeBtn = document.querySelector('#themeBtn');
themeBtn.onclick = function(){
    changeHeaderColor();
    changeTextColor();
};

function changeHeaderColor() {
    let bg_header = document.querySelector("header");
    bg_header.classList.toggle("bg-color-gray-700");
}

function changeTextColor() {
    let menu = document.querySelectorAll(".navbar ul li a");
    menu.forEach((i) => {
        if (i.getAttribute("class").includes("text-color-black")) {
            i.classList.remove("text-color-black");
            i.classList.add("text-color-white");
        }
        else if (i.getAttribute("class").includes("text-color-white")) {
            i.classList.add("text-color-black");
            i.classList.remove("text-color-white");
        }
    });
}


