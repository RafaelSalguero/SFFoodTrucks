import fs from "fs";
import { parse } from "csv-parse"
import { Coords, FacilityType, FoodTruck } from "./types";
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

    for await (const item of fs.createReadStream(process.cwd() + "/food-trucks.csv").pipe(parser)) {
        yield item as FoodTruck;
    }
}
export interface FoodTruckQuery {
    location?: {
        coords: Coords;
        distance: number;
    }
    foodItems?: string[];
    search?: string;
}

/** Gets an array of near food trucks */
export async function queryFoodTrucks(query: FoodTruckQuery) {
    const foodTrucks = [];
    for await (const truck of streamFoodTrucksData()) {
        if (query.location) {
            const truckCoords = [Number.parseFloat(truck.Latitude), Number.parseFloat(truck.Longitude)] as const;
            if (latLngDistance(query.location.coords, truckCoords) > query.location.distance) {
                // Filter out by distance
                continue;
            }
        }

        if (query.foodItems && query.foodItems.length > 0) {
            if (!query.foodItems.some((foodItem) => truck.FoodItems.toUpperCase().includes(foodItem.toUpperCase()))) {
                // Filter by foot items
                continue;
            }
        }

        const searchText = truck.Applicant + truck.FoodItems + truck.Address;
        if (query.search && !searchText.toUpperCase().includes(query.search.toUpperCase())) {
            // Filter by search text
            continue;
        }
        foodTrucks.push(truck);
    }
    return foodTrucks;

}