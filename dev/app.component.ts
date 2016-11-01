import { Component } from 'angular2/core';
import { ContactListComponent } from './contacts/contact-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ banner }}</h1>
        <p class="hover" [class.clicked]="showDetail" (click)="onSelect()" >{{ title }}</p>
        <input [(ngModel)]="twoWay" type="text">
        <div *ngIf="showDetail">
          <contact-list></contact-list>
        </div>  
        <p>{{ twoWay }}</p>
    `,
    directives: [ ContactListComponent ]
})
export class AppComponent {
    public banner = 'Angular 2 Boilerplate';
    public title = 'Contacts';
    public showDetail = false;
    public twoWay = "";

    onSelect() {
      this.showDetail = !this.showDetail;
    }
}
