function changeHeight() {
    let valorHeight = window.innerHeight
    let array = []
    array = document.getElementsByClassName('modal-body')
    for (let index = 0; index < array.length; index++) {
        let elemento = array[index]
        elemento.style.height = (valorHeight - 180) + "px"
    }
}

window.addEventListener("resize", changeHeight);
document.addEventListener("DOMContentLoaded", changeHeight);
changeHeight()