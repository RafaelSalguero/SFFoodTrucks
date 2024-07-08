import { FoodTruck } from "@/data/types";
import style from "./index.module.css";
import { InfoLabel } from "./info-label";
import { FavoriteButton } from "../favorite";
interface Props {
  value: FoodTruck;
}

export function FoodTruckCard({ value }: Props) {
  return (
    <div className={style.card}>
      <span className={style.title}>{value.Applicant}</span>
      <div className={style.content}>
        <InfoLabel icon={"📌"} info={value.Address} title="Address" />
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

        <InfoLabel icon={"🍔"} info={value.FoodItems} title="Food Items" />
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
