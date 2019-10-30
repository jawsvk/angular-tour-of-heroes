import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switch-component',
  templateUrl: './light-switch-component.component.html',
  styleUrls: ['./light-switch-component.component.css']
})
export class LightSwitchComponentComponent implements OnInit {

  isOn: boolean;
  constructor() { 
    this.isOn = false;
  }
  
  ngOnInit() {
  }

  clicked(){
    this.isOn = !this.isOn;
  }

  get message(){
    return `The light is ${this.isOn? 'On': 'Off'}`;
  }

}
