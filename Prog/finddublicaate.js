

// find dublicate string 

str = "Hello am Nitin";

var uniqu = [];
var uniqustr = '';
let eleCount = {};
var k = 0;
for (i = 0; i < str.length; i++) {

    if (!uniqu.includes(str[i].toUpperCase()) && str[i] != ' ') {
        uniqu.push(str[i].toUpperCase());
        uniqustr = uniqustr + str[i];
        eleCount[str[i].toUpperCase()] = 1;
    } else {
        if (str[i] != ' ')
            eleCount[str[i].toUpperCase()] = eleCount[str[i].toUpperCase()] + 1;
    }
}
console.log("==========================unique string =================")
console.log(uniqustr)
console.log("=============================================================================")
console.log(eleCount)
console.log("=============================================================================")


str = str.toLowerCase();
str = str.split('');

for (const iterator of str) {
    console.log(iterator)
    if()
}

