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

        let divProductos = document.getElementById("uploadProduct")
        if (divProductos) {
            console.log("divProductos ", divProductos)
            for (let i = 0; i < divProductos.childNodes.length; i++) {
                let elemento = divProductos.childNodes[i]
                if (elemento.id) {//si Posee un atributo id
                    console.log("elemento ", elemento)

                    for (let j = 0; j < elemento.childNodes.length; j++) {

                        let elementoInterno = elemento.childNodes[j]
                        console.log("elementoInterno: ", elementoInterno)
                        if (elementoInterno.childNodes) {

                            if (elementoInterno.childNodes[j].classList.contains("modal-dialog")) {
                                console.log("modalDialog: ", elementoInterno.childNodes[1])
                                let modalContent = elementoInterno.childNodes[1]
                                if (modalContent) {
                                    modalContent.style.marginBottom = "";
                                    modalContent.style.setProperty("max-height", "90vh", "important")
                                }
                            }
                        }

                    }


                }
            }
        }

    }



}

window.addEventListener("resize", changeHeight);
document.addEventListener("DOMContentLoaded", changeHeight);
changeHeight() 