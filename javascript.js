setInterval(greeting, 2000);
function greeting() {
    let greet = new Array("Hello", "Xin Chào", "Bonjour", "안녕하세요", "Hola");
    let iam = new Array("I am", "Tôi là", "Je suis", "나는", "Yo soy");
    let i = 0;
    let j = 0;
    let elemgreet = $(".text--greeting");
    let elemiam = $("#iam");
    elemgreet.fadeOut(function () {
        elemgreet.html(greet[i] + "!");
        i++;
        if (i >= greet.length) { i = 0; }
        elemgreet.fadeIn();
    });
    elemiam.fadeOut(function () {
        elemiam.html(" " + iam[j]);
        j++;
        if (j >= iam.length) { j = 0; }
        elemiam.fadeIn();
    });

}

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

function changeTheme() {
    changeColorHeaderFromWhiteToGray();
    changeColorTextFromWhitetoBlack();
}

function changeColorHeaderFromWhiteToGray() {
    let bg_header = document.querySelector("header");
    console.log(bg_header);
    bg_header.classList.toggle("bg-color-gray-700");
}
function changeColorTextFromWhitetoBlack() {
    let menu = document.querySelectorAll(".navbar ul li a");
    console.log(menu);
    menu.forEach((i) => {
        if (i.getAttribute("class").includes("text-color-black")){
            i.classList.remove("text-color-black");
            i.classList.add("text-color-white");
        } 
        else if(i.getAttribute("class").includes("text-color-white")) {
            i.classList.add("text-color-black");
            i.classList.remove("text-color-white");
        }
    });
}