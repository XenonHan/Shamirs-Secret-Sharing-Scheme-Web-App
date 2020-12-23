import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FypBackendService {

  apiUrl:string;

  constructor(private http:HttpClient,) { 
    this.apiUrl = `${environment.apiUrl}`;
  }

  textEncryption(payload: any): Observable<any> {
    return this.http.post(this.apiUrl+'/TextApi/encryption', payload, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

  textRecovery(payload: any,  t:number): Observable<any> {
    console.log(payload);
    return this.http.post(this.apiUrl+'/TextApi/recovery/'+t, payload, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

  imageEncryption(image:File,n:number,t:number): Observable<any> {
    let data = new FormData();
    data.append('image', image);
    return this.http.post(this.apiUrl+'/ImageApi/encryption/'+n+'/'+t, data, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

  imageRecovery(payload: any,  t:number): Observable<any> {
    // console.log(payload);
    return this.http.post(this.apiUrl+'/ImageApi/recovery/'+t, payload, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

  zipEncryption(image:File,n:number,t:number): Observable<any> {
    let data = new FormData();
    data.append('image', image);
    return this.http.post(this.apiUrl+'/ZipApi/encryption/'+n+'/'+t, data, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

  zipRecovery(payload: any,  t:number): Observable<any> {
    // console.log(payload);
    return this.http.post(this.apiUrl+'/ZipApi/recovery/'+t, payload, {
      observe: 'response'
    }).pipe(map(res => {
      return res.body;
    }, error => {
      return error;
    }));
  }

}
