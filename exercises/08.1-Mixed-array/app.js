let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

//creamos un array donde se va a guardar los tipos de datos del array original.
const newArray = [];

// recorremos cada elemento del array con el bucle for
for(i = 0; i < mix.length; i++) {
    arr.push(typeof mix[i]);
}

console.log(newArray);