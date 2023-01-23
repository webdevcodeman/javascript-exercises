const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  // let arrSum=0;
	// for(let i=0;i<arr.length;i++){
  //   arrSum+=arr[i];
  // }
  // return arrSum;
  return arr.reduce((total,item)=>total+item,0);
};

const multiply = function(arr) {
  return arr.length?arr.reduce((accumulator,item)=>accumulator*item):0;
};

const power = function(base,pow) {
	return base**pow;
};

const factorial = function(num) {
  // let fact=1;
	// if(num===0){
  //   return fact;
  // }
  // for(let i=num;i>1;i--){
  //   fact*=i;
  // }
  // return fact;
  if(num===0 || num===1){
    return 1;
  }else{
    return num*factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
