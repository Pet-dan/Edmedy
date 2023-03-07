import React, { FC, ReactElement } from "react";
import {
  ContentBoxProps,
  ContentBoxWithAvatarProps,
  SmallContentBoxWithAvatarProps,
} from "../../types/componentsProps.types";
import { ButtonFilled, OutlineButton } from "./Buttons";

export const ContentBox: FC<ContentBoxProps> = ({
  children,
  defaultPadding,
}) => {
  return (
    <article
      className={`${
        defaultPadding ? "px-4 py-6 md:px-6 mt-6" : "pt-6"
      } border-[1.5px] rounded-md flex-1 w-full`}
    >
      {children}
    </article>
  );
};

export const ContentBoxWithAvatar: FC<ContentBoxWithAvatarProps> = (props) => {
  return (
    <article className={`border-[1.5px] rounded-[9px] flex-1 w-full bg-white`}>
      <ContentBoxWithAvatarHeader {...props} />
      <div className="w-full">{props.children}</div>
    </article>
  );
};

export const ContentBoxWithAvatarHeader: FC<ContentBoxWithAvatarProps> = ({
  header,
  avatar,
  hasButton,
  buttonType,
  buttonText,
}) => {
  return (
    <header className="w-full flex justify-between px-3 py-4 border-b-[1.5px] items-center">
      <div className="flex items-center gap-x-2 cursor-pointer">
        <span className="text-darkerGray bg-lightGray text-[1rem] font-bold flex items-center justify-center w-[26px] h-[26px] rounded-full">
          {avatar}
        </span>
        <p className="font-bold text-darkerGray">{header}</p>
      </div>
      {hasButton && (
        <div className="">
          {buttonType === "Fill" ? (
            <ButtonFilled text={buttonText as string} />
          ) : (
            <OutlineButton text={buttonText as string} />
          )}
        </div>
      )}
    </header>
  );
};

export const SmallContentBoxWIthAvatar: FC<SmallContentBoxWithAvatarProps> = ({
  avatar,
  iconBg,
  iconColor,
  title,
  subtitle,
  fullFlex,
}) => {
  return (
    <article
      className={
        "p-3 border-[1.5px] flex items-center gap-x-4 rounded-md min-w-[200px] flex-1"
      }
      style={{ flex: fullFlex ? 1 : 0 }}
    >
      <span
        className={
          "w-[40px] h-[40px] text-[18px] font-lighter flex justify-center items-center rounded-full "
        }
        style={{ background: iconBg, color: iconColor }}
      >
        {avatar}
      </span>
      <div>
        <p className="text-darkGray font-bold text-[1rem]">{title}</p>
        <h2 className="text-[1.1rem] font-bold">{subtitle}</h2>
      </div>
    </article>
  );
};
