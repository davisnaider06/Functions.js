function inverter(lista) {
    i = lista.length -1;
    while (i>=0) {
       console.log(i, ':', lista[i]);
       i--;
}
}
    
console.log('lista:');
numeros=[1, 2, 3, 4, 5];
inverter(numeros);

console.log('\nLista');
numeros= [3, 4, 5];
inverter(numeros);