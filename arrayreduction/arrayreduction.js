arrayReduction = (arrayOfNum) => {
    // we need to get all the unique numbers from an array and sort it
    let uniqueNumbersFromAnArray =  [... new Set(arrayOfNum.sort((a ,b)=>{return a-b}))];
    let additionOfNumbers = [];

    while (uniqueNumbersFromAnArray.length > 1){
        const num1 = uniqueNumbersFromAnArray[0];
        const num2 = uniqueNumbersFromAnArray[1];
        const total = num1 + num2;
        
        additionOfNumbers.push(total);

        uniqueNumbersFromAnArray.splice(0,2); // splice(startIndex, endIndex , replaceValue)
        uniqueNumbersFromAnArray.push(total);
        uniqueNumbersFromAnArray = uniqueNumbersFromAnArray.sort((a,b)=>{return a-b});
    }

    return additionOfNumbers.reduce((a,b) => {return a+b});
}

// [3,1,2,3] > 9
// [1,2,3,4] > 3 6 10  > 19
// [23,4,5,62,22,1,2,3] > [1,2,3,4,5,22,23,62] > 3 6 9 15 37 60 122 >  