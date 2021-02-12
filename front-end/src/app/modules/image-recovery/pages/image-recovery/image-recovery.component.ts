import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faDownload, faUpload, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-image-recovery',
  templateUrl: './image-recovery.component.html',
  styleUrls: ['./image-recovery.component.scss']
})
export class ImageRecoveryComponent implements OnInit {

  buffer: string[];
  faTimesCircle=faTimesCircle;
  fileType: string;
  checkBuffer: boolean[];
  shareVaild = 0;
  loading = false;
  faUpload = faUpload;
  faDownload = faDownload;
  image: SafeResourceUrl;
  imageForm: FormGroup;
  received: boolean = false;
  uploadCounter: number;
  recoveryFail:boolean=false;
  // clipboard = "Copy to clipboard"
  desktop = this.deviceType.isDesktop();
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private urlMaker: DomSanitizer,
    private deviceType: DeviceDetectorService,


  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.imageForm = this.formBuilder.group(
      {
        threshold: ['', [Validators.required]],
        secret: ['', [Validators.required]]
      }
    )
  }
  get threshold() {
    return this.imageForm.get('threshold');
  }
  // get totalShare() {
  //   return this.imageForm.get('totalShare');
  // }
  get secret() {
    return this.imageForm.get('secret');
  }


  recoveryText() {
    this.loading = true;
    // console.log(this.imageForm.get('totalShare').value + "\n");
    // console.log(this.imageForm.get('threshold').value + "\n");
    // console.log(this.imageForm.get('secret').value + "\n");
    // let buffer: string[];
    // let shares = new Map();  
    // buffer = this.imageForm.get('secret').value.split('\n');
    for (let i = 0; i < this.imageForm.get('threshold').value; i++) {
      this.imageForm.addControl("share" + i, new FormControl(this.buffer[i]));
      // shares.set("share"+i,buffer[i]);
    }
    // console.log(this.imageForm.value);

    this.FypBackendService.imageRecovery(this.imageForm.value, this.imageForm.get('threshold').value).subscribe(res => {
      // console.log(res["secret"]);

      this.image = this.urlMaker.bypassSecurityTrustResourceUrl('data:' + this.fileType + ';base64,' + res["secret"]);

      // console.log(this.image);
      // console.log(this.image);
      this.loading = false;
      this.received = true;



    }, error => {
      this.recoveryFail=true;
      console.log(error);

    });
  }

  isChange() {
    this.uploadCounter = 0;
    if (this.imageForm.get('threshold').value <= 0||this.imageForm.get('threshold').value > 20)
      return;
    this.buffer = new Array(this.imageForm.get('threshold').value);
    this.checkBuffer = new Array(this.imageForm.get('threshold').value);
  }

  imageLoad(image: any, i: number) {

    if (image === null)
      return;

    if (i === 0)
      this.fileType = (image.target.files)[0].type;
    console.log(this.fileType);
    const imageReader = new FileReader();
    // this.imageFile = (image.target.files)[0];
    imageReader.readAsDataURL((image.target.files)[0]);
    let tempBuffer: string;
    let removeSuffix: string = "data:" + this.fileType + ";base64,";

    //read the image from the file reader as a temporary url
    imageReader.onload = (res) => {
      // this.buffer[i] = String.fromCharCode.apply(imageReader.result).replace(/data:image\/png;base64,/, '');
      tempBuffer = (imageReader.result as string);
      this.buffer[i] = tempBuffer.replace(removeSuffix, '') //this is use to remove the type suffix /data:image\/jpeg;base64,/
      // console.log(tempBuffer);
      // console.log(this.buffer[i]);
      this.checkBuffer[i] = true;
    }


    // this.buffer[i] = (image.target.files)[0];
    // this.imageForm.controls['secret'].setValue(i); //make the vaild pass that allow split button
    console.log("image " + i + " uploaded");
    this.shareVaild++;
    if (this.shareVaild === this.imageForm.get('threshold').value)
      this.imageForm.controls['secret'].setValue(i);

    if (i === 0)
      this.fileType = (image.target.files)[0].type;

    this.uploadCounter = this.uploadCounter + 1;
    // this.readImage = true;
  }

}
