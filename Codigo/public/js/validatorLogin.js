const form = document.querySelector(".login-conteiner form");
const span = document.querySelector("span.input-vacios")
const input1 = document.querySelector(".form-control input")
const input2 = document.querySelector(".form-control input#password")

const validarFormulario=(e)=>{
    switch(e.target.name){
        case "email":
            e.target.email!=="" ? campos[email]=true : campos[email]=false       
            break;
            case "contrasena":
                e.target.contrasena!=="" ? campos[contrasena]=true : campos[contrasena]=false       
        break;
    }
}

form.addEventListener("submit", function(e){
    if(input1.value=="" || input2.value==""){
        e.preventDefault()
        span.style.visibility = 'visible'
        setTimeout(()=>{
            span.style.visibility = 'hidden'
        },5000)
    }
})



const handleChange = (event) => {
    input1.classList.toggle("has-value", event.target.value);
};
const handleChange2 = (event) => {
    input2.classList.toggle("has-value", event.target.value);
};
