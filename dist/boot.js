///  <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module("contactManagerApp", ['ngMaterial', 'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService)
        .controller('mainController', ContactManagerApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
        $mdIconProvider.icon('sidenav_left', './assets/svg/sidenav_left.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map