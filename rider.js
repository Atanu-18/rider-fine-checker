let helmet = false;
let ins = true;
let lic = false;

let fine = 0;

if (helmet === false) {
    fine += 500;
}

if (ins === false) {
    fine += 500;
}

if (lic === false) {
    fine += 500;
}

console.log(fine);
