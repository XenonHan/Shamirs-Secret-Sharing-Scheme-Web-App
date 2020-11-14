import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-text-encryption',
  templateUrl: './text-encryption.component.html',
  styleUrls: ['./text-encryption.component.scss']
})
export class TextEncryptionComponent implements OnInit {
  faDownload=faDownload;
  buffer: SafeResourceUrl [];
  textForm: FormGroup;
  received:boolean=false;
  clipboard="Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private urlMaker: DomSanitizer

  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.textForm = this.formBuilder.group(
      {
        threshold: ['', [Validators.required]],
        totalShare: ['', [Validators.required]],
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


  splitText() {
    // console.log(this.textForm.get('totalShare').value + "\n");
    // console.log(this.textForm.get('threshold').value + "\n");
    // console.log(this.textForm.get('secret').value + "\n");
    
    // let buffer:string='';
    let temp:SafeResourceUrl []= new Array(this.textForm.get('totalShare').value);
    this.FypBackendService.textEncryption(this.textForm.value).subscribe(res => {
      // console.log(res);
      this.received=true;
      for(let i=0;i<this.textForm.get('totalShare').value;i++)
      {
        // buffer+=res["share"+i]+"\n";
        temp[i] = this.urlMaker.bypassSecurityTrustResourceUrl('data:text/plain,' +res["share" + i]);
      }
      // this.textForm.controls['secret'].setValue(buffer);
      this.buffer=temp;

    }, error => {
      console.log(error);

    });
  }

  isClick()
  {
    this.clipboard="Copied!"
  }



}
