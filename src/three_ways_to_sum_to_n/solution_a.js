// Using for loop
var sum_to_n = function(n) {
    var result, i;
    
    // if the given n value is more or equals to 0 and less than or equals to Number.MAX_SAFE_INTEGER.
    if (n >= 0 && n <= Number.MAX_SAFE_INTEGER){
        // Assign 0 with the value of 0
        result = 0;
        
        // Iterate from 0 to the value of n, adding them to $result we have previously declared.
        for (i = 0; i <= n; i++) {
            result += i;
        } 
    }
    // return result
    return result;
};

// calling the function and print the result to console.
console.log(sum_to_n(5));