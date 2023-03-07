// =========== SLICES ==========
export interface IAddStaffSlice {
  firstname: string;
  lastname: string;
  dob: string;
  gender: "Male" | "Female";
  email: string;
  phoneNumber: string | number;
  country: string;
  state: string;
  city: string;
  address: string;
  passport: File | string;
  bankName: string;
  accountName: string;
  accountNumber: string | number;
  role: {
    position: string;
    role: string;
    salary: string;
    signature: string | File;
  };
}

// ================ STATES ===============
export type adminDetailsProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
};
