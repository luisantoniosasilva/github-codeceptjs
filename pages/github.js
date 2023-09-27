const { I } = inject();

module.exports = {
    menuButton: '//div[.="<MENU>"]',
    primaryMenuButton: '//button[contains(.,"<MENU>")]',

    navigatedPrimaryMenu(primaryMenu) {
        I.moveCursorTo(this.primaryMenuButton.replace('<MENU>', primaryMenu));
    },

    clickMenu(menuName){
        I.click(this.menuButton.replace('<MENU>', menuName));
    }
}