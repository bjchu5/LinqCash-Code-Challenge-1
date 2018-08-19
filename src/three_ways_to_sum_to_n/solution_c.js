// Using while loop
 var sum_to_n = function(n) {
    var result, i;
     
    // if the given n value is more or equals to 0 and less than or equals to Number.MAX_SAFE_INTEGER.
    if (n >= 0 && n <= Number.MAX_SAFE_INTEGER){
        // Assign 0 with the value of 0
        result = 0;
        // give i the value of n, this will be used as a counter.
        i = n;
        
        // while i is more than 0, we will continue to add the value to the result. I used "i > 0" instead of "i = 0" since it's one more extra step for the same result.
        while (i > 0) {
            // add i to the result.
            result += i;
            // i decrement
            i -=1;
        } 
    }
    // the result is the final sum
    return result;
};



// calling the function and print the result to console.
console.log(sum_to_n(5));
