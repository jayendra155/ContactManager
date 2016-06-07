module ContactManagerApp {
    export class ContactPanelController {
        static $inject = ['userService', '$mdBottomSheet'];

        constructor(private userService: IUserService,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            this.user = userService.selectedUser;
        }
        user: User;
        actions=[
            {name:'Phone' , icon: 'phone'},
            {name:'Facebook' , icon:'facebook_box'},
            {name:'Twitter', icon:'twitter'},
            {name:'Google_plus', icon:'google_plus'},
            {name:'Hangouts', icon:'hangouts'}
        ];
    }
}