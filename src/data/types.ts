export interface FoodTruck {
    /** Unique identifier for the food truck location, e.g., "735318" */
    locationid: string;

    /** Name of the applicant or business */
    Applicant: string;

    /** Type of food service facility */
    FacilityType: "Push Cart" | "Truck" | "";

    /** Street segment identifier, e.g., "30727000" */
    cnn: string;

    /** Description of the location */
    LocationDescription: string;

    /** Street address or location, can be "Assessors Block /Lot" */
    Address: string;

    /** Combined block and lot number, can be empty */
    blocklot: string;

    /** Block number, can be empty */
    block: string;

    /** Lot number, can be empty */
    lot: string;

    /** Permit number, e.g., "15MFF-0159" */
    permit: string;

    /** Current status of the permit */
    Status: "REQUESTED" | "EXPIRED" | "SUSPEND" | "APPROVED" | "ISSUED";

    /** List of food items sold, can be empty */
    FoodItems: string;

    /** X coordinate, can be "0" for unknown locations */
    X: string;

    /** Y coordinate, can be "0" for unknown locations */
    Y: string;

    /** Latitude coordinate, can be "0" for unknown locations */
    Latitude: string;

    /** Longitude coordinate, can be "0" for unknown locations */
    Longitude: string;

    /** URL to the schedule PDF */
    Schedule: string;

    /** Operating days and hours, can be empty */
    dayshours: string;

    /** Date when Notice of Intent was sent, often empty */
    NOISent: string;

    /** Approval date, can be empty */
    Approved: string;

    /** Date received, e.g., "20151231" */
    Received: string;

    /** Flag for prior permit */
    PriorPermit: "0" | "1";

    /** Permit expiration date, can be empty */
    ExpirationDate: string;

    /** Geographic coordinates in parentheses, can be "(0.0, 0.0)" for unknown locations */
    Location: string;

    /** Fire Prevention District number, can be empty */
    FirePreventionDistricts: string;

    /** Police District number, can be empty */
    PoliceDistricts: string;

    /** Supervisor District number, can be empty */
    SupervisorDistricts: string;

    /** Zip code, can be empty */
    ZipCodes: string;

    /** Neighborhood classification number, can be empty */
    Neighborhoods: string;
}

export type Coords = readonly [number, number];