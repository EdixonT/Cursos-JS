//Ejercicio Crear una funcion que diga en que parte de la vida se esta en base a la edad que se pase como parametro


//Aqui se hara la funcion que hara todo el proceso de decir en que edad estas
function edad() {
    // se crea una const, que nos permitira agregar la edad que queremos calcular, y se coloca Number, para que solo sea tipo number lo que acepte
    const edad = Number(prompt('Coloque su edad:'));
    
    //aqui se hara la funcion que calculara en que edad me encuentro
    function niño() {
        if (edad <= 10){
            alert(`Tengo ${edad} años y soy un Niño`); 
        }else if (edad > 10 && edad <=17){
            alert(`Tengo ${edad} años y soy un Adolescente`); 
        } else if(edad > 17 && edad <= 55){
            alert(`Tengo ${edad} años y soy un Adulto`); 

        } else if (edad > 55){
            alert(`Tengo ${edad} años y soy un Señor`); 
        }
             
    }
    niño();
}

edad();