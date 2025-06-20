



let btnExecute = document.getElementById("btn-execute");

let result = document.getElementById("result")

btnExecute.addEventListener("click", function () {
    
    let age = Number(document.getElementById("age").value);
    let name = document.getElementById("name").value;
    
    let message 
    if (name === "" || age === "" || age === "0") {
        message = "Por favor, rellena ambos campos de nombre y edad."
    }else if (isNaN(age) || age <= 0){
        message = "Por favor, ingrese un número valido para la edad. "
    }else if (name !== "" && age <18) {
        message = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!.`
    } else if (name !== "" && age >=18) {
        message = `Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!.`
    } else {
        message = "Lo siento, ocurrió algo inesperado."
    }
    
    result.textContent = message
});
