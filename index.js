// // Add your functions here

const a1=[1, 2, 3, -9];

function f1_negative(a){
    return -1*a;
  }

function map(arr, callback_fn){
  let r=[];
  for (let i=0; i<arr.length; i++){
    r.push(callback_fn(arr[i]))
  }  
  return r;
}

map(a1,function(a){return a});

const dune = ["paul", "gurney", "vladimir", "jessica", "chani"];

map(dune,function(a){ return a})

let a3 = [1, 2, 3, -9];

function reduce(arr,callback_fn,initialValue){
  if (!arr.length && initialValue === undefined){
    throw TypeError("Reduce of empty array with no initial value");
  }
  let accumulator= initialValue;
  let index =0;
  if (initialValue === undefined){
    accumulator = arr[0];
    index =1;
  }
  for (; index< arr.length; index++){
    accumulator = callback_fn.call(arr, accumulator, arr[index], index, arr)
  }
  return accumulator;
}

let sourceArray = [1,2,3]
reduce(sourceArray, function(e, memo){return e + memo})