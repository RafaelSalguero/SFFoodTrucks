import { Coords } from "./types";

export const sanFranciscoCoords: Coords = [37.7614742, -122.4140746] as const;

/**Haversine formula calculates distance between 2 points on a sphere,
 * is a good enough aproximation for small distances, since the earth is not a perfect sphere
 */
export function latLngDistance(
    coord1: Coords,
    coord2: Coords
): number {
    const R = 6371e3; // Earth's radius in meters
    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

/** Resolves in a certain amount of milliseconds */
export async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}