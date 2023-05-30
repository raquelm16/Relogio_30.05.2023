function Somar () {
    const hora1 = Number(document.getElementById("hora1").value)

    const hora2 = Number(document.getElementById("hora2").value)

    const min1 = Number(document.getElementById("min1").value)

    const min2 = Number(document.getElementById("min2").value)
    
    let resHora = hora1 + hora2

    let resMin = min1 + min2

    
    if (resMin >= 60) {
        document.getElementById("resHora").value = resHora + 1
        document.getElementById("resMin").value = resMin - 60
    } 
    else {
        document.getElementById("resHora").value = resHora
        document.getElementById("resMin").value = resMin
    }
    
};

function Subtrair () {
    
    const hora1 = Number(document.getElementById("hora1").value)

    const hora2 = Number(document.getElementById("hora2").value)

    const min1 = Number(document.getElementById("min1").value)

    const min2 = Number(document.getElementById("min2").value)
    
    let resHora = hora1 - hora2

    let resMin = min1 - min2


    if (resMin <= 60) {
        document.getElementById("resHora").value = resHora - 1
        document.getElementById("resMin").value = resMin + 60
    } 
    else {
        document.getElementById("resHora").value = resHora
        document.getElementById("resMin").value = resMin
    }

};