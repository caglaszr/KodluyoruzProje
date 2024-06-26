const videoText = document.querySelector('.video-text');
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const panels = document.querySelectorAll('.panel')


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
