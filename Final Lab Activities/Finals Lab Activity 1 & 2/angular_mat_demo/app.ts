import { Component } from '@angular/core';
import { RegisterComponent } from './register/register';
import { ExpansionOverviewExample } from './component/component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent, ExpansionOverviewExample],
  template: `
    <h1 class="app-title">Welcome</h1>
    <app-register></app-register>
    <expansion-overview-example></expansion-overview-example>
  `,
  styleUrls: ['./app.css']   // ✅ attach CSS file
})
export class AppComponent {}
