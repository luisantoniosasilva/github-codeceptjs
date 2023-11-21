const { I, loginPage } = inject();

Given('I access login page', () => {
    I.amOnPage('/');
    loginPage.clickSignInOnHomePage()
  })


//#region .: Successfully access the login page .:

Then('I see {string}', (seeText) => {
    I.see(seeText);
  })
  
//#endregion

//#region .: Performing a login attempt with incorrect data :.

Given('I fill in username with {string} and password with {string}', (user, senha) =>{
    loginPage.fillLoginFilds(user, senha)
  })
  
When('I click Sign in', () => {
    loginPage.clickSignIn()
    I.wait(5)
  })
//#endregion

  