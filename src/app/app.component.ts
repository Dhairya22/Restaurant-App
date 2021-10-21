import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.isLoader();

    var counter = 0;
    setInterval(function () {
      var frames = 19; var frameWidth = 30;
      var offset = counter * -frameWidth;
      document.getElementById("spinner").style.backgroundPosition =
        0 + "px" + " " + offset + "px";
      counter++; if (counter >= frames) counter = 0;
    }, 60);
  }
}
