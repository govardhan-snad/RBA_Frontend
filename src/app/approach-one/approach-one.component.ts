import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-approach-one',
  templateUrl: './approach-one.component.html',
  styleUrls: ['./approach-one.component.css'],
})
export class ApproachOneComponent {
  empdata = {} as any;
  permissions = {} as any;
  subscription!: Subscription;
  userGroup!: UserGroup;

  addUser(): void {
    this.userGroup.users.push({ id: null });
  }

  addPermission(): void {
    this.userGroup.permissions.push({ field: '', read: false, write: false });
  }

  removePermission(index: number): void {
    this.userGroup.permissions.splice(index, 1);
  }

  submitForm(): void {
    // send data to API
  }

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getGroupPermissions();

    // const permissions = [
    //   {
    //     field: 'Empid',
    //     read: true,
    //     write: false,
    //   },
    //   {
    //     field: 'lastname',
    //     read: true,
    //     write: true,
    //   },
    //   {
    //     field: 'contact',
    //     read: false,
    //     write: false,
    //   },
    // ];

    // const parentObject: ParentObject = permissions.reduce(
    //   (acc: any, cur: Permission) => {
    //     acc[cur.field] = {
    //       read: cur.read,
    //       write: cur.write,
    //     };
    //     return acc;
    //   },
    //   {}
    // );

    // console.log(parentObject);
  }
  personal(f: NgForm) {}

  getGroupPermissions() {
    this.subscription = this.http.getData('usergroups/6').subscribe({
      next: (data: any) => {
        console.log(data);
        this.permissions = data.permissions.reduce(
          (acc: any, cur: Permission) => {
            acc[cur.field] = {
              read: cur.read,
              write: cur.write,
            };
            return acc;
          },
          {}
        );
        console.log(this.permissions);
      },
      error: (reason) => console.log(reason),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

interface User {
  id: any;
}

interface Permission {
  field: string;
  read: boolean;
  write: boolean;
}

interface UserGroup {
  name: string;
  description: string;
  users: User[];
  permissions: Permission[];
}
