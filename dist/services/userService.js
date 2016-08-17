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
                        { title: 'Behas karwa lo', date: new Date("2016-06-06") },
                        { title: 'Bakwaas karwa lo', date: new Date("2016-02-14") }
                    ]
                },
                {
                    name: 'Maddan Verma',
                    avatar: 'svg-2',
                    bio: 'I am an Information Science Engineer who loves to code',
                    notes: [
                        { title: 'Makkari karni hai', date: new Date("2016-06-06") },
                        { title: 'RESTful self services banani hain', date: new Date("2016-02-14") }
                    ]
                },
                {
                    name: 'Chuhaad Singhal',
                    avatar: 'svg-1',
                    bio: 'I am a Computer Science Engineer who loves to be sad',
                    notes: []
                },
                {
                    name: 'Chuddu Pagla',
                    avatar: 'svg-3',
                    bio: 'I am an Information Science Engineer who loves to do anything esp parties and nighouts on weekdays',
                    notes: [
                        { title: 'Daaru lelo', date: new Date("2016-06-06") },
                        { title: 'Nasha kar lo', date: new Date("2016-02-14") }
                    ]
                },
                 {
                    name: 'Takla',
                    avatar: 'svg-1',
                    bio: 'I am an Information Science Engineer who loves to do anything esp parties and nighouts on weekdays',
                    notes: [
                        { title: 'Dating kar lo', date: new Date("2016-06-06") },
                        { title: 'Udaasi failwa lo', date: new Date("2016-02-14") }
                    ]
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
