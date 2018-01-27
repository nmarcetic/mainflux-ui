import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../core/store/clients/index';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() client: Client;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }
}
