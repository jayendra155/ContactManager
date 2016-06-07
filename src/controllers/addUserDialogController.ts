///  <reference path="../_all.ts" />


module ContactManagerApp{
    export class AddUserDialogController{
        static $inject=['$mdDialog'];
        constructor(private $mdDialog){}
        cancel():void{
            console.log('cancelled');
            this.$mdDialog.cancel();
        }
        save():void{
            console.log('saving');
            this.$mdDialog.hide(new User("placeholder","","",[]));
        }
    }
}