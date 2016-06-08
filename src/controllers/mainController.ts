///  <reference path="../_all.ts" />
module ContactManagerApp {
    export class MainController {
        static $inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];
        constructor(private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    self.userService.selectedUser = self.selected;

                    console.log(self.users);
                });
        }
        searchText: string = '';
        tabIndex: number = 0;
        users: User[] = [];
        selected: User = null;
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }
        selectUser(user: User): void {
            this.selected = user;
            this.userService.selectedUser = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        }
        addUser($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('xs') || this.$mdMedia('sm'));
            this.$mdDialog.show({
                templateUrl: './dist/view/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddUserDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                escapeToClose: true,
                fullscreen: useFullScreen
            }).then((user: User) => {
                self.openToast('User added');
            }, () => {
                console.log('You cancelled the dialog');
            });
        }
        clearNotes($event): void {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All content will be deleted and you can\'t undo it')
                .targetEvent($event)
                .ok('Yes, Delete all')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(() => {
                self.selected.notes = [];
                self.openToast('All notes cleared');
            });
        }
        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast(note.title + " was removed")
        }
        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position("top right")
                    .hideDelay(3000)
            );
        }
        showContactOptions($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',
                controller: ContactPanelController,
                controllerAs: 'cp',
                bindToController: true
            })
                .then((clickedItem) => {
                    clickedItem && console.log(clickedItem.name + ' clicked!');
                });
        }
    }
}