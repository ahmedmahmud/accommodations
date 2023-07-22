import dataJson from "../data/accommodation.json";

export interface Accommodation {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  description: string;
  facilities: {
    id: number;
    label: string;
  }[];
  rooms: Room[];
}

export interface Room {
  id: number;
  name: string;
  max_occupancy: number;
  min_occupancy: number;
  type: string;
  price: number;
}

export const getAccommodations = (): Accommodation[] =>
  dataJson.accommodations.map(
    ({
      id,
      name,
      type,
      description,
      facilities,
      rooms,
    }: {
      id: number;
      name: string;
      type: Accommodation["type"];
      description: string;
      facilities: Accommodation["facilities"];
      rooms: {
        id: number;
        name: string;
        max_occupancy: number;
        min_occupancy: number;
        type: string;
        price?: {
          value: number;
        };
      }[];
    }) => {
      return {
        id,
        name,
        type,
        description,
        facilities,
        rooms: rooms
          .map(({ id, name, max_occupancy, min_occupancy, type, price }) => ({
            id,
            name,
            max_occupancy,
            min_occupancy,
            type,
            price: price?.value,
          }))
          .filter((room): room is Room => !!room.price),
      };
    }
  ).filter(({ rooms }) => rooms.length);
