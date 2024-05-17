// function flattenArray(arr) {
//     let result = [];
  
//     function flattenHelper(arr) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           flattenHelper(arr[i]);
//         } else {
//           result.push(arr[i]);
//         }
//       }
//     }
  
//     flattenHelper(arr);
//     return result;
//   }
  
//   // Test the function
//   let inputArray = [1, 3, 6, [4, 7], [[11, 18, 20]]];
//   let outputArray = flattenArray(inputArray);
//   console.log(outputArray);
  let arr = [1, 3, 6, [4, 7], [[11, 18, 20]]];

let strArr ;
  for(let i = 0 ; i < arr.length ;i++){

	if(typeof arr[i] !=='number' &&  arr[i].length > 1 ){

		strArr =+ arr[i].join(',');

	}else{

		strArr  = strArr +','+ arr[i];
	}

}

console.log("===",strArr)