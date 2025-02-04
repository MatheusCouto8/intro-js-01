function calcular() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA + numB

    document.getElementById("result").innerHTML = result;
}