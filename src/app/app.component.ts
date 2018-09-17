import { Component } from '@angular/core';
import { PromiseService } from './promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  constructor(private promiseService:PromiseService){}
}
