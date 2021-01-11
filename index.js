/* Problem Statement: On a positive integer, you can perform any one of the following 3 steps. 1.)
 Subtract 1 from it. ( n = n - 1 )  , 2.) If its divisible by 2, divide by 2. ( if n % 2 == 0 , then n = n / 2  )  , 3.) 
 If its divisible by 3, divide by 3. ( if n % 3 == 0 , then n = n / 3  ). Now the question is, given a positive integer n, find the minimum number of steps that takes n to 1

eg: 
1.)For n = 1 , output: 0       
2.) For n = 4 , output: 2  ( 4  /2 = 2  /2 = 1 )    
3.)  For n = 7 , output: 3  (  7  -1 = 6   /3 = 2   /2 = 1 ) */

function minimumSteps(number, memo = {}) {
    if (memo[number]) return memo[number]
    if (number === 1) return 0;

    if (number % 3 === 0) {
        memo[number] = 1 + minimumSteps(number / 3, memo)
        return memo[number]
    } else if (number % 2 === 0) {
        memo[number] = 1 + minimumSteps(number / 2, memo)
        return memo[number]
    } else {
        memo[number] = 1 + minimumSteps(number - 1, memo)
        return memo[number]
    }

}

console.log(minimumSteps(1))
console.log(minimumSteps(4))
console.log(minimumSteps(7))