function getCount(str) {
    let count = 0
    let vows = {'a':0,
               'e':0,
               'i':0,
               'o':0,
               'u':0}
    let arrstr= str.split('')
    for(const el of arrstr){
      if(el in vows ){
        count = count + 1
      }
    }
    return count;
    
  }