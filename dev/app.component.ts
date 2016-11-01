import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ banner }}</h1>
        <p class="hover" [class.clicked]="showDetail" (click)="onSelect()" >{{ name }}</p>
        <input [(ngModel)]="twoWay" type="text">
        <div *ngIf="showDetail">
          <p>
            Name: {{ contact.firstName }}
            {{ contact.lastName }}<br>
            Email: {{ contact.email }}
          </p>
        </div>
        <p>{{ twoWay }}</p>
    `,
})
export class AppComponent {
    public banner = 'Angular 2 Boilerplate';
    public name = 'Hello World';
    public contact = { firstName: 'Drew', lastName: 'Conly', email: 'atconly@gmail.com' }
    public showDetail = false;
    public twoWay = "";

    onSelect() {
      this.showDetail = !this.showDetail;
    }
}
