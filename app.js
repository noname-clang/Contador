//1
let count = 0 
const value = document.getElementById('value')
const buteco = document.getElementById('buteco')
const body = document.getElementsByTagName("BODY")[0];
const btns = document.querySelectorAll('.btn')

// console.log(value)
// console.log(btns)

btns.forEach(function(btn)
{
 btn.addEventListener('click',function()
 {

    const style =  event.currentTarget.classList
    if(style.contains('decrase'))
    count--
    else if(style.contains('reset'))
    count =0
    else if(style.contains('increse'))
    count++
    else if(style.contains('darkmode'))
    {
        body.style.backgroundColor ="#000000"
        body.style.color ="#ffffff"
        btns.style.color = "#ffffff"
        buteco.style.color = "#ffffff"
    }
   
    value.textContent = count
    if(count < 0 )
    value.style.color  = "#ff0000"
    else if ( count > 0 )
    value.style.color  = "#00FF00"
    else if ( count == 0 )
    value.style.color  = "#102A42"
 })
})