function changeHeight() {
    let valorHeight = window.innerHeight
    let array = []
    let nuevoValor = 0;

    array = document.getElementsByClassName('modal-body')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        //elemento.classList.add("max-h100vh")
        nuevoValor = valorHeight - ((valorHeight * 0.03 * 2) + (50 * 2) + 60)
        elemento.style.setProperty("height", "50px", "important")
        elemento.style.height = nuevoValor + "px"
    }

    alert("Body: " + nuevoValor + "px, content: " + valorHeight)

    //modal content
    array = document.getElementsByClassName('modal-content')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.marginTop = (valorHeight * 0.03) + "px"
        elemento.style.marginBottom = (valorHeight * 0.03) + "px"
    }

    //modal-header
    array = document.getElementsByClassName('modal-header')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.setProperty("height", "50px", "important")
    }

    //modal-footer
    array = document.getElementsByClassName('modal-footer')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.setProperty("height", "50px", "important")
    }

    try{
        let valor = document.querySelector('.navigation-bar').clientHeight
        alert("Altura de la barra de navegacion del mobile: " + valor)
    }catch(e){
        alert(e) 
    }

}

window.addEventListener("resize", changeHeight);
document.addEventListener("DOMContentLoaded", changeHeight);
changeHeight()

//document.addEventListener("DOMContentLoaded", changeHeight);