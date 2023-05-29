//Theme Button Onclick  

const themeDropDownBtn = document.querySelector('#theme');
const themeDropDownList = document.querySelector('#theme-dropdown');

themeDropDownBtn.onclick = function () {
    themeDropDownList.classList.toggle("display-flex");
};


// Greeting Interval with Delay

var arrSalute = new Array("Hello", "Xin Chào", "Bonjour", "안녕하세요", "Hola");
const elmSalute = document.querySelector("#greeting");
var arrIAm = new Array("I am", "Tôi là", "Je suis", "나는", "Yo soy");
const elemIam = document.querySelector("#iam");
intervalGreet(arrSalute, elmSalute);
intervalGreet(arrIAm, elemIam);
function intervalGreet(arr, elmArr) {
    displayGreetWithDelay();
    setInterval(displayGreetWithDelay, 1000 * arr.length);
    function displayGreetWithDelay() {
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
    let menu = document.querySelectorAll("#nav li a");
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
                        .querySelector("#nav li a[href*=" + id + "]")
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

const navDropDownBtn = document.querySelector('#nav-btn--toggle');
const navDropDown = document.querySelector('#nav');
const navDropDownIcon = document.querySelectorAll('#nav-btn--toggle i');

navDropDownBtn.onclick = function () {
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




// //THEME

// // Header Background

// function changeBgColorHeader(theme) {
//     let bg_header = document.querySelector("header");
//     console.log(theme.BgColorHeaderClass)
//     bg_header.classList.remove(theme.BgColorHeaderClass);
// }

// function changeBgColorHeadertoBlack() {
//     let bg_header = document.querySelector("header");
//     bg_header.classList.add("bg-color-gray-700");
// }
// // Header Navbar

// const theme = {
//     navBarBlueLight: "document.querySelector('.navbar--blue-light')",
//     navBarBlueDark:"document.querySelector('.navbar--blue-dark')",
//     navBarPinkLight: "document.querySelector('.navbar--pink-light')",
//     navBarPinkDark : "document.querySelector('.navbar--pink-dark')"
// }

// const blueLightTheme = {
//     BgColorHeaderClass: "bg-color-white-header",
// }

// const blueDarkTheme = {
//     BgColorHeaderClass: "bg-color-gray-700",
// }

// const pinkLightTheme = {
//     BgColorHeaderClass: "bg-color-white-header",
// }

// const pinkDarkTheme = {
//     BgColorHeaderClass: "bg-color-gray-700",
// }
// // Text 

// function changeTextAlltoBlack() {
//     let textTitle = document.getElementsByClassName("text-color-black");
//     for (var i = 0; i < textTitle.length; i++) {
//         textTitle[i].style.color = 'black';
//     }
// }

// function changeTextAlltoWhite() {
//     let textTitle = document.getElementsByClassName("text-color-black");
//     for (var i = 0; i < textTitle.length; i++) {
//         textTitle[i].style.color = '#FFFFFF';
//     }
// }

// //Section Background 
// function changeBgSectiontoWhite() {
//     let bgSection = document.getElementsByClassName("bg-color-white");
//     for (var i = 0; i < bgSection.length; i++) {
//         bgSection[i].style.backgroundColor = 'white';
//     }
// }


// function changeBgSectiontoBlack() {
//     let bgSection = document.getElementsByClassName("bg-color-white");
//     for (var i = 0; i < bgSection.length; i++) {
//         bgSection[i].style.backgroundColor = 'black';
//     }
// }

// //BLUE LIGHT (BL) theme 

// const themeBlueLightBtn = document.querySelector('#blue-light');

// themeBlueLightBtn.onclick = function () {

//     themeDropDown.classList.toggle("display-flex");

//     // general
//     changeBgColorHeader(blueLightTheme);
//     changeTextAlltoBlack();
//     changeBgSectiontoWhite();
//     // changeTextHeaderHovertoWhite();


//     // specific

//     changeImgWelcomeBlueLight();
//     // changeBlueLightTo146af6();
//     // changeBlueLightTofaebd749();

// };

    
   

// function changeImgWelcomeBlueLight() {
//     let imgWelcome = document.getElementById("welcome");
//     imgWelcome.style.backgroundImage = "url(img/wallpaper-blue.png)"
// }





// // function changeBlueLightTo146af6(){
// //     let text1F51FF = document.getElementsByClassName("text-color-blue");
// //     for (var i = 0; i < text1F51FF.length; i++) {
// //         text1F51FF[i].style.color = '#146af6';
// //     }
// // }

// // function changeBlueLightTofaebd749(){
// //     let textfaebd749 = document.getElementsByClassName("bg-color-faebd749");
// //     for (var i = 0; i < textfaebd749.length; i++) {
// //         textfaebd749[i].style.backgroundColor = '#faebd749';
// //     }
// // }


// //BLUE DARK (BD) theme 

// const themeBlueDarkBtn = document.querySelector('#blue-dark');
// themeBlueDarkBtn.onclick = function () {

//     themeDropDown.classList.toggle("display-flex");

//     // general
//     changeBgColorHeader(blueDarkTheme);
//     changeTextAlltoWhite();
//     changeBgSectiontoBlack();

//     // specific
//     changeImgWelcomeBlueDark();
//     // changeBlueDarkTo83EEFF();
//     // changeBlueDarkTo2f3332a7();

// };

// function changeImgWelcomeBlueDark() {
//     let imgWelcome = document.getElementById("welcome");
//     imgWelcome.style.backgroundImage = "url(img/wallpaper-blue-dark.png)"
// }


// // function changeBlueDarkTo83EEFF(){
// //     let text83EEFF = document.getElementsByClassName("text-color-blue");
// //     for (var i = 0; i < text83EEFF.length; i++) {
// //         text83EEFF[i].style.color = '#83EEFF';
// //     }
// // }

// // function changeBlueDarkTo2f3332a7(){
// //     let text2f3332a7 = document.getElementsByClassName("bg-color-faebd749");
// //     for (var i = 0; i < text2f3332a7.length; i++) {
// //         text2f3332a7[i].style.backgroundColor = '#1d2120';
// //     }
// // }

// // //PINK LIGHT (PL) theme 

// // const themePinkLightBtn = document.querySelector('#pink-light');
// // themePinkLightBtn.onclick = function () {

// //     themeDropDown.classList.toggle("display-flex");

// //     // general
// //     changeBgColorHeadertoWhite();
// //     changeTextAlltoBlack();
// //     changeBgSectiontoWhite();




// //     // specific

// //     changeImgWelcomePinkLight();
// //     // changePinkLightToD373C6();
// //     // changeHoverButtonPinkLight();
// // };

// // function changeImgWelcomePinkLight() {
// //     let imgWelcome = document.getElementById("welcome");
// //     imgWelcome.style.backgroundImage = "url(img/wallpaper-pink.jpg)"
// // }

// // // function changePinkLightToD373C6(){
// // //     let text2f3332a7 = document.getElementsByClassName("bg-color-blue");
// // //     for (var i = 0; i < text2f3332a7.length; i++) {
// // //         text2f3332a7[i].style.backgroundColor = '#D373C6';
// // //     }
// // // }

// // // function changeHoverButtonPinkLight(){
// // //     document.getElementById("nav-btn").addEventListener("mouseover", function() {
// // //         document.getElementById("nav-btn").style.backgroundColor = "#D373C6";
// // //     });
// // //     document.getElementById("nav-btn").addEventListener("mouseout", function() {
// // //         document.getElementById("nav-btn").style.backgroundColor = "#D373C6";
// // //     });
// // //     let text2f3332a7 = document.getElementsByClassName("nav--active");
// // //     for (var i = 0; i < text2f3332a7.length; i++) {
// // //         text2f3332a7[i].style.backgroundColor = '#D373C6';
// // //         console.log(text2f3332a7);
// // //     }

// // // }


// // //PINK DARK (PD) theme  

// // const themePinkDarkBtn = document.querySelector('#pink-dark');
// // themePinkDarkBtn.onclick = function () {

// //     themeDropDown.classList.toggle("display-flex");

// //     // general
// //     changeBgColorHeadertoBlack();
// //     changeTextAlltoWhite();
// //     changeBgSectiontoBlack();



// //     // specific

// //     changeImgWelcomePinkDark();
// // };

// // function changeImgWelcomePinkDark() {
// //     let imgWelcome = document.getElementById("welcome");
// //     imgWelcome.style.backgroundImage = "url(img/wallpaper-pink-dark.jpg)"
// // }



