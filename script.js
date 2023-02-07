function myFunction() {
    let x = document.getElementById("myText").value;
    let pounds = 551.5;
    let dollar = 460.92;
    let euro = 492.37;
    let Pconvert = x * pounds;
    document.getElementById("Pounds").innerHTML = "Pounds:  " + Pconvert;
    let Dconvert = x * dollar;
    document.getElementById("Dollar").innerHTML = "Dollar:  " + Dconvert;
    let Econvert = x * euro;
    document.getElementById("Euro").innerHTML = "Euro:  " + Econvert;
}    
