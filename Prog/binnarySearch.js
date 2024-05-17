

function binarySearch(arr,x){
   
   let low = 0 
   let high =  arr.length -1
  
    while(low <= high){
        mid =  Math.floor((low+ high) / 2);
        if(arr[mid] == x){
            return mid
        }else if(arr[mid] < x){
            low = mid + 1
        }else{
            high =  mid -1
        }
       
    }
   
   
}
let ar = [2,1,3,5,6,3];

console.log("pos: ",binarySearch(ar,5))