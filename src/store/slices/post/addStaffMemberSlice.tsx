import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countryList } from "../../../assets/static";
import { IAddStaffSlice } from "../../../types/states.types";

const initialState: IAddStaffSlice = {
  firstname: "",
  lastname: "",
  dob: "",
  gender: "Male",
  email: "",
  phoneNumber: "",
  country: countryList[0],
  state: "",
  city: "",
  address: "",
  picture: "",
  bankName: "",
  accountName: "",
  accountNumber: "",
  role: {
    position: "Position",
    otherPosition: "",
    class: "Class",
    otherClass: "",
    subject: "",
    salary: "",
    signature: "",
  },
  nextOfKin: {
    name: "",
    email: "",
    dob: "",
    phoneNumber: "",
    address: "",
  },
};

const addStaffSlice = createSlice({
  name: "postStaff",
  initialState,
  reducers: {
    updateStaffDetails: (
      state: IAddStaffSlice,
      action: PayloadAction<{
        key: string;
        value:
          | any
          | (string &
              ("Male" | "Female") &
              (string | File) & {
                position: string;
                role: string;
                salary: string;
                signature: string | File;
              });
      }>
    ) => {
      state[action.payload.key as keyof IAddStaffSlice] = action.payload.value;
    },
    updateRoleDetails: (
      state: IAddStaffSlice,
      action: PayloadAction<{ key: string; value: any | string }>
    ) => {
      state.role[action.payload.key as keyof typeof state.role] =
        action.payload.value;
    },
    updateNextOfKinDetails: (
      state: IAddStaffSlice,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      state.nextOfKin[action.payload.key as keyof typeof state.nextOfKin] =
        action.payload.value;
    },
  },
});

export const { updateStaffDetails, updateRoleDetails, updateNextOfKinDetails } =
  addStaffSlice.actions;
export const addStaffReducer = addStaffSlice.reducer;
