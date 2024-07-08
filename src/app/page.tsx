import Image from "next/image";
import styles from "./page.module.css";
import { Input, Map, FoodTruckList, Spinner } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Input className={styles.search} placeholder="Search for food trucks" />
        <Suspense fallback={<Spinner />}>
          <FoodTruckList />
        </Suspense>
      </div>
      <div className={styles.content}>
        <Map />
      </div>
    </main>
  );
}
