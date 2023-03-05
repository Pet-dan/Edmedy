import React, { FC, ReactElement } from "react";

type ModalOverlayProps = {
  modalWidth: number;
  children?: ReactElement | ReactElement[];
};

const ModalOverlay: FC<ModalOverlayProps> = ({ modalWidth, children }) => {
  return (
    <div className="fixed z-[5] w-full min-h-screen bg-[rgba(0,0,0,.5)] flex justify-center items-center">
      <div
        className="w-[92vw] bg-white rounded-md p-6 mx-auto relative"
        style={{ maxWidth: modalWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;
