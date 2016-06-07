var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        AddUserDialogController.prototype.cancel = function () {
            console.log('cancelled');
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(new ContactManagerApp.User("placeholder", "", "", []));
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    }());
    ContactManagerApp.AddUserDialogController = AddUserDialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map