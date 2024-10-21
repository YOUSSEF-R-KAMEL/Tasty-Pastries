import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TastyService } from 'src/app/services/tasty.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  formData!: FormGroup;

  email!: string;
  phone!: string;
  name!: string;

  constructor(private dataApi:TastyService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
      name: new FormControl()
    });
  }

  onClickSubmit(data:any){
    this.dataApi.sendMail(data.value).subscribe((res:any) => {
      console.log(res.message)
      this.toastr.success(res.message)
    }, (err:any) => {
      console.log(err)
      this.toastr.error(err.message)
    })
  }
}
