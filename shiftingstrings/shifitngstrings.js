shiftedStrings = (str , leftShift, rightShift) => {
    let stringTruncateFromLeft = str.substring(0,leftShift);
    let removedLeftCharFromString = str.slice(leftShift);
    let concatString = `${removedLeftCharFromString}${stringTruncateFromLeft}`;

    let stringTruncateFromRight = rightShift ? concatString.slice(-rightShift) : '';
    let removedRightCharFromString = concatString.substring(0,concatString.length - rightShift);

    return `${stringTruncateFromRight}${removedRightCharFromString}`;
}

// "abcdef" , 0 , 1 >  "fabcde"
// "a" , 0 ,0 > "a"