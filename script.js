//Q1...........................................
// Reverse printing of the string after 2 sec
// setTimeout((el) => {
//     function reverseStr(str) {
//         let newString = "";
//         for (let i = str.length - 1; i >= 0; i--) {
//             newString += str[i]

//         }
//         return newString;
//     }

//     let string = 'Arun kumar'
//     console.log(reverseStr(string))


// }, 2000)


//Q2...............................................
//Random Number Generator with Delay and Progress Indication:

// setInterval(() => {

//     function numbers() {
//         // return (Math.floor(Math.random()*10)); // for 1 digit number
//         return (Math.random());
       

//     }

//     let str = numbers();
//     console.log(str)

//     for (let i = 1; i <= 3; i++) {
//         setTimeout(() => {
//             console.log('The next number will appear in ', 4 - i, 'Sec')
//         }, i * 1000)
//     }

// }, 3000)



//Q3..................................................
//Build a feature for Store's Inventory.


// items = { 1: 20, 2: 45 };
// let dollarToIndian =Object.values(items).map((e) => e * 80);
// let myMap = new Map();

// for (i = 0; i < Object.keys(items).length; i++) {
//     myMap.set(Object.keys(items)[i], dollarToIndian[i]);
// }

// console.log("The price of Items in Indian rupee for ", myMap);


//Q5.......................................................
// 5. URL validation.

function validateUrl(url) {
    var regex = /^(http|https):\/\/[a-zA-Z0-9!@#$%^&*()_+-]+\.[a-zA-Z]+$/;
    if (regex.test(url)) {
        console.log("valid url")
    }
    else {
        console.log("Invalid url");
    }
}

// validateUrl("https://example123.com")
// validateUrl("http://www.example.com")
// validateUrl("https://example")

//Q6...................................................
//6. LinkedIn Profile URL Validator.

function LinkedInProfileValidator(url) {
    let regexValue = /^(https:\/\/www.linkedin.com\/in\/)[a-zA-Z0-9\_|\-]+[a-zA-Z]\-[a-zA-z0-9]{5,30}\/$/;
    if (regexValue.test(url)) {
        console.log("valid LinkedIn url");
    }
    else {
        console.log("Invalid LinkedIn url");
    }
}

// LinkedInProfileValidator("https://www.linkedin.com/in/mudvfgxfdth-svvgfm-463/")
// LinkedInProfileValidator("https://www.linkedin.com/in/love-parashar-a69965219/")