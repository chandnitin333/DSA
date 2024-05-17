
function PromisePolyFill(executor) {
    let onResolve,
        onReject,
        fulfilled = false,
        rejected = false,
        called = false,
        value;
  
    function resolve(v) {
      fulfilled = true;
      value = v;
  
      if (typeof onResolve === "function") { // for async
        console.log("inside resolve")
        onResolve(value);
        called = true;
      }
    }
  
    function reject(reason) {
      rejected = true;
      value = reason;
  
      if (typeof onReject === "function") {
        onReject(value);
        called = true;
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
  
      if (fulfilled && !called) { // for sync
        console.log("inside then")
        called = true;
        onResolve(value);
      }
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
  
      if (rejected && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  const promise1 = new PromisePolyFill((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        resolve(2)
      }, 1000);
    console.log(3)
  })
  
  promise1.then(res => {
    console.log(res)
  });
  

  const { v4: uuidv4 } = require('uuid');

// Function to generate a UUIDv4
function generateUUIDv4() {
  return uuidv4();
}

// Function to validate a UUIDv4
function isUUIDv4(str) {
  const uuidv4Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return uuidv4Regex.test(str);
}

// Generate a UUIDv4
const myUUID = generateUUIDv4();
console.log('Generated UUIDv4:', myUUID);

// Validate the generated UUID
if (isUUIDv4(myUUID)) {
  console.log('Valid UUIDv4');
} else {
  console.log('Not a valid UUIDv4');
}
