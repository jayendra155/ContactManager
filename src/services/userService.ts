///  <reference path="../_all.ts" />
module ContactManagerApp {

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];

        constructor(private $q: ng.IQService) { }

        selectedUser: User = null;

        loadAllUsers(): ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: User[] = [
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
                    { title: 'Payback Dinner', date: new Date("2016-06-06") },
                    { title: 'Buy something', date: new Date("2016-02-14") }
                ]
            },
            {
                name : 'Chuhaad Singhal',
                avatar: 'svg-1',
                bio : 'I am a Computer Science Engineer who loves to be sad',
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
            }
        ];
    }
}