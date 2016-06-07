///  <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Jayendra V. Singh',
                    avatar: 'svg-3',
                    bio: 'I am an Information Science Engineer who loves to code, play cricket and football',
                    notes: [
                        { title: 'Payback Dinner', date: new Date("2016-06-06") },
                        { title: 'Buy something', date: new Date("2016-02-14") }
                    ]
                },
                {
                    name: 'Maddan Verma',
                    avatar: 'svg-2',
                    bio: 'I am an Information Science Engineer who loves to code, play cricket and football',
                    notes: [
                        { title: 'Payback Dinner', date: new Date("2016-06-06") },
                        { title: 'Buy something', date: new Date("2016-02-14") }
                    ]
                },
                {
                    name: 'Chuhaad Singhal',
                    avatar: 'svg-1',
                    bio: 'I am an Information Science Engineer who loves to code, play cricket and football',
                    notes: []
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map