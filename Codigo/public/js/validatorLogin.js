const form = document.querySelector(".login-conteiner form");
const span = document.querySelector("span.input-vacios")
const input1 = document.querySelector(".form-control input")
const input2 = document.querySelector(".form-control input#password")

form.addEventListener("submit", function(e){
    if(input1.value=="" || input2.value==""){
        e.preventDefault()
        span.style.visibility = 'visible'
        setTimeout(()=>{
            span.style.visibility = 'hidden'
        },5000)
    }
})



const handleChange2 = (event) => {
    input1.classList.toggle("has-value", event.target.value);
};
const handleChange3 = (event) => {
    input2.classList.toggle("has-value", event.target.value);
};
