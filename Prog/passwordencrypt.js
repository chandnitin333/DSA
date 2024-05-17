const bcrypt = require('bcrypt');

const plaintextPassword = 'Password@123';

// Generate a salt
bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        // Handle error
        return;
    }

    // Hash the password with the generated salt
    console.log("salt", salt)
    bcrypt.hash(plaintextPassword, salt, (err, hash) => {
        if (err) {
            // Handle error
            return;
        }

        // Store the hash in the database or any other storage medium
        console.log('Hashed password OLD :', '$2y$10$B6UvwBH0adXXRyHSY90yHOH/2EzgXiZ8s0poyDmv7jkcU2ZUbWP2i');
        console.log('Hashed password New :', hash);
    });
});

bcrypt.compare(plaintextPassword, "$2y$10$B6UvwBH0adXXRyHSY90yHOH/2EzgXiZ8s0poyDmv7jkcU2ZUbWP2i", (err, result) => {
    if (err) {
        // Handle error
        return;
    }

    if (result) {
        // Passwords match
        console.log('Password is correct');
    } else {
        // Passwords do not match
        console.log('Password is incorrect');
    }
});
/// $2y$10$v.dOIzLa/srVTHzNTbC6jeTc3ocUgXMhm8BEgUeiZSADbwySBpEmq
// $2b$10$8nfdDJWdjUmBdW0A6ij0lePguvqi0uvjALnvmRfVIWKo6oKT1mTE6



let hashedPassword = '$2y$10$hvDoCoPf8KtRuAATvDEAJe/0eHrPJo1Mbx0tKZ99VGkLcrpKrXECq';
const plaintextPassword1 = 'Password@123';
hashedPassword = hashedPassword.replace('$2y$', '$2b$');
console.log("after ==", hashedPassword)
bcrypt.compare(plaintextPassword1, hashedPassword, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    if (result) {
        console.log('Password match!');
    } else {
        console.log('Password does not match!');
    }
});
