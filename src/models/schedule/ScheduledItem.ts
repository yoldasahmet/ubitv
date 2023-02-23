import { Show } from "../show/ShowModel";

export interface ScheduledItem {
  id: string;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  runtime: number;
  _embedded: Embedded;
}

interface Embedded {
  show: Show;
}
