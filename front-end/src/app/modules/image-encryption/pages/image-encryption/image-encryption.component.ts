import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-encryption',
  templateUrl: './image-encryption.component.html',
  styleUrls: ['./image-encryption.component.scss']
})
export class ImageEncryptionComponent implements OnInit {
  loading=false;
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
    // console.log(this.imageForm.get('totalShare').value + "\n");
    // console.log(this.imageForm.get('threshold').value + "\n");
    // console.log(this.imageForm.get('secret').value + "\n");
    let buffer: string = '';
    this.FypBackendService.imageEncryption(this.imageFile,this.imageForm.get('totalShare').value,this.imageForm.get('threshold').value).subscribe(res => {
      // console.log(res);
      this.loading=false;
      this.received = true;
      for (let i = 0; i < this.imageForm.get('totalShare').value; i++) {
        buffer += res["share" + i] + "\n";
      }
      this.imageForm.controls['secret'].setValue(buffer);
      

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

    this.readImage = true;
  }

}
