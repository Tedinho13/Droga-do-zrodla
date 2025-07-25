const wrap = document.querySelector(".wrap");
const body = document.querySelector("body");

const footer = document.querySelector("footer");

const divSwitch = document.querySelector("div.switch");
const divChanges = document.querySelector("div.changelog");
const divCloseX = document.querySelector("div.close-x i.fa-solid");

const moon = document.querySelector("i.fa-moon");
const sun = document.querySelector("i.fa-sun");

const curtain = document.querySelector(".curtain");
const curtainInput = document.querySelector(".form input");
const curtainMessage = document.querySelector(".form p");
const scrollBar = document.querySelector("::-webkit-scrollbar");

const asideBonus = document.querySelector("aside.bonus");
const asideBonusEye = document.querySelector(".hide-eye");

const img = document.querySelectorAll("img");

//  Odblokowanie strony 

function hideCurtain(e) {
    inputText = this.value;
    if(inputText === "64tth") {
        curtain.style.display = "none";
        curtain.style.backgroundColor = "transparent";
        divSwitch.style.display = "block";
        wrap.style.display = "block";
        body.style.overflow = "auto";
        body.style.height = "100%";
        document.body.style.scrollTop = "0px"
    }

    else {
        curtainMessage.textContent = "Błędne hasło! Spróbuj ponownie.";
    }

}
curtainInput.addEventListener("input", hideCurtain);

// Powiekszenie zdjecia 

//  Zmiana koloru 

function openChanges() {
    divChanges.classList.toggle("active");
}

function closeChanges() {
    divChanges.classList.toggle("active");
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        moon.style.display = "none";
        sun.style.display = "block"
    }
}

function changeTheme2() {
    document.body.classList.toggle("dark-theme");
    sun.style.display = "none";
    moon.style.display = "block";
}

footer.addEventListener("click", openChanges);

divCloseX.addEventListener("click", closeChanges);

moon.addEventListener("click", changeTheme);

sun.addEventListener("click", changeTheme2);

asideBonusEye.addEventListener("click", toggleBonusAside);


//jQuery

$("nav.menu li a").on("click", function() {

    const goToElement = "#" + $(this).attr("class");

    console.log(goToElement);
    

    $("body, html").animate({
        scrollTop: $(goToElement).offset().top
    }, 500)
})
