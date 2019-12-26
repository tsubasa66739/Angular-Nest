import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hello$: Observable<string>;

  constructor(
    private http: HttpClient
  ) {
    this.hello$ = http.get(environment.apiUrl, {
      responseType: 'text'
    });
  }
}
