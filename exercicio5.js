function inverte (s) {
    aux='';
    i=0;
    while (i<s.length) {
        aux=s[i]+aux;
        i++;
    }
    return aux;
}
i=inverte('ola');
console.log("Invertido:", i);

i=inverte('tchau');
console.log("Invertido:", i);
