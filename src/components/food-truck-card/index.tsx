import { FoodTruck } from "@/data/types";
import style from "./index.module.css";
import { InfoLabel } from "./info-label";
import { FavoriteButton } from "../favorite";
import { SearchSpan } from "../search-span";
interface Props {
  value: FoodTruck & { distance?: number };
  search?: string;
}

function formatDistanceInMeters(distance: number) {
  return distance < 10
    ? `${distance.toFixed(0)}m`
    : distance < 500
    ? `${Math.round(distance / 10) * 10}m`
    : distance < 1000
    ? `${Math.round(distance / 100) / 10}km`
    : `${(distance / 1000).toFixed(1)}km`;
}

export function FoodTruckCard({ value, search }: Props) {
  return (
    <div className={style.card}>
      <SearchSpan
        className={style.title}
        text={value.Applicant}
        search={search}
      />
      <div className={style.content}>
        <InfoLabel icon={"📌"} info={value.Address} title="Address" />
        {value.distance && (
          <InfoLabel
            icon={"📍"}
            info={formatDistanceInMeters(value.distance)}
            title="Distance"
          />
        )}
        <InfoLabel
          title="Facility type"
          icon={
            value.FacilityType == "Truck"
              ? "🚚"
              : value.FacilityType == "Push Cart"
              ? "🛒"
              : "🏢"
          }
          info={value.FacilityType}
        />

        <InfoLabel
          icon={"🍔"}
          info={value.FoodItems}
          title="Food Items"
          search={search}
        />
        <InfoLabel
          icon={"⏰"}
          info={value.dayshours}
          title="Operating days and hours"
        />
        <InfoLabel
          title="Permit status"
          icon={
            value.Status == "APPROVED"
              ? "✅"
              : value.Status == "ISSUED"
              ? "✅"
              : value.Status == "REQUESTED"
              ? "🔵"
              : value.Status === "EXPIRED"
              ? "❌"
              : value.Status === "SUSPEND"
              ? "🔴"
              : ""
          }
          info={value.Status}
        />
      </div>
      <FavoriteButton favKey="food-truck" itemId={value.locationid} />
    </div>
  );
}
