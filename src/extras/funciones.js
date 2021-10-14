export const primeraLetraMayuscula = (cadena) => {
    const primerCaracter = cadena.charAt(0).toUpperCase();
    const restoCadena = cadena.substring(1,cadena.length);
    return primerCaracter.concat(restoCadena);
}













//https://parzibyte.me/blog/2020/03/16/javascript-primera-letra-mayuscula/