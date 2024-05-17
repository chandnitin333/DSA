

function bubbleSort(arr){
    let temp = 0;
    for(let i = 0  ; i < arr.length ; i++){
        for (let j = 0; j < arr.length - i -1; j++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;  
            }
            
        }
    }


}

let ar = [2,1,3,5,6,3];


bubbleSort(ar);

console.log(ar)
