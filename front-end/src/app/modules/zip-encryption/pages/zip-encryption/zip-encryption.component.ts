import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faUpload,faDownload,faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-zip-encryption',
  templateUrl: './zip-encryption.component.html',
  styleUrls: ['./zip-encryption.component.scss']
})
export class ZipEncryptionComponent implements OnInit {buffer: SafeResourceUrl [];
  loading=false;
  encryptFail:boolean=false;
  faTimesCircle=faTimesCircle;
  faCheckCircle=faCheckCircle;
  fileType:string;
  faDownload=faDownload;
  faUpload = faUpload;
  zipForm: FormGroup;
  received: boolean = false;
  readImage: boolean = false;
  imageFile: File;
  imageURL: string | ArrayBuffer;
  tooLarge: boolean=false;
  checkFinal:number;
  desktop = this.deviceType.isDesktop();
  // clipboard = "Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private urlMaker: DomSanitizer,
    private deviceType: DeviceDetectorService

  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {

    this.zipForm = this.formBuilder.group(
      {
        threshold: ['', [Validators.required]],
        totalShare: ['', [Validators.required]],
        secret: ['', [Validators.required]]
      }
    )
  }
  get threshold() {
    return this.zipForm.get('threshold');
  }
  get totalShare() {
    return this.zipForm.get('totalShare');
  }
  get secret() {
    return this.zipForm.get('secret');
  }


  splitText() {
    this.loading=true;
    let temp:SafeResourceUrl []= new Array(this.zipForm.get('totalShare').value);
    // console.log(this.zipForm.get('totalShare').value + "\n");
    // console.log(this.zipForm.get('threshold').value + "\n");
    // console.log(this.zipForm.get('secret').value + "\n");
    if(this.imageFile.size>15728640)
    {
      this.tooLarge=true;
      return;
    }
    this.FypBackendService.zipEncryption(this.checkFinal,this.imageFile,this.zipForm.get('totalShare').value,this.zipForm.get('threshold').value).subscribe(res => {
      // console.log(res);
      this.loading=false;
      this.received = true;
      for (let i = 0; i < this.zipForm.get('totalShare').value; i++) {
        // console.log(this.urlMaker.bypassSecurityTrustResourceUrl('data:image/png;base64,' +res["share" + i]));

        temp[i] = this.urlMaker.bypassSecurityTrustResourceUrl('data:'+this.fileType+';base64,' +res["share" + i]);
        // console.log(temp);
      }
      // this.zipForm.controls['secret'].setValue(this.buffer);
      this.buffer=temp;
      // console.log(this.buffer);
      

    }, error => {
      this.encryptFail=true;
      console.log(error);

    });
  }

  // isClick() {
  //   this.clipboard = "Copied!"
  // }

  imageLoad(image: any) {

    if (image === null)
      return;
    const imageReader = new FileReader();
    this.imageFile = (image.target.files)[0];
    imageReader.readAsDataURL(this.imageFile);
    // console.log(this.imageFile.size);

    //the file size shoud <= 15MB
    this.checkFinal=this.imageFile.size;
    this.tooLarge=false;
    if(this.imageFile.size>15728640)
    {
      this.tooLarge=true;
      return;
    }
   
    //read the image from the file reader as a temporary url
    imageReader.onload = (res) => {
      this.imageURL = imageReader.result;
    }
    this.zipForm.controls['secret'].setValue(1); //make the vaild pass that allow split button
    // console.log("zip uploaded");
    // console.log((image.target.files)[0].type);
    this.fileType=(image.target.files)[0].type;
    this.readImage = true;
  }

}
