function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO[ Ddados invalidos')
    } else {
        res.innerHTML = `Contando `
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
                
        }
        
    }

}