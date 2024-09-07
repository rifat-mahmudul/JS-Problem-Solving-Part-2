function avgOddNumber(numbers){

    const odds = []

    for(const number of numbers){
        if(number % 2 !== 0){
            odds.push(number);
        }
    }

    let sum = 0;

    for(const odd of odds){
        sum = sum + odd;
    }

    const count = odds.length;
    const avg = sum / count;

    return avg;
}

const numbers = [42,13,58,65,81,7];
const avg = avgOddNumber(numbers);

console.log(avg);