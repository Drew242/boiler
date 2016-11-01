import { Component } from 'angular2/core';

@Component({
  selector: "contact-list",
  template: `
      <p *ngFor="#c of contacts">
        Name: {{ c.firstName }}
        {{ c.lastName }}<br>
        Email: {{ c.email }}
      </p>
  `
})

export class ContactListComponent {
  public contacts = [
    {id: 1, firstName: 'Drew', lastName: 'Conly', email: 'atconly@gmail.com' },
    {id: 2, firstName: 'Logan', lastName: 'Schumaker', email: 'ls@aol.com' },
    {id: 3, firstName: 'Brandon', lastName: 'Eleuterio', email: 'be@me.com' },
    {id: 4, firstName: 'Drew', lastName: 'Strickland', email: 'dstrick@yahoo.com' }
  ]
}
