// Leap Year Checker using "if" statement
// function isLeapYear(year) {
//     // Check if the year is divisible by 400
//     if (year % 400 === 0) {
//         return true;
//     }
//     // Check if the year is divisible by 100
//     if (year % 100 === 0) {
//         return false;
//     }
//     // Check if the year is divisible by 4
//     if (year % 4 === 0) {
//         return true;
//     }
//     // If none of the above conditions are met, it's not a leap year
//     return false;
// }

// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(2023)); // false


// Leap Year Checker using "Switch"
function isLeapYear(year) {
    // Calculate the leap year status based on divisibility
    const check = (year % 400 === 0) ? 400 :
                  (year % 100 === 0) ? 100 :
                  (year % 4 === 0) ? 4 : 
                  0;

    // Use a switch statement based on the computed value
    switch (check) {
        case 400:
            return true; // Divisible by 400
        case 100:
            return false; // Divisible by 100 but not by 400
        case 4:
            return true; // Divisible by 4 but not by 100
        default:
            return false; // Not divisible by 4
    }
}

// Example usage
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false





// // Ticket Price using "if else statement"
function ticket_price(age) {

      // Check if age is a number and is a finite number
      if (isNaN(age) || !isFinite(age) || age < 0) {
        console.log("Invalid age");
        return;
    }

    //   // Convert age to a number if it's a valid string representation of a number
    //   age = Number(age);

        if (age <= 12) {
        console.log("10")

    } else if (age >= 13 && age <= 17) {
        console.log("15")

    } else if (age >= 18) {
        console.log("20")

    } else {
        console.log("Invalid age")
    } 
}

ticket_price(21);
ticket_price(30);
ticket_price(3);
ticket_price(-5);
ticket_price();



// Recursion: (Fibunacci Sequence)

function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
console.log(fibonacci(0)); 
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(3)); 
console.log(fibonacci(4)); 
console.log(fibonacci(5)); 
console.log(fibonacci(6)); 



// Recursion: (Palindrome Checker

function isPalindrome(str) {
    // Helper function to normalize the string
    function normalizeString(s) {
        // Remove non-alphanumeric characters and convert to lowercase
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    // Normalize the input string
    const normalizedStr = normalizeString(str);

    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true; // Base case: all characters matched
        }
        if (s[left] !== s[right]) {
            return false; // Base case: characters do not match
        }
        // Recursive case: check the next pair
        return checkPalindrome(s, left + 1, right - 1);
    }

    // Start the recursive check
    return checkPalindrome(normalizedStr, 0, normalizedStr.length - 1);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
