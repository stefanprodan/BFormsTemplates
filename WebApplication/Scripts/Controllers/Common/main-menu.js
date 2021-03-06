(function(factory) {
    if (typeof define === "function" && define.amd) {
        define('main-menu', ['jquery', 'bforms-initUI'], factory);
    } else {
        factory(window.jQuery);
    }
}(function ($) {

    var mainMenu = function () {
        this.init();
    };

    mainMenu.prototype.init = function () {
        console.log('main-menu.js : Main menu module loaded - locale set to %s', requireConfig.locale);
    };

    $(function () {
        var entryScript = new mainMenu();
    });

}));