/**

Write a function solution that, given a string S of length N, returns any palindrome which can be obtained by replacing all of the question marks in S by lowercase letters (a'-z). If no palindrome can be obtained, the function should return the string "NO".
A palindrome is a string that reads the same both forwards and backwards. Some examples of palindromes are: "kayak", "radar", "mom".
Examples:
1. Given S = "?ab??a", the function should return "aabbaa".
2. Given S = "bab??a", the function should return "NO".
3. Given S = "?a?", the function may return "aaa". It may also return "zaz", among other 
*/


function solution(S: string): string {
    let strArr = S.split("");
    let strLen = S.length;
    for (let i = 0; i < strLen / 2; i++) {
        const oppositeIndex = strLen - 1 - i;
        if (strArr[i] === "?" && strArr[oppositeIndex] === "?") {

            strArr[i] = "a";
            strArr[oppositeIndex] = "a";

        } else if (strArr[i] === "?") {

            strArr[i] = strArr[oppositeIndex];

        } else if (strArr[oppositeIndex] === "?") {

            strArr[oppositeIndex] = strArr[i];

        } else if (strArr[i] !== strArr[oppositeIndex]) {

            return "NO";
        }
    }

    return strArr.join("")
}

console.log(solution("?ab??a"))