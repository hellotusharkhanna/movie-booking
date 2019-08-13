import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTheaterDialogComponent } from './../components/add-dialog.component';
import {
  MoviesBookingService,
  TheaterModel
} from 'src/app/services/movies-booking.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  theaters: TheaterModel[];
  myTemplate = '../../home/home.component.html';

  constructor(
    private moviesService: MoviesBookingService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  showAllTheaters() {
    this.theaters = this.moviesService.getMoviesInTheatres();
  }

  openAddTheaterDialog(): void {
    const dialogRef = this.dialog.open(AddTheaterDialogComponent, {
      width: '400px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.moviesService.addTheater(name);
      }
    });
  }
}
