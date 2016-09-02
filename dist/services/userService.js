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
                    bio: 'I am an Information Science Engineer who loves to code',
                    notes: [
                        { title: 'RESTful self services banani hain', date: new Date("2016-06-06") },
                        { title: 'Makkari karni hai', date: new Date("2016-02-14") }
                    ]
                },
                {
                    name: 'Chuhaad Singhal',
                    avatar: 'svg-1',
                    bio: 'I am a Computer Science Engineer who loves to be sad',
                    notes: [
                        { title: 'They see me rollin\' they hatin\' ', date: new Date("1991-07-31") }
                    ]
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
                    avatar: 'svg-5',
                    bio: 'I am an Mechanical Engineer who loves to do hisaab',
                    notes: [
                        { title: 'Dating kar lo', date: new Date("2016-06-06") },
                        { title: 'Udaasi failwa lo', date: new Date("2016-02-14") },
                        { title: 'Hisaab karwa lo', date: new Date("2016-09-15") }
                    ]
                },
                {
                    name: 'Gaenda',
                    avatar: 'svg-4',
                    bio: 'I am an Information Science Engineer who loves to fall in love with the people who are already in love....' +
                        '...\t\t\t(again and again)',
                    notes: [
                        { title: 'Zindagi mein kabhi koi aaye na rabba', date: new Date("2016-10-18") },
                        { title: 'Bas jee rahe hain aur pyaar kar rahe hain', date: new Date("2016-10-18") }
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