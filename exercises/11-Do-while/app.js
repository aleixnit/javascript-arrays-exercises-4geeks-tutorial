let i = 20;

do {
    // Magic goes here;
    if (i % 5 === 0) { // si es múltiplo de 5
        console.log(i + '!');
      } else {
        console.log(i);
      }
    i--;
} while (i > 0);
console.log('LIFTOFF');