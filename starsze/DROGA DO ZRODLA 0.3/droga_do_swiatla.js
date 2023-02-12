const footer = document.querySelector("footer");
const divChanges = document.querySelector("div.changes");
const divCloseX = document.querySelector("div.close-x i.fa-solid");

const moon = document.querySelector("i.fa-moon");
const sun = document.querySelector("i.fa-sun");



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