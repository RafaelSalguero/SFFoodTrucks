import React from "react";
import style from "./template.module.css";
import { Icon } from "@/components";

export default function Template({ children }: React.PropsWithChildren) {
  return (
    <div className={style.template}>
      <header className={style.header}>
        <div className={style.iconContainer}>
          <Icon />
        </div>
      </header>
      {children}
    </div>
  );
}
