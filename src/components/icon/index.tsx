import style from "./index.module.css";
/** A component that works as an icon, even tho this is not an image */
export function Icon() {
  return (
    <div className={style.icon}>
      <span className={style.sf}>SF</span>
      <span>foodies</span>
    </div>
  );
}
