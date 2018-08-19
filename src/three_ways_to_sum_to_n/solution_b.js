// Using recursion
 var sum_to_n = function(n) {
     
     // if the given n value is more or equals to 0 and less than or equals to Number.MAX_SAFE_INTEGER.
     if (n >= 0 && n <= Number.MAX_SAFE_INTEGER){
        // if the input value n is 0, return 0
        if (n === 0){
            return 0;
        }
         
        // base case, when the n is 1, return 1
        if (n === 1){
            return 1;
        }
         
        // call the sum_to_n function recursively
        else{
            // return the recursive function calling
            return n + sum_to_n(n-1);
        }
     }
     
     return null;
};


// calling the function and print the result to console.
console.log(sum_to_n(5));