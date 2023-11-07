const { I, signUpPage } = inject();

Given('I access Sign up page', () => {
    I.amOnPage('/');
    I.click("//a[contains(.,'Sign in')]/../../a[contains(.,'Sign up')]")
    I.wait(5)
  })

//#region .: Successfully access the Sign up page .:

Then('I see {string}', (seeText) => {
    I.see(seeText);
  })
  
//#endregion


//#region .: Register on GitHub .:

Given('I enter my email {string}', (user) =>{
    signUpPage.fillEmail(user)
})

Given('I enter my password {string}', (password) =>{
    signUpPage.fillPassword(password)
})

Given('I enter my username as {string}', (name) =>{
    signUpPage.fillUserName(name)
})

Given('I agree to receive information via email', () =>{
    signUpPage.agreeReciveEmail()
})

When('I click on {string}', () =>{
    signUpPage.createAccount()
})

Then('I visualize {string}', (seeText) => {
    I.see(seeText);
})
//#endregion