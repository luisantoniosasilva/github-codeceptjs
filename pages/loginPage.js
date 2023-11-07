const { I } = inject();

module.exports = {
    fields:{
        signIn: '//input[@type="submit"]',
        email: '//input[@id="login_field"]',
        pass: '//input[@id="password"]',
    },

    clickSignIn(){
        I.click(this.fields.signIn);
    },

    login(user, senha){
        I.fillField(this.fields.email, user);
        I.fillField(this.fields.pass, senha);
    }
}