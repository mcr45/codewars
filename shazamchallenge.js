function findOdd(A) {
  //happy coding!
  let lbj={}
  A.forEach((n,i,x)=>{lbj[n]=countOc(x,n)})
  console.log(lbj)
  for(let i in lbj){
    if(lbj[i]%2!==0){return Number(i)}
  }
  return 0;
}

function countOc(x,i){
  let num=0
  x.forEach((n)=>{if(n===i){num=num+1}})
  return num
}
