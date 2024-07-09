import { FoodTruckQuery, queryFoodTrucks } from "@/data/food-trucks";
import { delay, latLngDistance, sanFranciscoCoords } from "@/data/utils";
import { cache } from "react";
import { FoodTruckCard } from "../food-truck-card";
import style from "./index.module.css";
import { Coords } from "@/data/types";

export const getFoodTrucks = cache(async (query: FoodTruckQuery) => {
  // simnulate a loading time:
  await delay(100 + Math.random() * 200);
  return await queryFoodTrucks(query);
});

interface Props {
  search?: string;
}

export async function FoodTruckList({ search }: Props) {
  const items = await getFoodTrucks({ search });

  const userCoords = sanFranciscoCoords;

  const itemsWithDistance = items
    .map((x) => ({
      ...x,
      distance: latLngDistance(userCoords, [
        Number.parseFloat(x.Latitude),
        Number.parseFloat(x.Longitude),
      ]),
    }))
    .toSorted((a, b) => a.distance - b.distance);
  return (
    <div className={style.container}>
      <div className={style.list}>
        {itemsWithDistance.map((item) => (
          <FoodTruckCard key={item.locationid} value={item} search={search} />
        ))}
      </div>
    </div>
  );
}
