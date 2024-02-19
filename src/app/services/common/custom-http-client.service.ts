import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParameters } from 'src/app/base/request/request-parameters';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {

  constructor(private httpClient:HttpClient,
              @Inject("baseUrl") private baseUrl:string) { }


  private getUrl(requestParameters:Partial<RequestParameters>) : string {

    return `${requestParameters.baseUrl?requestParameters.baseUrl:this.baseUrl}/${requestParameters.controller}${requestParameters.action?`/${requestParameters.action}`:""}`

  } 
  
  get<T>(requestParameters : Partial<RequestParameters>,id?:string) : Observable<T> {

    let url:string="";

    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=`${this.getUrl(requestParameters)}${id?`/${id}`:""}`; 
    }

    return this.httpClient.get<T>(url,{headers:requestParameters.headers});
    

  }
  post<T>(requestParameters:Partial<RequestParameters>,body:Partial<T>) : Observable<T>{

    let url:string="";

    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=this.getUrl(requestParameters);
    }

    return this.httpClient.post<T>(url,body,{headers:requestParameters.headers});


  }
  put<T>(requestParameters:Partial<RequestParameters>,body:Partial<T>) : Observable<T>{

    let url:string="";

    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=this.getUrl(requestParameters);
    }

    return this.httpClient.put<T>(url,body,{headers:requestParameters.headers});


  }

  delete<T>(requestParameters:Partial<RequestParameters>,id:string) : Observable<T>{

    let url:string="";
    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }else{
      url=`${this.getUrl(requestParameters)}/${id}`;
    }

    return this.httpClient.delete<T>(url,{headers:requestParameters.headers});
  }
}
