function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
        var n = Number(num.value)

        tab.innerHTML = ''
        for (var i=0; i<=10; i++) {
            var item = document.createElement('option')

            item.text = `${i} x ${n} = ${i * n}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}