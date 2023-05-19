const body = document.querySelector('body')
const background = document.querySelector('.menu')
const toggleMenu = () => body.classList.toggle("open");
background.addEventListener('click', function(e) {
    const navA = document.querySelectorAll('.nav-menu a')
    if(background.contains(e.target) && e.target !== navA){
        
        body.classList.toggle("open")
            
    }
})
document.getElementById("scroll-to-end").addEventListener("click", function(event) {
    event.preventDefault();
  
    const element = document.getElementById("Contact");
    const options = {
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    };
  
    element.scrollIntoView(options);
  });
