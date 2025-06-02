var obj1 = {
    user:"thandup",
    age:18
}
var obj2 = {
  user: "Ballu",
  age: 21,
};
var obj3 = {
  user: "Umu",
  age: 21,
};

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj1.user);
console.log(obj2.age);
console.log(obj3.user);


// Function inside object
var obj ={
    greet:function(user){
        console.log('good evening')
        return user
    }
}
console.log(obj.greet('Than'))

// Array of object
var arr = [
    {user:"than",
        age:18
    },
    {
        user:'Dad',
        age:21
    }
]
console.log(arr[1])
console.log(arr[0].user)