let celsiusel = document.getElementById("celsius");
let farenhiteel = document.getElementById("farenhite");
let kelvineel = document.getElementById("kelvine");

function computtem(event) {
    let currentvalue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvineel.value = (currentvalue + 273.15).toFixed(2);
            farenhiteel.value = (currentvalue * 1.8 + 32)
            break;
        case "farenhite":
            celsiusel.value = ((currentvalue - 32) / 1.8).toFixed(2);
            kelvineel.value = ((currentvalue - 32) / 1.8 + 273.15)
            break;
        case "kelvine":
            celsiusel.value = (currentvalue - 273.15).toFixed(2);
            farenhiteel.value = ((currentvalue - 273.15) * 1.8 + 32)
            break;
        default:
            break;
    }
}
