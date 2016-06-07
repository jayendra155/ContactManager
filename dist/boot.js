///  <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module("contactManagerApp", ['ngMaterial', 'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService)
        .controller('mainController', ContactManagerApp.MainController)
        .controller('AddUserDialogController', ContactManagerApp.AddUserDialogController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('sidenav_left', './assets/svg/sidenav_left.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map