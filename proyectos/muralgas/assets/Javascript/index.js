// la idea es comenzar a construir granjas que floten para producir abundante alga y crear espacios para alimentar peces y que puedan ser el alimento de la especie humana y crear un modelo de suscripcion para ventas de peces, en el que despues puedan ser vendidos como especie de bonos de pescado, dentro de la plataforma

// Calculadora de cuanto sube el nivel del mar por año
let cuantoSubeNivelDelMar = 3.2; //milimetros

let nivelDelMarEnCM = cuantoSubeNivelDelMar * 0.1;

let aumentaraEntreMenor = 0.8; //metros
let aumentaraEntreMayor = 2; //metros

let crecimientoAnualDelMar = (years) => {
    let nivelCero = 0;
    let aumentoNivelDelMarEnXAños = (nivelCero + aumentaraEntreMayor) * years;
    return  nivelDelMar = (aumentoNivelDelMarEnXAños * 0.1);
};

let futuroNivelDelMar = crecimientoAnualDelMar(10);
console.log(futuroNivelDelMar + ' Mas alto');
