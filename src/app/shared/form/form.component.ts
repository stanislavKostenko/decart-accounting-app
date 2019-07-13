import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormService} from '../services/form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public controls: string[];
  public addressControls: string[];

  @Input() object: any;
  @Output() formValue: EventEmitter<any> = new EventEmitter();

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.form = new FormGroup({});
    this.formService.generateForm(this.form, this.object);
    this.generateControls(this.form);
  }

  generateControls(form: FormGroup) {
    this.controls = this.formService.createArrayOfControls(form);
    this.addressControls = this.formService.createArrayOfControls(form.controls.address);
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    this.formValue.next(this.form.value);
  }

}
