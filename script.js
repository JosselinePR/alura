function encriptarTexto() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
}
