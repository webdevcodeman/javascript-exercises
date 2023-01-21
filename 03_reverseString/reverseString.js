const reverseString = function(oStr) {
  // let rStr="";
  // for(let i=oStr.length-1;i>=0;i--){
  //   rStr+=oStr[i];
  // }
  // return rStr;
  return oStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
