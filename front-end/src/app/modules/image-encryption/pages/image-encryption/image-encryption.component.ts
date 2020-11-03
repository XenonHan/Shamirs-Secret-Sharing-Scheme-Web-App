import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faUpload,faDownload } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-encryption',
  templateUrl: './image-encryption.component.html',
  styleUrls: ['./image-encryption.component.scss']
})
export class ImageEncryptionComponent implements OnInit {
  buffer: SafeResourceUrl [];
  loading=false;
  fileType:string;
  faDownload=faDownload;
  faUpload = faUpload;
  imageForm: FormGroup;
  received: boolean = false;
  readImage: boolean = false;
  imageFile: File;
  imageURL: string | ArrayBuffer;
  clipboard = "Copy to clipboard"
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private urlMaker: DomSanitizer

  ) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {

    this.imageForm = this.formBuilder.group(
      {
        threshold: ['', [Validators.required]],
        totalShare: ['', [Validators.required]],
        secret: ['', [Validators.required]]
      }
    )
  }
  get threshold() {
    return this.imageForm.get('threshold');
  }
  get totalShare() {
    return this.imageForm.get('totalShare');
  }
  get secret() {
    return this.imageForm.get('secret');
  }


  splitText() {
    this.loading=true;
    let temp:SafeResourceUrl []= new Array(this.imageForm.get('totalShare').value);
    // console.log(this.imageForm.get('totalShare').value + "\n");
    // console.log(this.imageForm.get('threshold').value + "\n");
    // console.log(this.imageForm.get('secret').value + "\n");
    this.FypBackendService.imageEncryption(this.imageFile,this.imageForm.get('totalShare').value,this.imageForm.get('threshold').value).subscribe(res => {
      // console.log(res);
      this.loading=false;
      this.received = true;
      for (let i = 0; i < this.imageForm.get('totalShare').value; i++) {
        // console.log(this.urlMaker.bypassSecurityTrustResourceUrl('data:image/png;base64,' +res["share" + i]));

        temp[i] = this.urlMaker.bypassSecurityTrustResourceUrl('data:'+this.fileType+';base64,' +res["share" + i]);
        // console.log(temp);
      }
      // this.imageForm.controls['secret'].setValue(this.buffer);
      this.buffer=temp;
      // console.log(this.buffer);
      

    }, error => {
      console.log(error);

    });
  }

  isClick() {
    this.clipboard = "Copied!"
  }

  imageLoad(image: any) {

    if (image === null)
      return;
    const imageReader = new FileReader();
    this.imageFile = (image.target.files)[0];
    imageReader.readAsDataURL(this.imageFile);

    //read the image from the file reader as a temporary url
    imageReader.onload = (res) => {
      this.imageURL = imageReader.result;
    }
    this.imageForm.controls['secret'].setValue(1); //make the vaild pass that allow split button
    console.log("image uploaded");
    // console.log((image.target.files)[0].type);
    this.fileType=(image.target.files)[0].type;
    this.readImage = true;
  }

}
