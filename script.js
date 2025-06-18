const form = document.querySelector(".form-contato")
const masc = document.querySelector (".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}


function esconderForm() {
    form.style.left = "-60%"
    form.style.transform = "translateX(0)"
    masc.style.visibility = "hidden"
}