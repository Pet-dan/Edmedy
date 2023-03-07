import React, { ReactElement, Dispatch, SetStateAction } from "react";
export interface SidebarLink {
  icon: ReactElement;
  text: string;
  href: string;
}

export interface paymentDetailsProps {
  schoolEmail: string;
  country: string;
  state: string;
  zipCode: number | "";
  city: string;
  address: string;
  bankName: string;
  accountName: string;
  accountNumber: string | number;
}
export interface InputFields {
  placeholder: string;
  name: string;
  value?: string | number;
  type: string;
  label?: string;
  optionsList?: string[];
}

export interface MobileSidebarProps {
  links: SidebarLink[];
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
export interface DesktopSidebarProps {
  links: SidebarLink[];
}

export interface ContentBoxProps {
  defaultPadding: boolean; // if true, add padding on all sides, if false, add on only the top
  children?: ReactElement[] | ReactElement;
}

export interface ContentBoxWithAvatarProps {
  children?: ReactElement[] | ReactElement;
  avatar: ReactElement[] | ReactElement;
  header?: string;
  hasButton: boolean;
  buttonText?: string;
  buttonType?: "Outline" | "Fill";
  buttonIcon?: ReactElement;
  buttonLink?: string;
}

export interface ButtonsType {
  icon?: ReactElement;
  text: string;
}

export interface StaffFormProps {
  firstStepTitle: string;
  secondStepTitle: string;
  onSubmit?: () => void;
}
