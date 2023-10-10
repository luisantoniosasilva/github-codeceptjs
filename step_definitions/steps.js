const { I, githubPage } = inject();

Given('I access homepage', () => {
  I.amOnPage('/');
})

//#region .: Successfully access the homepage .:

Then('I see {string}', (seeText) => {
  I.see(seeText);
})

//#endregion

//#region .: Successfully access the actions page :.

Given ('I navigated to the primary menu {string}', (primaryMenu) => {
  githubPage.navigatedPrimaryMenu(primaryMenu)
})
        
When ('I click on the {string} menu', (menuName) => {
  githubPage.clickMenu(menuName)
  I.wait(5)
})

//#endregion