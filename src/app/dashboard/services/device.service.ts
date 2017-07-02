// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Device }           from '../devices/device.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeviceService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private apiUrl = 'http://localhost:9090/devices';

     // Fetch all devices
     getDevices() : Observable<Device[]> {
         // ...using get request
         return this.http.get(this.apiUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     // Delete device
     removeDevice (id:string): Observable<Device[]> {
        return this.http.delete(this.apiUrl + '/' + id)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
