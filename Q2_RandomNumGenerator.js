// /Q2...............................................
// Random Number Generator with Delay and Progress Indication:

setInterval(() => {

    function numbers() {
        // return (Math.floor(Math.random()*10)); // for 1 digit number
        return (Math.random());
       

    }

    let str = numbers();
    console.log(str)

    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log('The next number will appear in ', 4 - i, 'Sec')
        }, i * 1000)
    }

}, 3000)