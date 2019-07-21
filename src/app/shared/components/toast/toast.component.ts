import {Component} from '@angular/core';
import {Toast, ToastPackage, ToastrService} from 'ngx-toastr';
import {toastAnimation} from '@animations/toast.animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [toastAnimation]
})
export class ToastComponent extends Toast {

  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
  }

}
