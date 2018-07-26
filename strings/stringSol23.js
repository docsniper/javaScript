function strip(str) {
    return str.replace(/\s+|\s+$/, '');
}

console.log(strip('KK '));
console.log(strip(' KK'));
console.log(strip(' KK '));

