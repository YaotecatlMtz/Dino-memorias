function cleanStr(str){
    str = str.split('/')[1];
    return str = str.split('.')[0];;
}

let cadena = 'src/espinosaurio.jpg';
cadena = cleanStr(cadena);
console.log(cadena);