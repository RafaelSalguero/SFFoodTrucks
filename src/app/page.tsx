import Image from "next/image";
import styles from "./page.module.css";
import { FoodTruckList, Spinner, SearchParamInput } from "@/components";
import { Suspense } from "react";
import { FoodTruckMap } from "@/components/food-truck-map";

export default function Home({
  searchParams: { q },
}: {
  searchParams: { q?: string };
}) {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <SearchParamInput className={styles.search} />
        <Suspense fallback={<Spinner />}>
          <FoodTruckList search={q} />
        </Suspense>
      </div>
      <div className={styles.content}>
        <FoodTruckMap search={q} />
      </div>
    </main>
  );
}
