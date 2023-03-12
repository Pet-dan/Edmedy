import React, { FC, ReactElement } from "react";
import { ButtonsType } from "../../types/componentsProps.types";

const OutlineButton: FC<ButtonsType> = ({ icon, text }) => {
  return (
    <button className={styles.buttons + " text-darkGray"}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export const BlackOutlineButton: FC<ButtonsType> = ({ icon, text }) => {
  return (
    <button className={styles.buttons + " text-blackText border-blackText"}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

const ButtonFilled: FC<ButtonsType> = ({ icon, text }) => {
  return (
    <button className={styles.buttons + " border-black bg-black text-white"}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

const styles = {
  buttons:
    "px-4 py-2 flex items-center justify-center capitalize text-center border-2 rounded-md font-bold gap-x-4 flex-nowrap min-w-fit",
};

export { ButtonFilled, OutlineButton };
