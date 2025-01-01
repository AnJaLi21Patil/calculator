function pick(val) {
    if (document.getElementById("result").value) {
        document.getElementById("result").value += val; // pick the value and write in text input
    } else {
        document.getElementById("result").value = val;
    }
}

function solve() {
    var x = document.getElementById("result").value;
    if (x) {
        var y = eval(x);
        document.getElementById("result").value = y;
    } else {
        document.getElementById("result").value = "0";
    }
}

function clr() {
    if (document.getElementById("result").value) {
        document.getElementById("result").value = "";
    } else {
        document.getElementById("result").value = " ";
    }
}
