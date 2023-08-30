


let getHamburger = document.querySelector(".hamburger")
let getCross = document.querySelector(".cross")
let getNavWrappper = document.querySelector(".nav-link-wrapper")

getHamburger.addEventListener("click", () => {
    getHamburger.classList.toggle("hide")
    getCross.classList.toggle("show")
    getNavWrappper.classList.toggle("showNav")
})

getCross.addEventListener("click", () => {
    getHamburger.classList.toggle("hide")
    getCross.classList.toggle("show")
    getNavWrappper.classList.toggle("showNav")
})


