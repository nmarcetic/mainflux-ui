import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Channel } from '../../../core/store/channels/index';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})
export class ChannelCardComponent implements OnInit {
  @Input() channel: Channel;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
