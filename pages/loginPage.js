const { I } = inject();

module.exports = {
    fields:{
        SignInOnHomePage: "//a[contains(.,'Sign in')]",
        signInButton: '//input[@type="submit"]',
        email: '//input[@id="login_field"]',
        pass: '//input[@id="password"]',
    },

    clickSignInOnHomePage(){
        I.click(this.fields.SignInOnHomePage)
    },

    clickSignIn(){
        I.click(this.fields.signInButton);
    },

    fillLoginFilds(user, senha){
        I.fillField(this.fields.email, user);
        I.fillField(this.fields.pass, senha);
    }
}