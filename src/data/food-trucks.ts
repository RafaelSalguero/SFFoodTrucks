import fs from "fs";
import { parse } from "csv-parse"
import { Coords, FoodTruck } from "./types";
import { latLngDistance } from "./utils";

/** 
 * Read all the food truck data and returns a stream of FoodTruck items.
 * Streaming allows the processing of large files without needing to load the whole file into memory.
 */
export async function* streamFoodTrucksData() {
    const parser = parse({
        delimiter: ',',
        columns: true
    })

    for await (const item of fs.createReadStream("./src/data/food-trucks.csv").pipe(parser)) {
        yield item as FoodTruck;
    }
}

/** Gets an array of near food trucks */
export async function getNearFoodTrucks(coords: Coords, distance: number) {
    const foodTrucks = [];
    for await (const truck of streamFoodTrucksData()) {
        const truckCoords = [Number.parseFloat(truck.Latitude), Number.parseFloat(truck.Longitude)] as const;
        if (latLngDistance(coords, truckCoords) <= distance) {
            foodTrucks.push(truck);
        }
    }
    return foodTrucks;

}