document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
        document.getElementById('showtemp').innerHTML = "Temprature is converted into " + celsius + " degree celcius";
    } else if (celsius != '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        document.getElementById('showtemp').innerHTML = "Temprature is converted into " + fahrenheit + " degree fahrenheit";
    }
    else {
        document.getElementById('showtemp').innerHTML = "Please insert an input";
    }
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('showtemp').innerHTML = '';
}