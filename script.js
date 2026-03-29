function conversor() {
    let valorOriginal = document.getElementById('valorDigitado').value;
    let valorCorrigido = valorOriginal.replace(',','.') 
    let metros = parseFloat(valorCorrigido);
    if (metros) {
        let centimetros = metros * 100;
        let resultadoFormatado = centimetros.toFixed(2);

        document.getElementById('resultado').innerText = resultadoFormatado;
        let novoItem = document.createElement("li");
        novoItem.innerText = metros + "m = " + resultadoFormatado + "cm";
        let lista = document.getElementById("listaHistorico");
        lista.prepend(novoItem);
    }
}