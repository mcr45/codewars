/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

function moveZeros(arr) {
    let x=[]//creo copia, cerco ultimo index tolgo elemento
    let copy=arr.slice()
    
    for(let i=0;i<arr.length;i++){
      let y=copy.indexOf((0))
      if(y===-1){continue}
      else{copy[y]=99
           x.push(y)}
         } 

   // console.log(arr)
    let orzio=arr.filter((it)=>{return it!==0})
   // console.log(orzio)
    let aspetta=[]
    x.forEach((i)=>{aspetta.push(0)})
    let ao=orzio.concat(aspetta)
    console.log(ao)
    return ao
    //let allora=arr.filter((item)=>{item!==0})
   
    // allora.splice()
    //Ao is the best anime of last 5 years. Just accept it
    
  }