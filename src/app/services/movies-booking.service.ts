import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface MovieModel {
  name: string;
  pendingSlots: number;
  maxSlots: number;
}

export interface TheaterModel {
  name: string;
  movies?: MovieModel[];
}

@Injectable({
  providedIn: "root"
})
export class MoviesBookingService {
  private currentTheaters: TheaterModel[] = [
    {
      name: "Theater 1",
      movies: [
        {
          name: "Jungle Book",
          pendingSlots: 10,
          maxSlots: 30
        },
        {
          name: "3 Idiots",
          pendingSlots: 15,
          maxSlots: 30
        }
      ]
    },
    {
      name: "Theater 2",
      movies: [
        {
          name: "Barfi",
          pendingSlots: 5,
          maxSlots: 30
        },
        {
          name: "Queen",
          pendingSlots: 2,
          maxSlots: 30
        },
        {
          name: "Elizabeth",
          pendingSlots: 2,
          maxSlots: 30
        }
      ]
    }
  ];

  constructor() {}

  getMoviesInTheatres() {
    return this.currentTheaters;
  }

  addTheater(name: string) {
    const isTheaterAlreadyExists = this.currentTheaters.find(
      theater => theater.name.toLowerCase() === name.toLowerCase()
    );
    if (!isTheaterAlreadyExists && name) {
      this.currentTheaters.push({
        name
      });
    }
  }
}
