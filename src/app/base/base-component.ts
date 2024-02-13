import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerTypeName } from "../enums/spinner/spinner-type-name";

export class BaseComponent {


    constructor(public spinner : NgxSpinnerService){}

    showSpinner(spinnerTypeName:SpinnerTypeName){
        this.spinner.show(spinnerTypeName);
        setTimeout(() => {
            this.hideSpinner(spinnerTypeName);
        }, 2000);

    }

    hideSpinner(spinnerTypeName:SpinnerTypeName){
        this.spinner.hide(spinnerTypeName);
    }



}
