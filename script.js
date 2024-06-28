const videoText = document.querySelector('.video-text');
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const panels = document.querySelectorAll('.panel');
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".join-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const applyButton = document.getElementById("apply");




hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

applyButton.addEventListener("click",()=>{
  alert("Başvurunuz alınmıştır");
});

//Video üstündeki yazı animasyon 
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        videoText.classList.add('show');
    }, 500); 
  });
  

  //scroll
window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  });

  
// expanding
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

