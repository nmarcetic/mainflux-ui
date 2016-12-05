import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';
import {Device} from '../device.model';

@Component({
  selector: 'my-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.sass']
})
export class DeviceListComponent implements OnInit {

    devices: Device[];

  constructor(private service:DeviceService) { }

  ngOnInit() {
      this.service.getDevices()
                .subscribe(
                    devices => this.devices = devices,
                    err => {
                        // Log errors if any
                        console.log('Error fetching devices', err);
                    });
  }

}
