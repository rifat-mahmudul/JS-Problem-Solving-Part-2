function leepYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return `${year} is leep year.`
    }

    else{
        return `${year} is not leep year`
    }
}

console.log(leepYear(2400));