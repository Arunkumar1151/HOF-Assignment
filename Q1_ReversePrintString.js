//Q1...........................................
// Reverse printing of the string after 2 sec

setTimeout((el) => {
    function reverseStr(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i]

        }
        return newString;
    }
     // Show Case
    let string = 'Arun kumar'
    console.log(reverseStr(string))

}, 2000)