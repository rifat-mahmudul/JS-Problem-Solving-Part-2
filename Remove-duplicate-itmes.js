const names = ['Rifat', 'Soikot' , 'Sagor', 'seyam', 'Rifat' , 'Shamim', 'Sagor', 'Fahim', 'Seyam'];

function noDuplicate(arr){
    let unique = [];
    for(item of arr){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }

    return unique;
}

console.log(noDuplicate(names));