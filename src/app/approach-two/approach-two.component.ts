import { Component } from '@angular/core';

@Component({
  selector: 'app-approach-two',
  templateUrl: './approach-two.component.html',
  styleUrls: ['./approach-two.component.css'],
})
export class ApproachTwoComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
  ];
  userGroups!: { name: string; description: string };

  fields = ['firstName', 'lastName', 'mobile', 'address', 'country'];

  selectedUsers: number[] = [];
  accessLevels: { [field: string]: string } = {};

  submit() {
    const userGroup = {
      name: this.userGroups.name,
      description: this.userGroups.description,
      users: this.selectedUsers.map((id) => ({ id })),
      permissions: this.fields.map((field) => {
        const accessLevel = this.accessLevels[field];
        const read = accessLevel === 'view' || accessLevel === 'edit';
        const write = accessLevel === 'edit';
        return { field, read, write };
      }),
    };

    console.log(userGroup);
  }
}
