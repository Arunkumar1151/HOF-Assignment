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
//Show Case(Examples)
validateUrl("https://example123.com")
validateUrl("http://www.example.com")
validateUrl("https://example")
