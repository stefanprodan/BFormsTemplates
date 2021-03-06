require([
    'jquery',
    'main-menu'
], function () {
    var HomeIndex = function (options) {
        //options are set in controller action body 
        //eg: HomeController action Index RequireJsOptions.Add("option_name", option_value);
        this.options = $.extend(true, {}, options);
    };

    HomeIndex.prototype.init = function () {
        console.log('index.js : All dependencies loaded - server time is %s', this.options.serverTime);
    };

    $(document).ready(function () {
        var ctrl = new HomeIndex(requireConfig.pageOptions);
        ctrl.init();
    });
});
