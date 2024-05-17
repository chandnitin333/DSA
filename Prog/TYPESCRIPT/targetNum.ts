

let arr: any = [2, 7, 11, 5, 4]
let target: number = 9

let outPair: any = {}

function getTargetSum(arr: any) {
    let element = arr[0];
    let k :number =0;
    for (let index = 1; index < arr.length; index++) {
       
        if ((element + arr[index]) == target) {
           
            outPair[k++] = [element, arr[index]]
        } else {
            element = arr[index]
        }
        // console.log(index)
    }
}

console.log(getTargetSum(arr))
console.log(outPair)



