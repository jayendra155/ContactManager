///  <reference path="../_all.ts" />


module ContactManagerApp{
    export class AddUserDialogController{
        static $inject=['$mdDialog'];
        constructor(private $mdDialog){}
        user: CreateUser;
        avatars=['svg-1','svg-2','svg-3','svg-4','svg-5'];
        cancel():void{
            console.log('cancelled');
            //this.$mdDialog.hide();
            this.$mdDialog.cancel();
        }
        save():void{
            console.log('saving');
            this.$mdDialog.hide(new User("placeholder","","",[]));
        }
    }
}