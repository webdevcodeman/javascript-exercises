const removeFromArray = function(arr,...args) {
  // for(const arg of args){
  //   const index=arr.indexOf(arg);
  //   if(index!==-1){
  //     arr.splice(index,1);
  //   }
  // }
  // return arr;
  // let newArr=[];
  // arr.forEach((item)=>{
  //   if(!args.includes(item)){
  //     newArr.push(item);
  //   }
  // });
  // return newArr;
  return arr.filter((val)=>{return !args.includes(val);});
};

// Do not edit below this line
module.exports = removeFromArray;
