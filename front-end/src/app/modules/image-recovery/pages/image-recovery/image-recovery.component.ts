import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-image-recovery',
  templateUrl: './image-recovery.component.html',
  styleUrls: ['./image-recovery.component.scss']
})
export class ImageRecoveryComponent implements OnInit {

  buffer: string[];
  checkBuffer: boolean[];
  shareVaild = 0;
  loading = false;
  faUpload = faUpload;
  faDownload = faDownload;
  image: SafeResourceUrl;
  imageForm: FormGroup;
  received: boolean = false;
  clipboard = "Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer


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
    console.log(this.imageForm.value);

    this.FypBackendService.imageRecovery(this.imageForm.value, this.imageForm.get('threshold').value).subscribe(res => {
      // console.log(res["secret"]);

      this.image = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + res["secret"]);

      // console.log(this.image);
      // console.log(this.image);
      this.loading = false;
      this.received = true;



    }, error => {
      console.log(error);

    });
  }

  isChange() {
    if (this.imageForm.get('threshold').value <= 0)
      return;
    this.buffer = new Array(this.imageForm.get('threshold').value);
    this.checkBuffer = new Array(this.imageForm.get('threshold').value);
  }

  imageLoad(image: any, i: number) {

    if (image === null)
      return;
    const imageReader = new FileReader();
    // this.imageFile = (image.target.files)[0];
    imageReader.readAsDataURL((image.target.files)[0]);
    let tempBuffer: string;

    //read the image from the file reader as a temporary url
    imageReader.onload = (res) => {
      // this.buffer[i] = String.fromCharCode.apply(imageReader.result).replace(/data:image\/png;base64,/, '');
      tempBuffer = (imageReader.result as string);
      this.buffer[i] = tempBuffer.replace(/data:image\/png;base64,/, '') //this is use to remove the type suffix
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


    // this.readImage = true;
  }

}
