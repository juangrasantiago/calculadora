const pantalla = document.querySelector(".pantalla");
const botones= document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado= boton.textContent;

        if (boton.id ==="limpiar"){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id=== "retroceder") {
            if(pantalla.textContent.length === 1 || pantalla.textContent==="Error!"){
                pantalla.textContent= "0";
            }else { 
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //Código de cálculo de porcentaje
        if (boton.id === "porcentaje") {
            try {
                // Evalúa la expresión actual para obtener el número
                let valorActual = eval(pantalla.textContent);
                
                // Calcula el porcentaje (dividiendo por 100)
                let porcentaje = valorActual / 100;
        
                // Actualiza la pantalla con el nuevo valor redondeado a 10 decimales
                pantalla.textContent = Math.round(porcentaje * 1e10) / 1e10;
            } catch (e) {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                // Evalúa la expresión y redondea el resultado a 10 dígitos
                let resultado = eval(pantalla.textContent);
                resultado = Math.round(resultado * 1e10) / 1e10; // Redondea a 10 dígitos decimales
                pantalla.textContent = resultado;
            } catch (e) {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent==="Error!") {
            pantalla.textContent = botonApretado;
        }else {
            pantalla.textContent += botonApretado;
        }
    })
    
});
