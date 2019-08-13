import { Component, OnInit } from "@angular/core";
import { MoviesBookingService } from "src/app/services/movies-booking.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AddTheaterDialogComponent } from "../components/add-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  theaters: any;

  constructor(
    private moviesService: MoviesBookingService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.theaters = this.moviesService.getMoviesInTheatres();
  }

  openAddTheaterDialog(): void {
    const dialogRef = this.dialog.open(AddTheaterDialogComponent, {
      width: "400px",
      data: { name: "" }
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.moviesService.addTheater(name);
      }
    });
  }
}
