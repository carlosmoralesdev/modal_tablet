function changeHeight() {

    let valorHeight = window.innerHeight
    let array = []
    let nuevoValor = 0;

    if (navigator.userAgent.toUpperCase().includes("IPAD")
        || navigator.userAgent.toUpperCase().includes("IPHONE")
        || navigator.userAgent.toUpperCase().includes("TABLET")
        || navigator.userAgent.toUpperCase().includes("PHONE")
        || navigator.userAgent.toUpperCase().includes("ANDROID")) {


        array = document.getElementsByClassName('modal-body')
        for (let index = 0; index < array.length; index++) {
            let elemento = array[index]
            nuevoValor = valorHeight - ((valorHeight * 0.03 * 2) + (50 * 2) + 60)
            elemento.style.height = nuevoValor + "px"
        }

        //alert("Body: " + nuevoValor + "px, content: " + valorHeight)

        //modal content
        if (!navigator.userAgent.toUpperCase().includes("IPAD")
            || !navigator.userAgent.toUpperCase().includes("TABLET")) {
            array = document.getElementsByClassName('modal-content')
            for (let index = 0; index < array.length; index++) { 
                let elemento = array[index]
                elemento.style.marginTop = (valorHeight * -0.05) + "px"
                elemento.style.marginBottom = (valorHeight * 0.03) + "px"
            }
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

    }



}

window.addEventListener("resize", changeHeight);
document.addEventListener("DOMContentLoaded", changeHeight);
changeHeight()

//document.addEventListener("DOMContentLoaded", changeHeight);