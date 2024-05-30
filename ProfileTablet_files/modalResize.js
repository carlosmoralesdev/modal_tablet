function changeHeight() {
    let valorHeight = window.innerHeight
    let array = []

    array = document.getElementsByClassName('modal-body')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.height = (valorHeight - ((valorHeight * 0.03 * 2) + (50 * 2))) + "px"
        elemento.classList.add("max-height-important")
    }

    //modal content
    array = document.getElementsByClassName('modal-content')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.maxHeight = valorHeight + "px"
        elemento.style.marginTop = (valorHeight * 0.03) + "px"
        elemento.style.marginBottom = (valorHeight * 0.03) + "px"
        elemento.classList.add("max-height-important")
    }

    //modal-header
    array = document.getElementsByClassName('modal-header')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.classList.add("height-50-important")
    }

    //modal-footer
    array = document.getElementsByClassName('modal-footer')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.classList.add("height-50-important")
    }

}

window.addEventListener("resize", changeHeight);
document.addEventListener("DOMContentLoaded", changeHeight);
changeHeight()