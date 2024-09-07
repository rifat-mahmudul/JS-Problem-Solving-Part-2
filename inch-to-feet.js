//convert inch to feet 

function inchToFeet(inch){
    feet = parseInt(inch / 12);
    inch2 = inch % 12;
    result = feet + ' ft ' +  inch2 + ' inch ';
    return result;
}

const Rifat = inchToFeet(75);
console.log(Rifat);