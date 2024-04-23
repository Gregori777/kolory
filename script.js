let przycisk = document.getElementById("przycisk")
let h = document.getElementById("liczba")
let k1 = document.getElementById("k1")
let k2 = document.getElementById("k2")
let k3 = document.getElementById("k3")
let k4 = document.getElementById("k4")
let k5 = document.getElementById("k5")

function kolor(){
    k1.style.backgroundColor = "hsl("+h.value+", 100%, 50%)"
    k2.style.backgroundColor = "hsl("+h.value+", 80%, 50%)"
    k3.style.backgroundColor = "hsl("+h.value+", 60%, 50%)"
    k4.style.backgroundColor = "hsl("+h.value+", 40%, 50%)"
    k5.style.backgroundColor = "hsl("+h.value+", 20%, 50%)"
}




