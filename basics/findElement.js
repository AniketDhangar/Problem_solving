//search for element in array  and return index of it , if it is not there return -1

const arr = [4,5,7,1,7,0,10,9,15,10]

function seachEle(arr,target){
    
    for(let i=0;i<=arr.length -1; i++){
        if(arr[i] === target){
            return i
        }
      
    }
      return -1
}
console.log(seachEle(arr,7))