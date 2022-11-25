import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl,ValidationErrors } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'be-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: any = new FormGroup({
    name: new FormControl('test', this.dupaValidator)
  })



  ngOnInit(): void {
    this.productForm.valueChanges.subscribe(console.log)
    this.productForm.addControl('firstname', new FormControl('', [this.dupaValidator, this.validateSecondControl(this.productForm.get('name'))])
    )
  }

  dupaValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('dupa') ? { dupaError: true } : null
  }


  validateSecondControl(secondControl: AbstractControl){
    return (mainControl: AbstractControl) => {
      if(secondControl.invalid) {
      mainControl.setErrors({ firstControlInvalid: true})
      return mainControl.errors
    }
    return null
    }
  }

}
