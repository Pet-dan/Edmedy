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
  picture: File | string;
  bankName: string;
  accountName: string;
  accountNumber: string | number;
  role: {
    position:
      | "Position"
      | "Teacher"
      | "Cleaner"
      | "Bus Driver"
      | "Security"
      | "Bursar"
      | "Nurse"
      | "Chef"
      | "Bus Assistant"
      | "Nanny"
      | "Gardener"
      | "Others";
    otherPosition: string;
    // specifically for teachers
    class:
      | "Class"
      | "JSS 1"
      | "JSS 2"
      | "JSS 3"
      | "SS 1"
      | "SS 2"
      | "SS 3"
      | "Others";
    otherClass: string;
    subject: string;
    salary: string;
    signature: string | File;
  };
  nextOfKin: {
    name: string;
    email: string;
    dob: string;
    phoneNumber: string | number;
    address: string;
  };
  documents: {
    waec: string | File;
    birthCertificate: string | File;
    universityDegree: string | File;
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
