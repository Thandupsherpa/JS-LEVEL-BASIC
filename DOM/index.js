var a = document.querySelector('button')
var b = document.querySelector('p')
var c = prompt('enter text')

a.addEventListener('click',()=>{
    b.innerHTML = c
    a.innerHTML = 'changed'
})

