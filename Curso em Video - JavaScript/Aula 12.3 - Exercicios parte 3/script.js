function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('cu')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto/01_crianca_masculino.jpg')
            }
            else if (idade > 10 && idade <= 30) {
                //Adolescente
                img.setAttribute('src', 'foto/02_jovem_masculino.jpg')
            }
            else if (idade > 30 && idade <= 59) {
                //Adulto
                img.setAttribute('src', 'foto/03_adulto_masculino.jpg')
            }
            else if (idade > 60) {
                //Idoso
                img.setAttribute('src', 'foto/04_idoso_masculino.jpg')
            }
        }
        else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto/01_crianca_feminino.jpg')
            }
            else if (idade > 10 && idade <= 30) {
                //Adolescente
                img.setAttribute('src', 'foto/02_jovem_feminino.jpg')
            }
            else if (idade > 30 && idade <= 59) {
                //Adulto
                img.setAttribute('src', 'foto/03_adulto_feminino.jpg')
            }
            else if (idade > 60) {
                //Idoso
                img.setAttribute('src', 'foto/04_idoso_feminino.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} ${idade}`
        res.appendChild(img)
    }
}