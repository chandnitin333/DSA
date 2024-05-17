

function selectionSort(arr){
    let temp ;
    for (let i = 0; i < arr.length-1; i++) {
        for(j = i+1 ; j < arr.length ; j++){
            if(arr[i] > arr[j] ){
                temp = arr[i];
                arr[i] =  arr[j]
                arr[j] =  temp;
            }
        }
        
    }

}


let ar = [2,1,3,5,6,3];


selectionSort(ar);

console.log(ar)