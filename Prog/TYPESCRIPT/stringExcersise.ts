/**
 *  Reverse every word in give string not a sentence
 */

let str: string = "welcome to java script code"

let arrStr: Array<string> = str.split(" ")

let outArr: Array<string> = []

for (let i = 0; i < arrStr.length; i++) {
    const element = arrStr[i];
    outArr.push(element.split('').reverse().join(''));
}
console.log("Reverse word a sentence : ", outArr.join(' '))


/**
 *  Find smallest string in below array
 */

let animal: Array<string> = ['dog', 'cat', 'bride', 'elephant'];



let smallStr: string = animal.reduce((acc: string, crr: string): string => {

    return (acc.length < crr.length) ? acc : crr;
}, animal[0]);

console.log("Smallest Word  : ", smallStr)

/**
 * Find palindrome word in given string array
 * 
 */


let strInt: Array<string> = ['radar', 'hello', 'level', 'elephant', 'nitin'];
let paliStr: Array<string> = []
for (let chr of strInt) {
    let revStr = chr.split('').reverse().join('')
    if (revStr == chr) {
        paliStr.push(chr)
    }
}

console.log("palindrome words : ", paliStr);


/**
 * Create function check string anagram
 */

let str1: string = "Listen";
let str2: string = "Silent";


function checkAnagram(str1: string, str2: string): boolean {
    let strSort1 = str1.toLowerCase().split('').sort().join('');
    let strSort2 = str2.toLowerCase().split('').sort().join('');
    if (strSort1 === strSort2) {
        return true
    }
    return false;
}


console.log("String is Anagram  :: ", checkAnagram(str1, str2));



/**
 * Get all books given  array object
 */


let friends: Array<object> = [
    {
        name: 'ABC',
        age: 18,
        books: [
            'Bibble', 'Harry porter'
        ]
    },
    {
        name: 'XYZ',
        age: 20,
        books: [
            'war of peace', 'Romeo anf juliet'
        ]
    },
    {
        name: 'PPP',
        age: 25,
        books: [
            'The word if rings', 'The Shining'
        ]
    }
]

let booksArr: object = friends.reduce((acc: any, currVal: any): Array<object> => {
   
    return [...<[]>acc, ...<[]>currVal.books]
   

}, [])

console.log("All Books :: ", booksArr)