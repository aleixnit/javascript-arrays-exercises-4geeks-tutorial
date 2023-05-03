let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

//creamos un bucle for para recorrer todo el string dado
for (i = 0; i < par.length; i++) {

    //creamos una variable para que cada iteración las mayúsculas sean minúsculas
    const letter = par[i].toLowerCase();
    if (letter === ' ') {
        continue;
    }

    if (counts[letter]) {
        counts[letter]++;
    } else {
        counts[letter] = 1;
    }

}

console.log(counts);