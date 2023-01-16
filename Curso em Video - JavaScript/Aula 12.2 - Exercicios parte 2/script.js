function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotos/foto_manha.jpg'
        document.body.style.background = 'green'
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fotos/foto_da_tarde.jpg'
        document.body.style.background = 'purple'
    }
    else if (hora >= 18 && hora <= 23) {
        //Boa noite
        img.src = 'fotos/foto_da_noite.jpg'
        document.body.style.background = 'orange'
    }
}