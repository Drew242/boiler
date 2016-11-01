import { Component } from 'angular2/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { OnInit } from 'angular2/core';

@Component({
  selector: "contact-list",
  template: `
      <p *ngFor="#c of contacts">
        Name: {{ c.firstName }}
        {{ c.lastName }}<br>
        Email: {{ c.email }}
      </p>
  `,
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactService) {
  }
    
  public contacts: Contact[];

  getContacts() {
    this.contactService.getContacts().then((contacts: Contact[]) => this.contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }

}
