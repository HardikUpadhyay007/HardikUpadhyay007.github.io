//closures
function main() {
    let b = 1;
    function sub() {
        return b++;
    }
    return sub;
}

let f1 = main();
console.log(f1());
console.log(f1());
console.log(f1());
