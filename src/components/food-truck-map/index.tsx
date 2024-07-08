import { getFoodTrucks } from "../food-truck-list";
import { Map, MarkerProps } from "../map";

interface Props {
  search?: string;
}

export async function FoodTruckMap({ search }: Props) {
  const items = await getFoodTrucks({ search });

  const markers = items.map<MarkerProps>((x) => ({
    id: x.locationid,
    name: x.Applicant,
    coords: [
      Number.parseFloat(x.Latitude),
      Number.parseFloat(x.Longitude),
    ] as const,
  }));

  return <Map markers={markers}></Map>;
}
