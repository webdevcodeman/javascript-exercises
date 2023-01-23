const palindromes = function (str) {
  // let newStr="";
  // const lowerStr=str.toLowerCase();
  // for(let i=0;i<lowerStr.length;i++){
  //   if(lowerStr[i]>='a' && lowerStr[i]<='z'){
  //     newStr+=lowerStr[i];
  //   }
  // }
  // //console.log(newStr);
  // for(let i=0;i<Math.floor(newStr.length);i++){
  //   if(newStr[i]!==newStr[newStr.length-1-i]){
  //     return false;
  //   }
  // }
  // return true;
  const newStr=str.toLowerCase().replace(/[^a-z]/g,"");
  return newStr.split("").reverse().join("")===newStr;
};

// Do not edit below this line
module.exports = palindromes;
