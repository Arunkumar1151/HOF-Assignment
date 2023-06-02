//Q6...................................................
//6. LinkedIn Profile URL Validator.

function LinkedInProfileValidator(url) {
    let regexValue = /^(https:\/\/www.linkedin.com\/in\/)[a-zA-Z0-9\_|\-]+[a-zA-Z]\-[a-zA-z0-9]{5,30}\/$/;
    if (regexValue.test(url)) {
        console.log("valid LinkedIn URL");
    }
    else {
        console.log("Invalid LinkedIn URL");
    }
}
    //Show Case
LinkedInProfileValidator("https://www.linkedin.com/in/mudvfgxfdth-svvgfm-463/")
LinkedInProfileValidator("https://www.linkedin.com/in/love-pbdehar-a695558219/")