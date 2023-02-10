import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentObject, Permission } from './app.model';
import { Subscription } from 'rxjs';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RBA_Frontend';
  empdata = {} as any;
  permissions = {} as any;
  subscription!: Subscription;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getGroupPermissions();
    console.log(this.permissions.lastname.write);

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
    this.subscription = this.http.getData('usergroups/1').subscribe({
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
    throw new Error('Method not implemented.');
  }
}
