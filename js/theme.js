//THEME PROPERTIES 
const blueLightTheme = {
    BgColorSecond: "#ebebeba1",
    BgColorClassName: "bg--color",
    BgColorHeaderClassName: "bg-header--color",
    TextNavbarColor: "#000000",
    ColorOppositeLightDark: "#000000",
    ColorSameLightDark:"#ffffff",
    WelcomeImg: "url(../img/wallpaper/wallpaper-blue.png",
    AboutImg: "img/girl.jpg",
    ContactImg: "img/contact-gif.gif",
    ThemeColor: "#146af6",

}

const blueDarkTheme = {
    BgColorClassName: "bg--color-black",
    BgColorSecond: "rgb(42, 44, 44)",
    BgColorHeaderClassName: "bg-header--color-gray",
    TextNavbarColor: "#cbcbcb",
    ColorOppositeLightDark: "#ffffff",
    ColorSameLightDark:"#000000",
    WelcomeImg: "url(../img/wallpaper/wallpaper-blue-dark.png",
    AboutImg: "img/girl.jpg",
    ContactImg: "img/contact-gif.gif",
    ThemeColor: "#146af6",



}

const pinkLightTheme = {
    BgColorClassName: "bg--color",
    BgColorSecond: "#ebebeba1",
    BgColorHeaderClassName: "bg-header--color-pink",
    TextNavbarColor: "#000000",
    ColorOppositeLightDark: "#000000",
    ColorSameLightDark:"#ffffff",
    WelcomeImg: "url(../img/wallpaper/wallpaper-pink.jpg",
    AboutImg: "img/girl-pink.png",
    ContactImg: "img/contact-gif-pink.gif",
    ThemeColor: "#D373C6",
}

const pinkDarkTheme = {
    BgColorClassName: "bg--color-black",
    BgColorSecond: "rgb(42, 44, 44)",
    BgColorHeaderClassName: "bg-header--color-gray",
    TextNavbarColor: "#cbcbcb",
    ColorOppositeLightDark: "#ffffff",
    ColorSameLightDark:"#000000",
    WelcomeImg: "url(../img/wallpaper/wallpaper-pink-dark.jpg",
    AboutImg: "img/girl-pink.png",
    ContactImg: "img/contact-gif-pink.gif",
    ThemeColor: "#D373C6",
}

// FUNCTION
// Toggle theme-dropdown Btn 
function themeDropDownToggle(){
    const themeDropDown = document.querySelector('#theme-dropdown')
    themeDropDown.classList.toggle("display-flex");
}

// changeBgColor - bg color

function changeBgColor(themeObj) {
    let body = document.querySelector('body');
    body.className = themeObj.BgColorClassName;
}

//bg header 
function changeBgColorHeader(themeObj) {
    let header = document.querySelector('header');
        header.classList.replace(header.classList[0],themeObj.BgColorHeaderClassName);
}

// change theme color
function changeThemeColor(themeObj) {
    let themeColor = document.querySelectorAll('.bg-theme--color');
    themeColor.forEach(element =>{
        element.style.backgroundColor = themeObj.ThemeColor;
        element.style.border = themeObj.ThemeColor;
    })
}

// change second theme color
function changeThemeSecondColor(themeObj) {
    let themeColor = document.querySelectorAll('.bg--color-second-light');
    themeColor.forEach(element =>{
        element.style.backgroundColor = themeObj.BgColorSecond;
    })
}



// navbar text color
function changeTextColorOfNavbar(themeObj) {
    let text = document.querySelectorAll('#nav ul li a');
    text.forEach(element => {
        element.style.color =themeObj.TextNavbarColor;
    })
    let textPink = document.querySelectorAll('#nav-pink ul li a');
    textPink.forEach(element => {
        element.style.color =themeObj.TextNavbarColor;
    })
}

// display based on theme
function displayforBlue(){
    let navBlue = document.querySelector('#nav');
    let navBlueToggle = document.querySelector('#nav-btn--toggle');
    let navPink = document.querySelector('#nav-pink');
    let navPinkToggle = document.querySelector('#nav-btn--toggle-pink');

    let btnSlideLeft = document.querySelector('.button--slide-left');
    let btnSlideLeftPink = document.querySelector('.button--slide-left-pink');

    let imgWelcome = document.querySelector("#img-welcome")

    let TimeLineBlue = document.querySelector(".timeline");
    let TimeLinePink = document.querySelector(".timeline-pink");

    navBlue.classList.replace("display-none","display-flex");
    navBlueToggle.classList.replace("display-none","display-flex");
    navPink.classList.replace("display-flex","display-none");
    navPinkToggle.classList.replace("display-flex","display-none");

    btnSlideLeft.classList.replace("display-none","display-flex");
    btnSlideLeftPink.classList.replace("display-flex","display-none"); 

    imgWelcome.style.display ="flex";

    TimeLineBlue.classList.replace("display-none","display-block");
    TimeLinePink.classList.replace("display-block","display-none");
    

}
function displayforPink(){
    let navBlue = document.querySelector('#nav');
    let navBlueToggle = document.querySelector('#nav-btn--toggle');
    let navPink = document.querySelector('#nav-pink');
    let navPinkToggle = document.querySelector('#nav-btn--toggle-pink');

    let btnSlideLeft = document.querySelector('.button--slide-left');
    let btnSlideLeftPink = document.querySelector('.button--slide-left-pink');

    let imgWelcome = document.querySelector("#img-welcome");

    let TimeLineBlue = document.querySelector(".timeline");
    let TimeLinePink = document.querySelector(".timeline-pink");


    navPink.classList.replace("display-none","display-flex");
    navPinkToggle.classList.replace("display-none","display-flex");
    navBlue.classList.replace("display-flex","display-none");
    navBlueToggle.classList.replace("display-flex","display-none");

    btnSlideLeft.classList.replace("display-flex","display-none");
    btnSlideLeftPink.classList.replace("display-none","display-flex"); 

    imgWelcome.style.display ="none";

    TimeLineBlue.classList.replace("display-block","display-none");
    TimeLinePink.classList.replace("display-none","display-block");

}

// changeImg
function changeImg(themeObj) {
    let imgWelcome = document.getElementById("welcome");
    imgWelcome.style.backgroundImage = themeObj.WelcomeImg;
    let AboutImg = document.querySelector("#about .img-section");
    AboutImg.setAttribute("src", themeObj.AboutImg);
    let ContactImg = document.querySelector("#contact .img-section");
    ContactImg.setAttribute("src", themeObj.ContactImg);
}

// changeTextColor
function changeTextColor(themeObj) {
    let text = document.querySelectorAll(".text--color-black");
    for (var i = 0; i < text.length; i++) {
        text[i].style.color = themeObj.ColorOppositeLightDark;
    }
}

// changeTextTitleColor
function changeTextThemeColor(themeObj) {
    let text = document.querySelectorAll(".text--color-blue");
    for (var i = 0; i < text.length; i++) {
        text[i].style.color = themeObj.ThemeColor;
    }
}

//Set Background Container Exp&Edu 
function changeBgExpEduContainer(themeObj) {
    let bgContainerEduExp = document.querySelectorAll(".container");
    let bgContentEduExp = document.querySelectorAll(".content");

    for (var i = 0; i < bgContentEduExp.length; i++) {
        bgContentEduExp[i].style.backgroundColor = themeObj.ColorSameLightDark;
        bgContainerEduExp[i].style.backgroundColor = themeObj.ColorSameLightDark;
    }

    let bgContainerEduExpPink = document.querySelectorAll(".container-pink");
    let bgContentEduExpPink = document.querySelectorAll(".content-pink");

    for (var i = 0; i < bgContainerEduExpPink.length; i++) {
        bgContainerEduExpPink[i].style.backgroundColor = themeObj.ColorSameLightDark;
        bgContentEduExpPink[i].style.backgroundColor = themeObj.ColorSameLightDark;
    }
}

// setTHEME 
SetTheme();
function SetTheme() {
    var themeObj = blueLightTheme;
    document.querySelector('#blue-light').addEventListener("click", BlueLightTheme);
    document.querySelector('#blue-dark').addEventListener("click", BlueDarkTheme);
    document.querySelector('#pink-light').addEventListener("click", PinkLightTheme);
    document.querySelector('#pink-dark').addEventListener("click", PinkDarkTheme);
    return themeObj;
}

function BlueLightTheme(){
    themeDropDownToggle();
    displayforBlue();
    var themeObj = blueLightTheme;
    ExecuteThemeFunction(themeObj);
}

function BlueDarkTheme(themeObj){
    themeDropDownToggle();
    displayforBlue();
    var themeObj = blueDarkTheme;
    ExecuteThemeFunction(themeObj);
}

function PinkLightTheme(){
    themeDropDownToggle(themeObj);
    displayforPink();
    var themeObj = pinkLightTheme;
    ExecuteThemeFunction(themeObj);
}

function PinkDarkTheme(){
    themeDropDownToggle();
    displayforPink();
    var themeObj = pinkDarkTheme;   
    ExecuteThemeFunction(themeObj);
}

// Execute Function
function ExecuteThemeFunction(themeObj){
    changeBgColor(themeObj);
    changeBgColorHeader(themeObj);
    changeThemeColor(themeObj);
    changeTextColorOfNavbar(themeObj);
    changeImg(themeObj);
    changeTextColor(themeObj);
    changeTextThemeColor(themeObj);
    changeBgExpEduContainer(themeObj);
    changeThemeSecondColor(themeObj);
};




