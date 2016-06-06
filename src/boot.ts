///  <reference path="_all.ts" />
module ContactManagerApp {
    angular.module("contactManagerApp", ['ngMaterial'])
        .service('userService', UserService);
        angular.module('contactManagerApp').controller('mainController', MainController);
}