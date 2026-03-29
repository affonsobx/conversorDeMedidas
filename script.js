function conversor() {
    let valorOriginal = document.getElementById('valorDigitado').value;
    let valorCorrigido = valorOriginal.replace(',','.') 

    let metros = parseFloat(valorCorrigido);
    if (metros) {
        let centimetros = metros * 100;
        document.getElementById('resultado').innerText = centimetros.toFixed(2);
    }
}