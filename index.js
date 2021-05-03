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

function reduce(callback_fn,initialValue){
  if (!this.length && initialValue === undefined){
    throw TypeError("Reduce of empty array with no initial value");
  }
  let accumulator= initialValue;
  let index =0;
  if (initialValue === undefined){
    accumulator = this[0];
    index =1;
  }
  for (; index< this.length; index++){
    accumulator = callback_fn.call(this, accumulator, this[index], index, this)
  }
  return accumulator;
}
