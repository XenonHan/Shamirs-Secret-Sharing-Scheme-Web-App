import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FypBackendService } from '../../../../fyp-backend.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { faTimesCircle, faUpload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-text-recovery',
  templateUrl: './text-recovery.component.html',
  styleUrls: ['./text-recovery.component.scss']
})
export class TextRecoveryComponent implements OnInit {

  textForm: FormGroup;
  faTimesCircle = faTimesCircle;
  faUpload = faUpload;
  loading = false;
  recoveryFail: boolean = false;
  // tempSecret:string="";
  shareVaild = 0;
  buffer: string[];
  checkBuffer: boolean[];
  // shareVaild = 0;
  received: boolean = false;
  clipboard = "Copy to clipboard";
  desktop = this.deviceType.isDesktop();
  size = 60;
  // uploadCounter: number;
  constructor(
    private FypBackendService: FypBackendService,
    private formBuilder: FormBuilder,
    private deviceType: DeviceDetectorService,

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
 // get totalShare() {
 //  return this.textForm.get('totalShare');
 // }
  get secret() {
    return this.textForm.get('secret');
  }


  recoveryText() {
    // console.log(this.textForm.get('totalShare').value + "\n");
    // console.log(this.textForm.get('threshold').value + "\n");
    // console.log(this.textForm.get('secret').value + "\n");
    // console.log("tempSecret: "+this.tempSecret);
    // let buffer:string[];
    // let shares = new Map();  
    // buffer=this.textForm.get('secret').value.split('\n');
    this.loading=true;
    for (let i = 0; i < this.textForm.get('threshold').value; i++) {
      this.textForm.addControl("share" + i, new FormControl(this.buffer[i]));
      // shares.set("share"+i,buffer[i]);
    }
    // console.log(this.textForm.value);

    this.FypBackendService.textRecovery(this.textForm.value, this.textForm.get('threshold').value).subscribe(res => {
      // console.log(res);
      this.loading=false;
      this.received = true;
      this.textForm.controls['secret'].setValue(res["secret"]);

    }, error => {
      this.recoveryFail = true;
      console.log(error);

    });
  }

  isClick() {
    this.clipboard = "Copied!"
  }
  isChange() {
    this.shareVaild = 0;
    if (this.textForm.get('threshold').value <= 0 || this.textForm.get('threshold').value > 20)
      return;
    this.buffer = new Array(this.textForm.get('threshold').value);
    this.checkBuffer = new Array(this.textForm.get('threshold').value);
  }

  textLoad(text: any, i: number) {

    if (!text||text===null)
      return;

    if (text.target.files.length < 1)
      return;

     if(!text.target.files[0].type)
      return;
      // console.log(123);

    const textReader = new FileReader();

    textReader.readAsText((text.target.files)[0]);//only read the content without create the url
    let tempBuffer: string;
    // let removeSuffix: string = "data:text/plain" ;

    //read the image from the file reader as a temporary url
    textReader.onload = (res) => {
      // this.buffer[i] = String.fromCharCode.apply(imageReader.result).replace(/data:image\/png;base64,/, '');
      tempBuffer = (textReader.result as string);
      // this.buffer[i] = tempBuffer.replace(removeSuffix, '') //this is use to remove the type suffix /data:image\/jpeg;base64,/
      this.buffer[i] = tempBuffer;
      // console.log(tempBuffer);
      // console.log(i+": "+this.buffer[i]);
      this.checkBuffer[i] = true;
      // this.tempSecret+= this.buffer[i]+"\n";
    }


    // this.buffer[i] = (image.target.files)[0];
    // this.imageForm.controls['secret'].setValue(i); //make the vaild pass that allow split button
    // console.log("text " + i + " uploaded");

    //control the form submit
    this.shareVaild++;
    if (this.shareVaild === this.textForm.get('threshold').value) {
      this.textForm.controls['secret'].setValue(true);
      // console.log(this.tempSecret);
    }

    // this.uploadCounter = this.uploadCounter + 1;


    // this.readImage = true;
  }


}
