


const numeros = [3, 9, 5, 2, 7];




const numeroPar = numeros.find(num => num % 2 === 0);




console.log("el numero encontrado es:", numeroPar);
const nombres = ['Ana', 'Juan', 'Maria', 'Luisa', 'Pedro', 'Pablo'];




const nombresLargos = nombres.filter(nombre => nombre.length > 5);




console.log("Nombres con más de 5 letras:", nombresLargos);

const fahrenheits = [32, 68, 86, 104, 212];




const celsius = fahrenheits.map(f => (f - 32) * 5 / 9);




console.log("Temperaturas en C°:", celsius);


