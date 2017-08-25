// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Device }           from '../devices/device.model';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeviceService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}

     // Fetch all devices
     getDevices() : Observable<Device[]> {
         return this.http.get(`${environment.API_URL}/clients`)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     // Add Device
     addDevice (data): Observable<Device[]> {
        return this.http.post(`${environment.API_URL}/clients`, data)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
     // Delete device
     removeDevice (id:string): Observable<Device[]> {
        return this.http.delete(`${environment.API_URL}/clients/${id}`)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
