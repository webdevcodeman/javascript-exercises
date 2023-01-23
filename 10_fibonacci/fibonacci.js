const fibonacci = function(num) {
  if(num<0){
    return "OOPS";
  }
  if(num==0){
    return 0;
  }
  if(num==1 || num==2){
    return 1;
  }
  let prev=1;
  let curr=1;
  let next;
  for(let i=3;i<=num;i++){
    next=prev+curr;
    prev=curr;
    curr=next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
