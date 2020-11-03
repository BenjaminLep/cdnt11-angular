import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../interfaces';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  //@Input() msg: string = "coucou";
  @Output() changeState = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  injure() {
    console.log(this.player.lastname);
    this.player.injured = !this.player.injured;
    this.changeState.emit();
  }

}
