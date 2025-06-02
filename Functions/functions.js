function walk(){
    console.log('Walking')
}
function sing(){
    console.log('singing')
}

walk()
sing()

function greet(username){
    console.log('Hello',username)
}
greet('Thandup')
greet('Dad')

function abc(username,age){
    console.log(username)
    return age
}
var returns = abc('Than',18)
console.log(returns)

var xyz = (num)=>{
    if (num%2==0) {
        console.log('even')
    }else{
        console.log('odd')
    }
}
xyz(11)