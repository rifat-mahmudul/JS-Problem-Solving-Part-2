const numbers = [4,5,8,9,4,6,5,2,3,8];

function noDuplicate(arr){
    const unique = [];
    for(item of arr){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }

    return unique;
}

console.log(noDuplicate(numbers));