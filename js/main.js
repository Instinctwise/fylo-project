const navOpen = document.querySelector(".ri-menu-line")
const navClose = document.querySelector(".ri-close-fill")
const navMenu = document.querySelector(".navlinks")
const navlinks =document.querySelectorAll(".navlinks a")
const html=document.querySelector("html")
const scrollToTop = document.querySelector(".scroll-to-top")
console.log(html.scrollTop )

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

function scrollFunction() {
  
}

scrollToTop.addEventListener("click", function(){
    window.scrollTo(0,0)
})

navOpen.addEventListener("click", function(){
    navMenu.style.top="47%"
    navOpen.style.display="none"
    navClose.style.display="block"
    html.style.overflowY="hidden"
})


navClose.addEventListener("click", function(){
    navMenu.style.top="-47%"
    navOpen.style.display="block"
    navClose.style.display="none"
    html.style.overflowY="scroll"
})

navlinks.forEach (navLink =>{
    navLink.addEventListener("click", function(){
        navMenu.style.top="-57%"
        navOpen.style.display="block"
        navClose.style.display="none"
        html.style.overflowY="scroll"
    })
})