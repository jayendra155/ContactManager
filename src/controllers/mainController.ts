///  <reference path="../_all.ts" />
module ContactManagerApp {
    export class MainController {
        static $inject = ['userService', '$mdSidenav'];
        constructor(private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService) {
            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    console.log(self.users);
                });
        }
        searchText: string='';  
        users: User[] = [];
        selected: User = null;
        message: string = "Hello from Controller";
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }
        selectUser(user: User): void {
            this.selected=user;
            var sidenav=this.$mdSidenav('left');
            if(sidenav.isOpen()){
                sidenav.close();
            }
        }
    }
}