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

Given ('I navigate to the Product menu', () => {
  I.moveCursorTo(githubPage.productMenu);
})
        
When ('I click on the Actions menu', () => {
  I.click(githubPage.actionsMenu);
  I.wait(5)
})

//#endregion