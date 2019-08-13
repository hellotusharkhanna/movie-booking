import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// export enum TimeSlot {
//   MORNING = 'morning',
//   AFTERNOON = 'afternoon',
//   EVENING = 'evening'
// }

export interface TicketsModel {
  maxTickets: number;
  ticketsBooked: number;
}

export interface SeatsBasedOnTimeSlot {
  [key: string]: TicketsModel;
}

export class MovieModel {
  name: string;
  slots: SeatsBasedOnTimeSlot;
}

export interface TheaterModel {
  name: string;
  location: string;
  movies: MovieModel[];
}

@Injectable({
  providedIn: 'root'
})
export class MoviesBookingService {
  private currentTheaters: TheaterModel[] = [
    {
      name: 'DT Mall Theater',
      location: 'Chandigarh',
      movies: [
        {
          name: 'Jungle Book',
          slots: {
            morning: {
              maxTickets: 70,
              ticketsBooked: 61
            },
            afternoon: {
              maxTickets: 70,
              ticketsBooked: 62
            },
            evening: {
              maxTickets: 70,
              ticketsBooked: 63
            }
          }
        },
        {
          name: '3 Idiots',
          slots: {
            morning: {
              maxTickets: 70,
              ticketsBooked: 41
            },
            afternoon: {
              maxTickets: 70,
              ticketsBooked: 42
            },
            evening: {
              maxTickets: 70,
              ticketsBooked: 43
            }
          }
        }
      ]
    },
    {
      name: 'Elante Mall Theater',
      location: 'Mohali',
      movies: [
        {
          name: '3 Idiots',
          slots: {
            morning: {
              maxTickets: 70,
              ticketsBooked: 29
            },
            afternoon: {
              maxTickets: 70,
              ticketsBooked: 30
            },
            evening: {
              maxTickets: 70,
              ticketsBooked: 31
            }
          }
        },
        {
          name: 'Queen',
          slots: {
            morning: {
              maxTickets: 70,
              ticketsBooked: 54
            },
            afternoon: {
              maxTickets: 70,
              ticketsBooked: 55
            },
            evening: {
              maxTickets: 70,
              ticketsBooked: 56
            }
          }
        },
        {
          name: 'Elizabeth',
          slots: {
            morning: {
              maxTickets: 70,
              ticketsBooked: 58
            },
            afternoon: {
              maxTickets: 70,
              ticketsBooked: 59
            },
            evening: {
              maxTickets: 70,
              ticketsBooked: 60
            }
          }
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
