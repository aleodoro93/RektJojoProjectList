const input = prompt('digita aqui');


function validaCampo(recebe){
   const isNotNumber = isNaN(parseInt(recebe))
   const isNotEmpty = recebe.trim()
    if (isNotNumber && isNotEmpty){
        alert('passou')
    }else {
        alert('nao passou')
    }
}
validaCampo(recebe);