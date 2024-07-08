"use client";

import { useCallback, useEffect, useState } from "react";
import { Subject } from "rxjs";
import style from "./index.module.css";
interface Props {
  favKey: string;
  itemId: string;
}
export function FavoriteButton({ favKey, itemId }: Props) {
  const { isFav, toggle } = useFavorite({ favKey, itemId });
  return (
    <button
      className={`${style.button} ${isFav ? style.pressed : ""}`}
      onClick={toggle}
    >
      {isFav ? "💔 Unmark as favorite" : "❤️ Mark as favorite"}
    </button>
  );
}

export interface FavItem {
  favKey: string;
  itemId: string;
}
const favUpdateSubject = new Subject<FavItem>();

/** Returns the inclusion state of a favorite */
export function useFavorite({ favKey, itemId }: FavItem) {
  const [favList, setFavList] = useState<string[]>([]);

  const reloadFavs = useCallback(() => {
    const storedFavList = localStorage.getItem(favKey);
    setFavList(storedFavList ? JSON.parse(storedFavList) : []);
  }, [favKey]);

  useEffect(() => {
    reloadFavs();
    const subscription = favUpdateSubject.subscribe(({ favKey, itemId }) => {
      if (favKey === favKey) {
        reloadFavs();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [reloadFavs, favKey]);

  const isFav = favList.includes(itemId);

  const toggle = () => {
    const newFavList = isFav
      ? favList.filter((id: string) => id !== itemId)
      : [...favList, itemId];
    localStorage.setItem(favKey, JSON.stringify(newFavList));
    favUpdateSubject.next({ favKey, itemId });
  };

  return { isFav, toggle };
}
