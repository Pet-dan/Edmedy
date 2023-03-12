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
  monthOfEmployment: "Month of Employment",
  yearOfEmployment: "Year of Employment",
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
  documents: [{ id: 0, name: "", file: "" }],
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
    addNewDocument: (state: IAddStaffSlice) => {
      state.documents = [
        ...state.documents,
        { id: new Date().getTime(), name: "", file: "" },
      ];
    },
    removeDocument: (
      state: IAddStaffSlice,
      action: PayloadAction<{ id: number }>
    ) => {
      state.documents = state.documents.filter(
        (doc) => doc.id !== action.payload.id
      );
    },
    updateDocumentDetails: (
      state: IAddStaffSlice,
      action: PayloadAction<{ id: number; key: string; value: string | File }>
    ) => {
      state.documents = state.documents.map((doc: any) => {
        if (doc.id === action.payload.id) {
          doc[action.payload.key] = action.payload.value;
        }
        return doc;
      });
    },
  },
});

export const {
  updateStaffDetails,
  updateRoleDetails,
  updateNextOfKinDetails,
  addNewDocument,
  removeDocument,
  updateDocumentDetails,
} = addStaffSlice.actions;
export const addStaffReducer = addStaffSlice.reducer;
