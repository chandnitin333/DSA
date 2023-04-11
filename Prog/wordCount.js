


let str ="This is the first function";


function getWordCount(str){
    strArr = str.split(' ');
    let count =1;
    console.log(strArr.length);


    for(let i=0; i<= str.length; i++){
        if(str[i]==' '){
            count++;
        }
    }

    console.log("COUNT : ",count)
}

getWordCount(str);
