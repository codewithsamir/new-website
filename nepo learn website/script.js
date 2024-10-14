const toggle= document.querySelector(".toggle")
const navbar = document.querySelector(".navbar-menu")
const btn = document.querySelectorAll(".btn")
const login = document.querySelector(".login")
const signup = document.querySelector(".signup")
const loginbox = document.querySelector(".login-box")
const signupbox = document.querySelector(".signup-box")
const cross = document.querySelector(".cross")
const cross2 = document.querySelector(".cross2")


toggle.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    toggle.classList.toggle("is-active")
  btn.classList.toggle("active");

})
login.addEventListener("click",()=>{
   loginbox.classList.add("active2");
   signupbox.classList.remove("active3");
   
})
cross.addEventListener("click",()=>{
  loginbox.classList.remove("active2");

  
})
signup.addEventListener("click",()=>{
   signupbox.classList.add("active3");
   loginbox.classList.remove("active2");

})
cross2.addEventListener("click",()=>{
 signupbox.classList.remove("active3");

  
})



// const nav = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  // setup back to top link

  if (scrollHeight > 600) {
 

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});







