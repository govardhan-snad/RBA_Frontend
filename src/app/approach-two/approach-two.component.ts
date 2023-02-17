import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-approach-two',
  templateUrl: './approach-two.component.html',
  styleUrls: ['./approach-two.component.css'],
})
export class ApproachTwoComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.getUsers();
  }
  constructor(private http: HttpService) {}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  users = [] as Users[];
  userGroups!: { name: string; description: string };
  subscription!: Subscription;
  sections = [
    {
      name: 'Basic',
      fields: [
        'firstname',
        'lastname',
        'empid',
        'status',
        'gender',
        'title',
        'dob',
        'marital',
        'seclan',
        'ssn',
        'pan',
      ],
    },
    {
      name: 'Address',
      fields: ['line1', 'line2', 'city', 'state', 'country', 'postcode'],
    },
    {
      name: 'Contact',
      fields: ['workphone', 'homephone', 'workmail', 'homemail'],
    },
  ];

  selectedUsers: number[] = [];
  accessLevels: { [field: string]: string } = {};

  submit() {
    let permissionArrays = this.sections.map((section) => {
      return section.fields.map((field) => {
        const accessLevel = this.accessLevels[field];
        const read = accessLevel === 'view' || accessLevel === 'edit';
        const write = accessLevel === 'edit';
        return { field, read, write };
      });
    });
    const mergedArray = permissionArrays.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

    const userGroup = {
      name: 'admins',
      description: 'test description',
      users: this.selectedUsers.map((id) => ({ id })),
      permissions: mergedArray,
    };
    console.log(userGroup);
    this.subscription = this.http.postdata('usergroup', userGroup).subscribe({
      next: (response) => {
        if (response) {
          alert('Usergroup created Success fully');
        }
      },
      error: (reason) => console.log(reason),
    });
  }

  getUsers() {
    this.subscription = this.http.getData('users').subscribe({
      next: (data) => {
        this.users = data as Users[];
      },
      error: (reason) => console.log(reason),
    });
  }
}
interface Users {
  id: number;
  name: string;
  usergroupid: null | number;
}
