let arr = [23,34,98,87,67]
// console.log(arr)
let a = arr.map((value)=>{
    console.log(value)
    return value+1
});
console.log(a)


let arr2 = [23,34,98,87,67]
// console.log(arr)
let a2 = arr.map((value,index)=>{
    console.log(value)
    return value + index
});
console.log(a)

let arr3 = [23,34,98,87,67]
// console.log(arr)
let a3 = arr.map((index)=>{
    console.log(index)
    return index 
});
console.log(a)


let arr4 = [23,34,98,87,67]
// console.log(arr)
let a4 = arr.map((array)=>{
    console.log(array)
    return array + 1
});
console.log(a)


let arr5 = [23,34,98,87,67]
// console.log(arr)
let a5 = arr.map((value,index,array)=>{
    console.log(index)
    return value + 1
});
console.log(a)