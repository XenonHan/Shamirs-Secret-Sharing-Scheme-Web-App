import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';


@Component({
  selector: 'app-text-recovery',
  templateUrl: './text-recovery.component.html',
  styleUrls: ['./text-recovery.component.scss']
})
export class TextRecoveryComponent implements OnInit {

  textForm: FormGroup;
  received:boolean=false;
  clipboard="Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,

  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.textForm = this.formBuilder.group(
      {
        threshold: ['', [Validators.required]],
        secret: ['', [Validators.required]]
      }
    )
  }
  get threshold() {
    return this.textForm.get('threshold');
  }
  get totalShare() {
    return this.textForm.get('totalShare');
  }
  get secret() {
    return this.textForm.get('secret');
  }


  recoveryText() {
    // console.log(this.textForm.get('totalShare').value + "\n");
    // console.log(this.textForm.get('threshold').value + "\n");
    // console.log(this.textForm.get('secret').value + "\n");
    let buffer:string[];
    // let shares = new Map();  
    buffer=this.textForm.get('secret').value.split('\n');
    for(let i=0;i<this.textForm.get('threshold').value;i++)
    {
      this.textForm.addControl("share"+i,new FormControl(buffer[i]));
      // shares.set("share"+i,buffer[i]);
    }
    console.log(this.textForm.value);

    this.FypBackendService.textRecovery( this.textForm.value,this.textForm.get('threshold').value).subscribe(res => {
      console.log(res);
      this.received=true;
      this.textForm.controls['secret'].setValue(res["secret"]);

    }, error => {
      console.log(error);

    });
  }

  isClick()
  {
    this.clipboard="Copied!"
  }


}
