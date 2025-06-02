let arr = [10,20,30,40,50]
console.log(arr)
console.log(arr[2]);
console.log(arr.length);
arr.pop()
console.log(arr);
arr.push(50)
console.log(arr);
const num = prompt('Enter num')
arr.push(num)
console.log(arr);
arr.forEach(function(ele){
    console.log(ele,'hey');
})