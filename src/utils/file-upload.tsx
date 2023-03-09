import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

export const useFileUpload = () => {
  const dispatch = useDispatch();
  const uploadFile = (
    e: ChangeEvent<HTMLInputElement>,
    payloadAction: any,
    key: string
  ) => {
    const file = e?.target?.files?.[0];
    if (file?.type.includes("image")) {
      dispatch(
        payloadAction({
          key,
          value: file,
        })
      );
    }
  };
  return uploadFile;
};
