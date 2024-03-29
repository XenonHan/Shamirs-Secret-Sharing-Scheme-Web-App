import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
  selector: 'app-text-encryption',
  templateUrl: './text-encryption.component.html',
  styleUrls: ['./text-encryption.component.scss']
})
export class TextEncryptionComponent implements OnInit {
  faDownload=faDownload;
  loading=false;
  buffer: SafeResourceUrl [];
  textForm: FormGroup;
  received:boolean=false;
  desktop = this.deviceType.isDesktop();
  clipboard="Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private urlMaker: DomSanitizer,
    private deviceType: DeviceDetectorService

  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    // console.log(this.desktop);
    // console.log(123);
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
    this.loading=true;
    let temp:SafeResourceUrl []= new Array(this.textForm.get('totalShare').value);
    this.FypBackendService.textEncryption(this.textForm.value).subscribe(res => {
      // console.log(res);
      this.loading=false;
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
