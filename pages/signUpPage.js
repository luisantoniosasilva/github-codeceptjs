const { I } = inject();
const buttonSelector = '//button[@name="button"]';

module.exports = {
    fields:{
        email: '//input[@id="email"]',
        pass: '//input[@id="password"]',
        userName: '//input[@id="login"]',
        reciveEmail: '//input[@id="opt_in"]',
    },

    fillEmail(user){
        I.waitForElement(this.fields.email, 5)
        I.fillField(this.fields.email, user)
        I.wait(1)
        I.pressKey('Enter')
        
    },

    fillPassword(password){
        I.fillField(this.fields.pass, password)
        I.wait(1)
        I.pressKey('Enter')
    },

    fillUserName(name){
        I.fillField(this.fields.userName, name)
        I.wait(1)
        I.pressKey('Enter')
    },

    agreeReciveEmail(){
        I.fillField(this.fields.reciveEmail, 'y')
        I.wait(1)
        I.pressKey('Enter')
    },

    createAccount(){
        I.executeScript((buttonSelector) => {
            const button = document.querySelector(buttonSelector);
          
            if (button) {
              button.removeAttribute('disabled hidden="hidden"');
            }
          }, buttonSelector);
        I.seeElement(buttonSelector)
        I.click(buttonSelector)
    }

}