import dataJson from "../data/accommodation_availability.json";

export interface Availability {
  id: number;
  available: number;
  total: number;
}

export const getAvailabilities = (): Availability[] => dataJson.rooms;

export const getAvailability = (idCheck: number): Availability | undefined =>
  getAvailabilities().find(({ id }) => idCheck === id);
