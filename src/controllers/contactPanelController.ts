module ContactManagerApp {
    export class ContactPanelController {
        static $inject = ['userService', '$mdBottomSheet'];

        constructor(private userService: IUserService,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            this.user = userService.selectedUser;
        }
        user: User;
    }
}