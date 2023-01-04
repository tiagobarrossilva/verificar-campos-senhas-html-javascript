function verificarSenhas(){

    function removerRepetidos(s1){
        let tamanhoSenha = s1.length
        let lista = []
        lista.push(s1[0])
        for(let i = 1; i<=tamanhoSenha; i++){
            let v = true
            for(let i2 = 0; i2<=lista.length; i2++){
                if(s1[i]===lista[i2]){
                    let v = false
                    break
                }
            }
            if(v){
                lista.push(s1[i])
            }
        }
        return lista
    }

    function verificarPermitidos(lista){
        let permitidos = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        for(let i = 0; i<=lista.length; i++){
            let v = false
            for(let i2 = 0; i2<=permitidos.length; i2++){
                if(lista[i] === permitidos[i2]){
                    v = true
                    break
                }
            }
            if(v === false){
                return false
            }
        }
        return true
    }

    let s1 = document.querySelector('#senha1').value
    let s2 = document.querySelector('#senha2').value

    // verificas se algum campo esta em branco
    if(s1.length === 0 || s2.length === 0){
        alert('existe um ou mais campos em branco')
    }
    else{
        // verifica se os campos são iguais
        if(s1 === s2){
            // verifica se os caracteres são validos
            let caracteresValidos = verificarPermitidos(removerRepetidos(s1))
            if(caracteresValidos){
                // enviar formulario post
                document.forms["formulario1"].submit(postMessage)
            }
            else{
                alert('a senha contem caractere não permitido')
            }
        }
        else{
            alert('as senhas estão diferentes')
        }
    }
}