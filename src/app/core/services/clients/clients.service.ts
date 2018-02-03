import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../store/clients/index';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(environment.clientsUrl);
  }

  addClient(client: Client) {
    return this.http.post(environment.clientsUrl, client);
  }

  deleteClient(client: Client) {
    return this.http.delete(environment.clientsUrl + '/' + client.id);
  }

  editClient(client: Client) {
    return this.http.put(environment.clientsUrl + '/' + client.id, client);
  }
}
