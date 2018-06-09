// d4
var d4rollbutton = document.querySelector("button.d4rollbutton");
var d4resultoutput = document.querySelector("td.d4resultoutput");
function d4rollerfunc() {
    var d4count = document.querySelector("input.d4count").value;
    var d4random = Math.floor(Math.random() * 4) + 1;
    var d4modifier = document.querySelector("input.d4modifier").value;
    if (d4modifier > 0) {
        return parseFloat(d4count) * parseFloat(d4random) + parseFloat(d4modifier);
    } else {
        return parseFloat(d4count) * parseFloat(d4random);
    }
}
d4rollbutton.addEventListener('click', () => {
    d4resultoutput.innerHTML = d4rollerfunc();
    d4rollbutton.innerHTML = "Re-Roll";
})

// d6
var d6rollbutton = document.querySelector("button.d6rollbutton");
var d6resultoutput = document.querySelector("td.d6resultoutput");
function d6rollerfunc() {
    var d6count = document.querySelector("input.d6count").value;
    var d6random = Math.floor(Math.random() * 6) + 1;
    var d6modifier = document.querySelector("input.d6modifier").value;
    if (d6modifier > 0) {
        return parseFloat(d6count) * parseFloat(d6random) + parseFloat(d6modifier);
    } else {
        return parseFloat(d6count) * parseFloat(d6random);
    }
}
d6rollbutton.addEventListener('click', () => {
    d6resultoutput.innerHTML = d6rollerfunc();
    d6rollbutton.innerHTML = "Re-Roll";
})

// d8
var d8rollbutton = document.querySelector("button.d8rollbutton");
var d8resultoutput = document.querySelector("td.d8resultoutput");
function d8rollerfunc() {
    var d8count = document.querySelector("input.d8count").value;
    var d8random = Math.floor(Math.random() * 8) + 1;
    var d8modifier = document.querySelector("input.d8modifier").value;
    if (d8modifier > 0) {
        return parseFloat(d8count) * parseFloat(d8random) + parseFloat(d8modifier);
    } else {
        return parseFloat(d8count) * parseFloat(d8random);
    }
}
d8rollbutton.addEventListener('click', () => {
    d8resultoutput.innerHTML = d8rollerfunc();
    d8rollbutton.innerHTML = "Re-Roll";
})

// d10
var d10rollbutton = document.querySelector("button.d10rollbutton");
var d10resultoutput = document.querySelector("td.d10resultoutput");
function d10rollerfunc() {
    var d10count = document.querySelector("input.d10count").value;
    var d10random = Math.floor(Math.random() * 10) + 1;
    var d10modifier = document.querySelector("input.d10modifier").value;
    if (d10modifier > 0) {
        return parseFloat(d10count) * parseFloat(d10random) + parseFloat(d10modifier);
    } else {
        return parseFloat(d10count) * parseFloat(d10random);
    }
}
d10rollbutton.addEventListener('click', () => {
    d10resultoutput.innerHTML = d10rollerfunc();
    d10rollbutton.innerHTML = "Re-Roll";
})

// d12
var d12rollbutton = document.querySelector("button.d12rollbutton");
var d12resultoutput = document.querySelector("td.d12resultoutput");
function d12rollerfunc() {
    var d12count = document.querySelector("input.d12count").value;
    var d12random = Math.floor(Math.random() * 12) + 1;
    var d12modifier = document.querySelector("input.d12modifier").value;
    if (d12modifier > 0) {
        return parseFloat(d12count) * parseFloat(d12random) + parseFloat(d12modifier);
    } else {
        return parseFloat(d12count) * parseFloat(d12random);
    }
}
d12rollbutton.addEventListener('click', () => {
    d12resultoutput.innerHTML = d12rollerfunc();
    d12rollbutton.innerHTML = "Re-Roll";
})

// d20
var d20rollbutton = document.querySelector("button.d20rollbutton");
var d20resultoutput = document.querySelector("td.d20resultoutput");
function d20rollerfunc() {
    var d20count = document.querySelector("input.d20count").value;
    var d20random = Math.floor(Math.random() * 20) + 1;
    var d20modifier = document.querySelector("input.d20modifier").value;
    if (d20modifier > 0) {
        return parseFloat(d20count) * parseFloat(d20random) + parseFloat(d20modifier);
    } else {
        return parseFloat(d20count) * parseFloat(d20random);
    }
}
d20rollbutton.addEventListener('click', () => {
    d20resultoutput.innerHTML = d20rollerfunc();
    d20rollbutton.innerHTML = "Re-Roll";
})

// d100
var d100rollbutton = document.querySelector("button.d100rollbutton");
var d100resultoutput = document.querySelector("td.d100resultoutput");
function d100rollerfunc() {
    var d100count = document.querySelector("input.d100count").value;
    var d100random = Math.floor(Math.random() * 100) + 1;
    var d100modifier = document.querySelector("input.d100modifier").value;
    if (d100modifier > 0) {
        return parseFloat(d100count) * parseFloat(d100random) + parseFloat(d100modifier);
    } else {
        return parseFloat(d100count) * parseFloat(d100random);
    }
}
d100rollbutton.addEventListener('click', () => {
    d100resultoutput.innerHTML = d100rollerfunc();
    d100rollbutton.innerHTML = "Re-Roll";
})