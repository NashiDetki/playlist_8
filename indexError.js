// console.log('Hello');

// if (true){
//     console.log('Ok')
// }  else {
//     console.log('not')
// }

// console.log(variable);

// function bugFunction(sum){
//     return sum + sum
// }

// buFunction(sum);

// let hut = 'Избушка';
// hut('Мышка');

function evenSum(numbers){
    // debugger;
    // console.log(numbers);
    let sum = 0;

    for (let i=0; i<numbers.length; i++){
        let number = numbers[i];

        // console.log(number);

        if(number % 2 === 0){
            // console.log(number);
            sum = sum + number;
        }

    }

    return sum;

}

console.log('result',evenSum([1,2,3,4,5,6])); //12

