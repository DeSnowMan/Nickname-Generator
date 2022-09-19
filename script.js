// Figure everything yourself ya lay-zee nerd



document.getElementById("Button!").addEventListener("click", GenName)
document.getElementById("Button1").addEventListener("click", GenAllName)



let NikName = [
    "Rappa",
    "Testosterone",
    "Markynaz",
    "Kynreeve",
    "Rocker",
    "El Bandit",
    "Starrii",
    "Igneous",
    "CooL Swag Money",
    "Jammer",
    "Gabester",
    "Conjurer",
    "Jades",
    "KIlla",
    "Magekill",
    "Amogus"
]

function GenName() {

    let FName = document.getElementById("FN").value;

    let LName = document.getElementById("LNAME").value;
  
    var random = Math.floor(Math.random() * NikName.length);

    let FullName = `${FName} ${NikName[random]} ${LName}`
    
    document.getElementById("N1").innerHTML = FullName;

    document.getElementById("N2").innerHTML = ``;
    document.getElementById("N3").innerHTML = ``;
    document.getElementById("N4").innerHTML = ``;
    document.getElementById("N5").innerHTML = ``;
    document.getElementById("N6").innerHTML = ``;
    document.getElementById("N7").innerHTML = ``;
    document.getElementById("N8").innerHTML = ``;
    document.getElementById("N9").innerHTML = ``;
    document.getElementById("N10").innerHTML = ``;
    document.getElementById("N11").innerHTML = ``;
    document.getElementById("N12").innerHTML = ``;
    document.getElementById("N13").innerHTML = ``;
    document.getElementById("N14").innerHTML = ``;
    document.getElementById("N15").innerHTML = ``;
}


function GenAllName() {

    let FName = document.getElementById("FN").value;

    let LName = document.getElementById("LNAME").value;

    document.getElementById("N1").innerHTML = `${FName} ${NikName[1]} ${LName}`;
    document.getElementById("N2").innerHTML = `${FName} ${NikName[2]} ${LName}`;
    document.getElementById("N3").innerHTML = `${FName} ${NikName[3]} ${LName}`;
    document.getElementById("N4").innerHTML = `${FName} ${NikName[4]} ${LName}`;
    document.getElementById("N5").innerHTML = `${FName} ${NikName[5]} ${LName}`;
    document.getElementById("N6").innerHTML = `${FName} ${NikName[6]} ${LName}`;
    document.getElementById("N7").innerHTML = `${FName} ${NikName[7]} ${LName}`;
    document.getElementById("N8").innerHTML = `${FName} ${NikName[8]} ${LName}`;
    document.getElementById("N9").innerHTML = `${FName} ${NikName[9]} ${LName}`;
    document.getElementById("N10").innerHTML = `${FName} ${NikName[10]} ${LName}`;
    document.getElementById("N11").innerHTML = `${FName} ${NikName[11]} ${LName}`;
    document.getElementById("N12").innerHTML = `${FName} ${NikName[12]} ${LName}`;
    document.getElementById("N13").innerHTML = `${FName} ${NikName[13]} ${LName}`;
    document.getElementById("N14").innerHTML = `${FName} ${NikName[14]} ${LName}`;
    document.getElementById("N15").innerHTML = `${FName} ${NikName[15]} ${LName}`;
}