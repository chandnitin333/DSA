# JavaScript Array Methods & Polyfills Interview Questions

# 1. Array `map()` Function

## Problem Statement
Create a new array where each element is multiplied by `3` using the `map()` function.

```javascript
const nums = [2, 3, 4, 5, 4, 10];

const multiplyThree = nums.map((val) => {
    return val * 3;
});

console.log(multiplyThree);
```

## Output

```javascript
[6, 9, 12, 15, 12, 30]
```

---

# 2. Array `filter()` Function

## Problem Statement
Return only even numbers from the array using `filter()`.

```javascript
const nums = [2, 3, 4, 5, 4, 10];

const evenArr = nums.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);
```

## Output

```javascript
[2, 4, 4, 10]
```

---

# 3. Polyfill for `map()`

## Problem Statement
Create your own custom implementation of the `map()` function.

```javascript
Array.prototype.myMap = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
};

const nums = [2, 3, 4, 5];

let outArr = nums.myMap((val) => {
    return val * 3;
});

console.log(outArr);
```

## Output

```javascript
[6, 9, 12, 15]
```

---

# 4. Polyfill for `filter()`

## Problem Statement
Create your own custom implementation of the `filter()` function.

```javascript
Array.prototype.myFilter = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
};

const nums = [2, 3, 4, 5, 4, 10];

let filArr = nums.myFilter((val) => {
    return val % 2 === 0;
});

console.log(filArr);
```

## Output

```javascript
[2, 4, 4, 10]
```

---

# 5. Array `reduce()` Function

## Problem Statement
Find the sum of all elements using `reduce()`.

```javascript
const nums = [2, 3, 4, 5, 4, 10];

let sumArr = nums.reduce((acc, curVal) => {
    return acc + curVal;
}, 0);

console.log(sumArr);
```

## Output

```javascript
28
```

---

# 6. Polyfill for `reduce()`

## Problem Statement
Create your own custom implementation of the `reduce()` function.

```javascript
Array.prototype.myReduce = function (cb, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {

        accumulator = accumulator !== undefined
            ? cb(accumulator, this[i], i, this)
            : this[i];
    }

    return accumulator;
};

const nums = [2, 3, 4, 5, 4, 10];

let myPSum = nums.myReduce((acc, curVal) => {
    return acc + curVal;
}, 0);

console.log(myPSum);
```

## Output

```javascript
28
```

---

# 7. Difference Between `map()` and `forEach()`

## Problem Statement
Understand the difference between `map()` and `forEach()`.

```javascript
const nums = [2, 3, 4, 5];

const multiplyTwo = nums.map((val) => {
    return val * 2;
});

nums.forEach((val, i) => {
    nums[i] = val * 2;
});

console.log("map:", multiplyTwo);
console.log("forEach:", nums);
```

## Output

```javascript
map: [4, 6, 8, 10]
forEach: [4, 6, 8, 10]
```

---

# 8. Student Interview Questions

```javascript
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 }
];
```

---

# Question 1

## Problem Statement
Return only student names in uppercase.

```javascript
let studentNames = students.map((student) =>
    student.name.toUpperCase()
);

console.log(studentNames);
```

---

# Question 2

## Problem Statement
Return details of students who scored more than `60` marks and whose roll number is greater than `15`.

```javascript
let details = students.filter((student) => {
    return student.marks > 60 && student.rollNumber > 15;
});

console.log(details);
```

---

# Question 3

## Problem Statement
Find the total marks of all students.

```javascript
let sumOfMarks = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0);

console.log(sumOfMarks);
```

---

# Question 4

## Problem Statement
Return only the names of students who scored more than `60`.

```javascript
const names = students
    .filter((student) => student.marks > 60)
    .map((student) => student.name);

console.log(names);
```

---

# Question 5

## Problem Statement
Return total marks of students after adding `20` marks to students who scored less than `60`, and then calculate total marks of students scoring more than `60`.

```javascript
let totalMarks = students
    .map((student) => {

        if (student.marks < 60) {
            student.marks += 20;
        }

        return student;
    })
    .filter((student) => student.marks > 60)
    .reduce((acc, curr) => {
        return acc + curr.marks;
    }, 0);

console.log(totalMarks);
```

---

# Important Interview Notes

## map()
- Used for transforming data
- Returns new array

## filter()
- Used for conditional filtering
- Returns new filtered array

## reduce()
- Used to reduce array into single value
- Can calculate:
  - Sum
  - Average
  - Object grouping
  - Flatten array

## Polyfills
- Custom implementations of built-in methods
- Frequently asked in JavaScript interviews
