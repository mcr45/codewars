/* The goal of this exercise is to convert a string to a new string
 where each character in the new string is "(" if that character appears only 
 once in the original string...*/
 /* or ")" if that character appears more than once in the original string. 
 Ignore capitalization when determining if a character is a duplicate. */

 function duplicateEncode(word){
 let arrw=word.toLowerCase().split('')
 let arr1=[]
 let arr2=[]//dupelicat
 let arr3=[]
 for(let i=0;i<arrw.length;i++){
   if(arr1.includes(arrw[i])){
     arr2.push(arrw[i])
   }
   else{
     arr1.push(arrw[i])
   }}
 for(let y=0;y<arrw.length;y++){
     if(arr2.includes(arrw[y])){
       arr3[y]=')'
     }
     else{arr3[y]='('}
   }
 return arr3.join('')
  
}
