///  <reference path="_all.ts" />
module ContactManagerApp {
    angular.module("contactManagerApp", ['ngMaterial', 'ngMdIcons'])
        .service('userService', UserService)
        .controller('mainController', MainController)
        .controller('AddUserDialogController', AddUserDialogController)
        .controller('ContactPanelController', ContactPanelController)
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {

            $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 128)
                .icon('facebook_box', './assets/svg/facebook_box.svg', 512)
                .icon('hangouts', './assets/svg/hangouts.svg', 512)
                .icon('google_plus', './assets/svg/google_plus.svg', 512)
                .icon('phone', './assets/svg/phone.svg', 512)
                .icon('twitter', './assets/svg/twitter.svg', 512)
                .icon('menu', './assets/svg/menu.svg', 24)
                .icon('sidenav_left', './assets/svg/sidenav_left.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

        });
}