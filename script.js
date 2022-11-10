function criarEstrelas () {
  let inNumero = document.getElementById('inNumero')
  let outResultado = document.getElementById('outResultado')

  let num = Number(inNumero.value)
  let estrela = '*'
 
  if (num == 0 || isNaN(num == '')) {
    alert('Digite uma quantidae de linhas')
    inNumero.focus()
    return
  }

  for(let j = 1; j <= num; j++) {

    for (let l = 1; l <= j; l++) {
      if (j == 1) {
        estrela =  '*' 
      }else{
        estrela += '*' 
      }
    }
    
    estrela += "\n"
}

outResultado.textContent = estrela 

}
let btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criarEstrelas)
