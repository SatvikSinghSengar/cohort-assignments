// arrays

// for of => do not work on objects .
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num) // automatically line break
}

const str = "satvik"
for (const char of str) {
   //  console.log(char)
}

// for in
const myobj = {
    1:"a",
    2:"b"
}
for (const key in myobj) {
  // console.log(myobj[key]);
}

// for each

arr.forEach(function (num) {
    // console.log(num)
})

arr.forEach((num,index,arr) => {
    console.log(num);
    console.log(index);
    console.log(arr); // we can access arr while iterating it.
})



// objects