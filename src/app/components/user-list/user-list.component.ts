import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for Angular directives like *ngFor
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to hold the fetched user data

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch data from the API using the UserService
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Set the users property with the fetched data
      },
      (error) => {
        console.error('Error fetching user data:', error); // Handle errors
      }
    );
  }
}
