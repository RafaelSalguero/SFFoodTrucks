import { getNearFoodTrucks } from "@/data/food-trucks";
import { delay } from "@/data/utils";
import { cache } from "react";
import { FoodTruckCard } from "../food-truck-card";
import style from "./index.module.css";
const getFoodTrucks = cache(async () => {
  // simnulate a loading time:
  await delay(100 + Math.random() * 200);
  return await getNearFoodTrucks([37.7577607, -122.4787994], 10000);
});

export async function FoodTruckList() {
  const items = await getFoodTrucks();
  return (
    <div className={style.container}>
      <div className={style.list}>
        {items.map((item) => (
          <FoodTruckCard key={item.locationid} value={item} />
        ))}
      </div>
    </div>
  );
}
