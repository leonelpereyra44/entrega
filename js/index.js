
// funcion para comprobar si edad es mayor o igual a 18
const mayorEdad = (edad) => {
    if(edad >= 18){
        return true;
    } else { return false};
}

function calcular(flag){

    let vino = 1000;
    let cigarro = 350;
    let cantCigarro = 0;
    let cantVino = 0;
    let producto = '';

    while(flag == 'si'){
        producto = prompt("Que desea comprar: 'vino' $1000 ó 'cigarro' $350?");
        switch(producto){
            case 'vino':
                cantVino = parseInt(prompt("Cuantos vinos?"));
                totalProductos += vino*cantVino;
                break;
            case 'cigarro':
                cantCigarro = parseInt(prompt("Cuantos cigarros?"));
                totalProductos += cigarro*cantCigarro;
                break;
            default:
                alert("Usted no ingresó un producto válido"); 
                continue;   
        }
        flag = prompt("Desea agregar mas productos ingrese 'si' ó 'esc' para salir");
    }
}

let edad = parseInt(prompt("Porfavor ingrese su edad para corroborar que tiene (18+) años"));

if (mayorEdad(edad) === true){
    alert(`Usted es mayor de edad: ${edad}, disfrute nuestra app`);
    let totalProductos = 0;
    let flag = prompt("Bienvenido, si desea comenzar ingrese 'si', sino ingrese 'esc'");
    if(flag == 'esc'){
        alert("Usted finalizó el programa");
    } else if (flag == 'si'){
        calcular(flag);
        alert(`Usted va a comprar: ${cantVino} Vinos y ${cantCigarro} Cigarros por un total de: $${totalProductos} pesos`);
    }  else { 
        //Elimino la opcion de que ingrese una palabra no especificada
        alert("Si usted no es capaz de ingresar una opción correcta seguramente mintió en su edad, asi que el programa finalizará");
    }

} else {
    alert(`Usted ingresó ${edad}, no cumple con los requisitos de nuestra app (18+)`);
}