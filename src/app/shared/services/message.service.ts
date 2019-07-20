import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService: ToastrService) {
  }

  initSuccessToastr(data: { type: string, item: string }) {
    const message = this.getSuccessMessage(data.type, data.item);
    return this.toastrService.success(message, 'Congratulation');
  }

  initErrorToastr(error: HttpErrorResponse) {
    const {message} = error.error;
    message.forEach((item: any) => {
      for (const key in item.constraints) {
        if (item.constraints.hasOwnProperty(key)) {
          return this.toastrService.error(item.constraints[key]);
        }
      }
    });
  }

  private getSuccessMessage(type: string, item: string) {
    return `${item} was ${type} successfully!`;
  }
}
