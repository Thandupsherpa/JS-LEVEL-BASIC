var bulb = document.querySelector('#bulb')
var btn = document.querySelector('#btn1')
var val = 0
btn.addEventListener('click',()=>{
    if(val == 0){
    bulb.style.backgroundColor = "yellow"
    bulb.style.border = "none"
    bulb.style.shadow = "200px"
    btn.style.backgroundColor = 'red'
    btn.innerHTML = "   Switch off"
    val = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        bulb.style.border = "2px solid black"
        btn.style.backgroundColor = "green"
        btn.innerHTML = "Switch on"
        val = 0
        
    }
})