// Problem #: 412
// Problem name: Fizz Buzz
// Problem description:
const fizzBuzz = function(n) {
    let str = [];

    for(let i = 1; i <= n; i++) {
        if((i % 3 === 0) && (i % 5 === 0))
            str[i-1] = "FizzBuzz"
        else if (i % 3 === 0)
            str[i-1] = "Fizz"
        else if (i % 5 === 0)
            str[i-1] = "Buzz"
        else 
            str[i-1] = `${i}`
    }
    
    return str;
};