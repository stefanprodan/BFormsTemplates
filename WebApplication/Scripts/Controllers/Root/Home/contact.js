require([
    'jquery',
    'main-menu'
], function () {
    var Page = function (options) {
        this.options = $.extend(true, {}, options);
    };

    Page.prototype.init = function () {
    };

    $(document).ready(function () {
        var ctrl = new Page(requireConfig.pageOptions);
        ctrl.init();
    });
});
