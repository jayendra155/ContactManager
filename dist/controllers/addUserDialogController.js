///  <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5'];
        }
        AddUserDialogController.prototype.cancel = function () {
            console.log('cancelled');
            //this.$mdDialog.hide();
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            console.log('saving');
            this.$mdDialog.hide(new ContactManagerApp.User("placeholder", "", "", []));
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    }());
    ContactManagerApp.AddUserDialogController = AddUserDialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map