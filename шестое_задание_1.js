var digit, zero, odd, even;
digit = zero = odd = even = 0;

const someChars = [67, 0.4, 32, null, undefined, 54, 8, 0.7, 16, 0, 39];
function evenOrOdd(arr) {
   for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || !isNaN(arr[i])) {
            digit++;
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    
   return console.log(`В массиве ${digit} цифр, ${zero} нулей, ${even} чётных, ${odd} нечётных!`);
}
   
evenOrOdd(someChars); 
