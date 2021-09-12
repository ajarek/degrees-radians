const wynik = document.querySelector('#wynik')
const btn = document.querySelector('.btn')
const degValue = document.querySelector('#deg')
function oblicz(){

let deg=degValue.value/180

    
 getFraction = (decimal) => {
    for(var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
    let result= ` ${decimal * denominator}/${denominator}`
    return result
  }
 
  wynik.innerHTML=getFraction(deg)+'π'
}
btn.addEventListener('click',oblicz)