const { I } = inject();

module.exports = {
    fileds:{
        signIn: '//input[@type="submit"]',
        email: '//input[@id="login_field"]',
        pass: '//input[@id="password"]',
    },

    clickSignIn(){
        I.click(this.fileds.signIn);
    },

    login(user, senha){
        I.fillField(this.fileds.email, user);
        I.fillField(this.fileds.pass, senha);
    }
}