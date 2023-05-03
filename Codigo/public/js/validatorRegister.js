let form = document.querySelector('form')
let inputName = document.querySelector('#nombre')
let inputEmail = document.querySelector('#email')
let inputContrasena = document.querySelector('#contrasena')
let inputContrasena2 = document.querySelector('#contrasena2')
let inputs = document.querySelectorAll('.form-control input')
let formControl=document.querySelector('div.form-control')

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}\s[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    password: /^(?=.*[A-Z])(?=.{8,})[a-zA-Z0-9!"#$%&/()=?¡¿]*$/, // 8 a 0 digitos.
    correo: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    /*  ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$*/
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos={
    nombre:false,
    email:false,
    contrasena:false,
    contrasena2:false
}
    

const validarFormulario =(e)=>{
    switch(e.target.name){
        case "nombre":
            validarInput(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validarInput(expresiones.correo, e.target, 'email');            
        break;
        case "contrasena":
            validarInput(expresiones.password, e.target, 'contrasena');
            validarcontrasena2('contrasena2')
        break;
        case "contrasena2":
            validarcontrasena2('contrasena2')
        break;
    }
    
}

const validarInput=(expresion,input,campo)=>{
    if(expresion.test(input.value)){
        document.querySelector(`#control-${campo}`).classList.add('success')
        document.querySelector(`#control-${campo}`).classList.remove('error')
        campos[campo]=true
    }else{
        document.querySelector(`#control-${campo}`).classList.add('error')
        document.querySelector(`#control-${campo}`).classList.remove('success')
        campos[campo]=false
    }
}

const validarcontrasena2=(campo)=>{
    
    if(inputContrasena.value !== inputContrasena2.value){
        document.querySelector(`#control-${campo}`).classList.add('error')
        document.querySelector(`#control-${campo}`).classList.remove('success')
        campos[campo]=false
    }else{
        document.querySelector(`#control-${campo}`).classList.add('success')
        document.querySelector(`#control-${campo}`).classList.remove('error')
        campos[campo]=true
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)
})

form.addEventListener('submit',function(e){
    if(!(campos.nombre && campos.email && campos.contrasena && campos.contrasena2)){
        e.preventDefault() 
    }
})
    
   
    

    
    
        
        
        
    

