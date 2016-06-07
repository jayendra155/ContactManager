module ContactManagerApp{
    export class AddUserDialogController{
        static $inject=['$mdDialog'];
        constructor(private $mdDialog){}
        cancel():void{
            console.log('cancelled');
            this.$mdDialog.cancel();
        }
        save():void{
            this.$mdDialog.hide(new User("placeholder","","",[]));
        }
    }
}